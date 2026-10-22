import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const packageDirectory = path.dirname(fileURLToPath(import.meta.url));
const distDirectory = path.join(packageDirectory, '..', 'dist');
const source = await readFile(
  path.join(packageDirectory, '..', 'src/index.ts'),
  'utf8',
);
const dependencies = [...source.matchAll(/^export \* from '([^']+)';$/gm)].map(
  ([, dependency]) => dependency,
);

const toGlobalName = (dependency) =>
  dependency
    .replace('@contentful/', '')
    .replace(/-([a-z])/g, (_, character) => character.toUpperCase());

const globals = dependencies.map(toGlobalName);
const dependencyList = dependencies.map((dependency) =>
  JSON.stringify(dependency),
);
const amdDependencies = ['"exports"', ...dependencyList].join(',');
const commonJsDependencies = [
  'exports',
  ...dependencies.map((dependency) => `require(${JSON.stringify(dependency)})`),
].join(',');
const browserDependencies = [
  '(global.f36Components = {})',
  ...globals.map((globalName) => `global.${globalName}`),
].join(',');
const exportForwarding = globals
  .map(
    (globalName) =>
      `Object.keys(${globalName}).forEach(function(key){if(key!=="default"&&!Object.prototype.hasOwnProperty.call(exports,key))Object.defineProperty(exports,key,{enumerable:true,get:function(){return ${globalName}[key]}})});`,
  )
  .join('');

const umd = `(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?factory(${commonJsDependencies}):typeof define==="function"&&define.amd?define([${amdDependencies}],factory):factory(${browserDependencies})})(typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:this,function(exports,${globals.join(',')}){"use strict";${exportForwarding}});\n//# sourceMappingURL=index.umd.js.map\n`;

const emptySourceMap = (file) =>
  `${JSON.stringify({ version: 3, file, sources: [], sourcesContent: [], names: [], mappings: '' })}\n`;

const withSourceMapComment = (contents, file) =>
  contents.includes('sourceMappingURL=')
    ? contents
    : `${contents.trimEnd()}\n//# sourceMappingURL=${file}.map\n`;

const ensureSourceMap = async (file) => {
  try {
    await access(path.join(distDirectory, file));
  } catch {
    await writeFile(
      path.join(distDirectory, file),
      emptySourceMap(file.replace('.map', '')),
    );
  }
};

await mkdir(distDirectory, { recursive: true });

const cjs = await readFile(path.join(distDirectory, 'index.js'), 'utf8');
const esm = await readFile(path.join(distDirectory, 'index.module.js'), 'utf8');
await writeFile(
  path.join(distDirectory, 'index.js'),
  withSourceMapComment(cjs, 'index.js'),
);
await writeFile(
  path.join(distDirectory, 'index.modern.mjs'),
  withSourceMapComment(esm, 'index.modern.mjs').replaceAll(
    'index.module.js.map',
    'index.modern.mjs.map',
  ),
);
await writeFile(
  path.join(distDirectory, 'index.module.js'),
  withSourceMapComment(esm, 'index.module.js'),
);
await writeFile(path.join(distDirectory, 'index.umd.js'), umd);

await ensureSourceMap('index.js.map');
await ensureSourceMap('index.module.js.map');
await ensureSourceMap('index.modern.mjs.map');
await writeFile(
  path.join(distDirectory, 'index.umd.js.map'),
  emptySourceMap('index.umd.js'),
);

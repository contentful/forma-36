import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import path from 'path';
import pkg from '../package.json';

export default {
  input: path.resolve(__dirname, '../esm/index.js'),
  output: {
    file: path.resolve(__dirname, '../dist', 'esm', 'index.js'),
    format: 'es',
  },
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
  plugins: [resolve(), commonjs()],
};

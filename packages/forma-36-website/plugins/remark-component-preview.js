const path = require('path');
const visit = require('unist-util-visit');
const u = require('unist-builder');

function componentPreview() {
  return function transform(tree, file) {
    const codes = [];

    // walk the tree once and record all nodes with type 'code' (markdown code blocks)
    visit(tree, 'code', (node, index, parent) => {
      codes.push([node, index, parent]);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [node, _, parent] of codes) {
      // check for `file=<path>` meta
      const allMetas = (node.meta || '').split(' ');
      const fileMeta = allMetas.find((meta) => meta.startsWith('file='));
      const isStaticCodeBlock = allMetas.some((meta) => meta === 'static=true');

      // if code block doesn't have `file=<path>` param
      // or has a `static=true` param, we won't create a preview
      if (!fileMeta || isStaticCodeBlock) {
        continue;
      }

      // get `path` from meta. Regex copypasted from `remark-code-import` plugin.
      const res = /^file=(?<path>.+?)(?:(?:#(?:L(?<from>\d+)(?<dash>-)?)?)(?:L(?<to>\d+))?)?$/.exec(
        fileMeta,
      );
      if (!res || !res.groups || !res.groups.path) {
        throw new Error(`Unable to parse file path ${fileMeta}`);
      }
      const filePath = res.groups.path;

      let componentName = res.groups.path.split('/').pop().split('.').shift();
      const fileAbsPath = path.resolve(file.dirname, filePath);

      // create nodes for [MDXAST](https://github.com/mdx-js/specification)
      const componentImport = u('import', {
        value: `import ${componentName} from '${fileAbsPath}'`,
      });
      const componentRender = u('jsx', {
        value: `<${componentName} />`,
      });

      // insert the component directly before the code block
      const index = parent.children.indexOf(node);
      parent.children.splice(index, 0, componentRender);
      parent.children.splice(index, 0, componentImport);
    }
  };
}

module.exports = componentPreview;

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow using emotion statically',
      category: 'Best Practices',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === 'css') {
          let traverseNode = node;
          let hasFunctionWrapper = false;

          while (traverseNode.parent && traverseNode.parentType !== 'Program') {
            if (
              [
                'FunctionExpression',
                'FunctionDeclaration',
                'ArrowFunctionExpression',
              ].includes(traverseNode.type)
            ) {
              hasFunctionWrapper = true;
            }
            traverseNode = traverseNode.parent;
          }

          if (hasFunctionWrapper) {
            return;
          }

          context.report({
            node,
            message:
              'Use Emotion css({ ... }) only inside of a function that is called when component is rendered',
          });
        }
      },
    };
  },
};

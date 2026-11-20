import { describe, expect, it } from 'vitest';

const j = require('jscodeshift').withParser('tsx');
const {
  attributesToObject,
  createComponent,
  getRenderFunction,
  isFragment,
  objectToAttributes,
} = require('..');

const jsx = (code) => j(code).find(j.JSXElement).get().node;
const expr = (code) =>
  j(`(${code})`).find(j.ExpressionStatement).get().node.expression;
const print = (node) => j(node).toSource();

describe('jsx utils', () => {
  it('isFragment', () => {
    expect(isFragment(j, expr('<>a</>'))).toBe(true);
    expect(isFragment(j, jsx('<React.Fragment>a</React.Fragment>'))).toBe(true);
    expect(isFragment(j, jsx('<Fragment key="k">a</Fragment>'))).toBe(false);
    expect(isFragment(j, jsx('<form>a</form>'))).toBe(false);
  });

  it('getRenderFunction', () => {
    expect(getRenderFunction(jsx('<M>\n  {() => <p />}\n</M>'))?.type).toBe(
      'ArrowFunctionExpression',
    );
    expect(getRenderFunction(jsx('<M>{() => <p />}<p /></M>'))).toBeUndefined();
    expect(getRenderFunction(jsx('<M><p /></M>'))).toBeUndefined();
  });

  it('objectToAttributes', () => {
    const toJsx = (code) =>
      print(
        j.jsxOpeningElement(
          j.jsxIdentifier('X'),
          objectToAttributes(j, expr(code)),
          true,
        ),
      );
    expect(toJsx(`{ a: 'x', b, 'data-id': 1, ...c }`)).toBe(
      '<X a="x" b={b} data-id={1} {...c} />',
    );
    expect(toJsx(`{ a: 'say "hi"' }`)).toBe(`<X a={'say "hi"'} />`);
    const isSingleSpread = (code) => {
      const attributes = objectToAttributes(j, expr(code));
      return (
        attributes.length === 1 && attributes[0].type === 'JSXSpreadAttribute'
      );
    };
    expect(isSingleSpread('{ [k]: v }')).toBe(true);
    expect(isSingleSpread('{ 1: v }')).toBe(true);
    expect(isSingleSpread('{ m() {} }')).toBe(true);
    expect(isSingleSpread('props')).toBe(true);
  });

  it('attributesToObject', () => {
    const { attributes } = jsx(
      '<X a="x" b={b} c data-id="1" {...d} />',
    ).openingElement;
    expect(print(attributesToObject(j, attributes)).replace(/\s+/g, ' ')).toBe(
      `{ a: "x", b: b, c: true, "data-id": "1", ...d }`,
    );
  });

  it('createComponent with a dotted name', () => {
    expect(
      print(
        createComponent({
          componentName: 'Modal.Header',
          isSelfClosing: true,
          j,
        }),
      ),
    ).toBe('<Modal.Header />');
    expect(
      print(
        createComponent({
          componentName: 'A.B.C',
          children: [j.jsxText('x')],
          j,
        }),
      ),
    ).toBe('<A.B.C>x</A.B.C>');
  });
});

import React from 'react';
import { getTextFromChildren } from './getTextFromChildren';

describe('getTextFromChildren', () => {
  it('retrieves text recursively', () => {
    const node = (
      <div>
        Status: <span>Published</span>
      </div>
    );

    expect(getTextFromChildren(node)).toBe('Status: Published');
  });

  it('works with React fragments', () => {
    const node = <>Status</>;

    expect(getTextFromChildren(node)).toBe('Status');
  });

  it('works with number nodes', () => {
    const node = <div>123</div>;

    expect(getTextFromChildren(node)).toBe('123');
  });

  it('ignores unsupported node types', () => {
    const node = (
      <div>
        <img src="" />
        {null}
      </div>
    );

    expect(getTextFromChildren(node)).toBe('');
  });
});

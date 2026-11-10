import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { AIChatMessage } from './AIChatMessage';
import { getStyles } from './AIChatMessage.styles';

describe('AIChatMessage markdown integration', () => {
  it('renders markdown, GFM, and raw HTML through the real plugins', () => {
    const content = [
      '# Summary',
      '',
      'Visit [Contentful](https://www.contentful.com) and use `inline`.',
      '',
      '| Feature | Status |',
      '| --- | --- |',
      '| Tables | Supported |',
      '',
      '<ins>Raw HTML</ins>',
      '',
      '```ts',
      'const value = 1;',
      '```',
      '',
      '```',
      'unlabelled block',
      '```',
    ].join('\n');

    render(<AIChatMessage authorRole="assistant" content={content} />);

    expect(
      screen.getByRole('heading', { name: 'Summary' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contentful' })).toHaveAttribute(
      'href',
      'https://www.contentful.com',
    );
    const table = screen.getByRole('table');
    expect(within(table).getByText('Feature')).toBeInTheDocument();
    expect(within(table).getByText('Supported')).toBeInTheDocument();
    expect(screen.getByText('Raw HTML').tagName).toBe('U');

    const styles = getStyles({ isUserMessage: false });
    expect(screen.getByText('inline')).toHaveClass(styles.inlineCode);
    expect(screen.getByText('const value = 1;')).toHaveClass(styles.codeBlock);
    expect(screen.getByText('unlabelled block')).toHaveClass(styles.codeBlock);
  });

  it('passes parsed markdown and raw HTML props to component overrides', () => {
    const overrideLink = vi.fn((props) => ({
      ...props,
      target: '_blank',
      rel: 'noopener noreferrer',
    }));
    const overrideDiv = vi.fn((props) => ({
      ...props,
      children: 'Custom content',
    }));

    render(
      <AIChatMessage
        authorRole="assistant"
        content={
          '[Link](https://example.com)\n\n<div data-component="custom"></div>'
        }
        contentComponentsOverrides={{ a: overrideLink, div: overrideDiv }}
      />,
    );

    expect(overrideLink).toHaveBeenCalledWith(
      expect.objectContaining({
        href: 'https://example.com',
        children: 'Link',
      }),
    );
    expect(screen.getByRole('link', { name: 'Link' })).toHaveAttribute(
      'target',
      '_blank',
    );
    expect(overrideDiv).toHaveBeenCalledWith(
      expect.objectContaining({ 'data-component': 'custom' }),
    );
    expect(screen.getByText('Custom content')).toHaveAttribute(
      'data-component',
      'custom',
    );
  });
});

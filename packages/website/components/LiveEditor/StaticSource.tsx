import React from 'react';

import Highlight, {
  defaultProps as HighlightDefaultProps,
  Language,
} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';
import { cx, css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const styles = {
  root: css({
    padding: tokens.spacingM,
    margin: 0,
    fontFamily: tokens.fontStackMonospace,
    fontSize: tokens.fontSizeM,
    borderRadius: tokens.borderRadiusMedium,
    wordBreak: 'break-word',
    whiteSpace: 'break-spaces',
  }),
};

export function StaticSource(props: { children: string; className?: string }) {
  const language = (props.className || '').replace('language-', '') as Language;

  return (
    <Highlight
      {...HighlightDefaultProps}
      theme={theme}
      code={props.children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cx(styles.root, className)} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

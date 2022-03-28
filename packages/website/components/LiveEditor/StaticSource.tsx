import React from 'react';

import Highlight, {
  defaultProps as HighlightDefaultProps,
} from 'prism-react-renderer';
import { theme } from './theme';
import { cx, css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const styles = {
  root: css({
    padding: tokens.spacingM,
    borderRadius: tokens.borderRadiusMedium,
    marginBottom: tokens.spacingM,
  }),
};

export function StaticSource(props: { children: string; className?: string, language?: string}) {
  return (
    <Highlight
      {...HighlightDefaultProps}
      theme={theme}
      code={props.children.trim()}
      language={
        ((props.className || '').replace('language-', '') as unknown) as any
      }
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

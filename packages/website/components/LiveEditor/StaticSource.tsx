import React from 'react';

import Highlight, {
  defaultProps as HighlightDefaultProps,
  type Language,
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

interface StaticSourceProps {
  children: string;
  className?: string;
}

export function StaticSource(props: StaticSourceProps) {
  const language = props.className?.replace('language-', '') ?? 'jsx';

  return (
    <Highlight
      {...HighlightDefaultProps}
      theme={theme}
      code={props.children.trim()}
      language={language as Language}
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

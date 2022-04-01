import React, { useContext } from 'react';
import { Forma36Context, Dark } from '@contentful/f36-core';
import Highlight, {
  defaultProps as HighlightDefaultProps,
} from 'prism-react-renderer';
import { cx, css } from 'emotion';
import tokens from '@contentful/f36-tokens';

import { theme, themeDark } from './theme';

const styles = {
  root: css({
    padding: tokens.spacingM,
    borderRadius: tokens.borderRadiusMedium,
    marginBottom: tokens.spacingM,
  }),
};

export function StaticSource(props: { children: string; className?: string }) {
  const { theme: pageTheme } = useContext(Forma36Context);

  return (
    <Highlight
      {...HighlightDefaultProps}
      theme={pageTheme === Dark ? themeDark : theme}
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

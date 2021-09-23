import React, { useState } from 'react';
import { css } from 'emotion';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import tokens from '@contentful/f36-tokens';
import * as f36Components from '@contentful/f36-components';
import { Card, Button } from '@contentful/f36-components';
import * as f36icons from '@contentful/f36-icons';
import { Icon } from '@contentful/f36-icon';
import { Flex } from '@contentful/f36-core';

const styles = {
  preview: css`
    padding: ${tokens.spacingM};
  `,

  error: css`
    font-family: ${tokens.fontStackMonospace};
    font-size: ${tokens.fontSizeS};
    background: ${tokens.colorNegative};
    color: ${tokens.colorWhite};
    padding: ${tokens.spacingXs};
  `,

  editor: css`
    font-family: ${tokens.fontStackMonospace};
    background-color: #222031;
    color: #ffffff;
  `,

  // !important was necessary because these styles are being applied after the Card component styles
  card: css`
    border-radius: ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium} 0 0 !important;
  `,

  toggle: css`
    border-radius: 0 0 ${tokens.borderRadiusMedium} ${tokens.borderRadiusMedium};
  `,
};

export default function ComponentSource({ children }) {
  const [showSource, setShowSource] = useState(false);

  const handleToggle = () => {
    setShowSource((prevState) => !prevState);
  };

  return (
    <Flex flexDirection="column" marginBottom="spacingM">
      <LiveProvider
        code={children.trim()}
        // The order is important here as `f36icons` and `f36Components` both
        // export a component called `Heading`
        scope={{
          ...f36icons,
          ...f36Components,
          f36icons,
          tokens,
          Icon,
        }}
      >
        <Card className={styles.card} padding="none">
          <LivePreview className={styles.preview} />
          {showSource && (
            <>
              <LiveError className={styles.error} />
              <LiveEditor className={styles.editor} />
            </>
          )}
        </Card>
        <Button
          className={styles.toggle}
          variant="secondary"
          onClick={handleToggle}
          isFullWidth
        >
          {showSource ? 'Hide source' : 'Show source'}
        </Button>
      </LiveProvider>
    </Flex>
  );
}

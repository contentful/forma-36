import { Collapse, IconButton } from '@contentful/f36-components';
import { Box, Flex, type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, useEffect, useState, type Ref } from 'react';
import { getStyles } from './AIChatMessage.styles';

export interface AIChatMessageProps extends CommonProps {}

function _AIChatMessage(props: AIChatMessageProps, ref: Ref<HTMLDivElement>) {
  const { className, testId = 'cf-ui-ai-chat-layout' } = props;

  const styles = getStyles();

  return (
    <Box ref={ref} testId={testId} className={cx(className)}>
      Ai Chat Message
    </Box>
  );
}

/** TODO */
export const AIChatMessage = forwardRef(_AIChatMessage);

import { IconButton } from '@contentful/f36-button';
import { Box } from '@contentful/f36-core';
import { ArrowUpIcon } from '@contentful/f36-icons';
import { AIChatInputProps } from './AIChatInput';
import { getStyles } from './AIChatInput.styles';
import React from 'react';

type AIChatSubmitButtonProps = Pick<
  AIChatInputProps,
  'isStreaming' | 'onSubmit' | 'onStop'
> &
  Required<Pick<AIChatInputProps, 'testId' | 'onSubmit' | 'editorRef'>>;

export const AIChatSubmitButton: React.FC<AIChatSubmitButtonProps> = ({
  testId,
  isStreaming,
  onSubmit,
  onStop,
  editorRef,
}) => {
  const styles = getStyles();
  const stopIcon = <Box className={styles.stopIcon} />;
  const submitButton = (
    <IconButton
      testId={`${testId}-submit-button`}
      onClick={() => onSubmit(editorRef.current)}
      variant="primary"
      aria-label="send prompt"
      title="send prompt"
      size="small"
      icon={<ArrowUpIcon />}
    />
  );
  const stopButton = (
    <IconButton
      testId={`${testId}-stop-button`}
      onClick={onStop}
      variant="secondary"
      aria-label="stop generating"
      title="stop generating"
      size="small"
      icon={stopIcon}
    />
  );

  return !isStreaming ? submitButton : stopButton;
};

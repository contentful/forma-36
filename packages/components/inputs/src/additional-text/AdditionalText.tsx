import React from 'react';
import { Text } from '@contentful/f36-typography';
import { ErrorCircleOutlineIcon } from '@contentful/f36-icons';
import getStyles from './AdditionalText.styles';

export interface AdditionalTextProps {
  validationMessage?: string;
  helpText?: string;
}

export const AdditionalText = (props: AdditionalTextProps) => {
  const { validationMessage = '', helpText = '' } = props;
  const styles = getStyles();

  return (
    <>
      {helpText && (
        <Text as="span" className={styles.helpText}>
          {helpText}
        </Text>
      )}
      {validationMessage && (
        <Text as="span" className={styles.validation}>
          <ErrorCircleOutlineIcon marginRight="spacing2Xs" variant="negative" />
          {validationMessage}
        </Text>
      )}
    </>
  );
};

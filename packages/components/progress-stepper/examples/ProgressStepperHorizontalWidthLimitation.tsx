import React from 'react';
import { Box, Header, ProgressStepper } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export default function ProgressStepperHorizontalWidthLimitation() {
  const styles = {
    root: css({
      border: `1px solid ${tokens.gray300}`,
    }),
    stepperContainer: css({
      padding: `${tokens.spacingS} 0`,
    }),
    headerContainer: css({
      borderTop: `1px solid ${tokens.gray300}`,
    }),
  };

  return (
    <Box className={styles.root}>
      <Box className={styles.stepperContainer}>
        <ProgressStepper
          activeStep={2}
          ariaLabel="Horizontal progress stepper width limitation example"
        >
          <ProgressStepper.Step state="complete" labelText="Label 1" />
          <ProgressStepper.Step state="complete" labelText="Label 2" />
          <ProgressStepper.Step state="active" labelText="Label 3" />
          <ProgressStepper.Step labelText="Label 4" />
          <ProgressStepper.Step labelText="Label 5" />
        </ProgressStepper>
      </Box>
      <Box className={styles.headerContainer}>
        <Header title="Header within the same parent container" />
      </Box>
    </Box>
  );
}

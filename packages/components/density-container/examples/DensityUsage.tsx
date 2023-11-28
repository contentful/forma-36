import React from 'react';
import tokens from '@contentful/f36-tokens';
import { DensityContainer } from '@contentful/f36-density-container';
import { Box, Button, Flex, Heading } from '@contentful/f36-components';

export default function DensityUsage() {
  return (
    <Flex gap="spacing2Xl" alignItems="start" marginTop="spacingM">
      <Box>
        <DensityContainer density="low">
          <Heading as="h2" marginBottom="spacingXs">
            Low density
          </Heading>
          <Box marginBottom="spacingL">
            <Box
              marginTop="spacingS"
              style={{
                backgroundColor: tokens.gray200,
                padding: tokens.spacingS,
                borderRadius: tokens.borderRadiusMedium,
              }}
            >
              <Flex gap="spacingS" alignItems="end">
                <Button variant="primary" size="medium">
                  Medium button
                </Button>
                <Button variant="primary" size="small">
                  Small button
                </Button>
              </Flex>
            </Box>
          </Box>
        </DensityContainer>
      </Box>

      <Box>
        <DensityContainer density="high">
          <Heading as="h2" marginBottom="spacingXs">
            High density
          </Heading>
          <Box marginBottom="spacingL">
            <Box
              marginTop="spacingS"
              style={{
                backgroundColor: tokens.gray200,
                padding: tokens.spacingS,
                borderRadius: tokens.borderRadiusMedium,
              }}
            >
              <Flex gap="spacingS" alignItems="end">
                <Button variant="primary" size="medium">
                  Medium button
                </Button>
                <Button variant="primary" size="small">
                  Small button
                </Button>
              </Flex>
            </Box>
          </Box>
        </DensityContainer>
      </Box>
    </Flex>
  );
}

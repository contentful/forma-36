import React from 'react';
import { Box, type CommonProps } from '@contentful/f36-core';
import { DensityProvider, type Density } from '@contentful/f36-utils';

export interface DensityContainerProps extends CommonProps {
  children: React.ReactNode;
  /**
   * The density of the container:
   *
   * - A `low` density results in the default UI.
   * - A `high` density results in a denser UI, allowing more content and actions to fit on a single screen.
   */
  density: Density;
}

function _DensityContainer(
  props: DensityContainerProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    density,
    testId = `cf-ui-density-container--${density}`,
    className,
    children,
  } = props;

  return (
    <DensityProvider value={density}>
      <Box ref={ref} data-test-id={testId} className={className}>
        {children}
      </Box>
    </DensityProvider>
  );
}

_DensityContainer.displayName = 'DensityContainer';

export const DensityContainer = React.forwardRef(_DensityContainer);

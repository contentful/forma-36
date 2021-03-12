import type { CSSProperties } from 'react';

export type CommonProps = {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * A selection ID used for testing purposes applied as a data attribute
   * (data-test-id)
   */
  testId?: string;
  /** Styles */
  style?: CSSProperties;
};

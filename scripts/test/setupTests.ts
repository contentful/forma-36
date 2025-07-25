import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';
import { configureAxe, toHaveNoViolations } from 'jest-axe';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test-id' });
configureAxe({
  rules: {
    region: { enabled: false },
  },
});

expect.extend(toHaveNoViolations);

// We shouldn't allow failed prop types in tests
const error = console.error;
console.error = (warning, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(warning)) {
    throw new Error(warning);
  }
  error.apply(console, [warning, ...args]);
};

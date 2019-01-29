/* eslint-disable no-console, prefer-destructuring */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { toHaveNoViolations } from 'jest-axe';
import '@babel/polyfill';

configure({ adapter: new Adapter() });

expect.extend(toHaveNoViolations);

// We shouldn't allow failed prop types in tests
const error = console.error;
console.error = (warning, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(warning)) {
    throw new Error(warning);
  }
  error.apply(console, [warning, ...args]);
};

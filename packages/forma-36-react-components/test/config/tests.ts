/* eslint-disable no-console, prefer-destructuring */

import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// We shouldn't allow failed prop types in tests
const error = console.error;
console.error = (warning, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(warning)) {
    throw new Error(warning);
  }
  error.apply(console, [warning, ...args]);
};

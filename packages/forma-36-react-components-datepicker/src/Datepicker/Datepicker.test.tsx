import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Datepicker from './Datepicker';

describe('Datepicker', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Datepicker labelText="Date" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

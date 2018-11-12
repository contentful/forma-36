import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ModalControls.css';

const Controls = ({ testId, extraClassNames, children, ...rest }) => (
  <div
    {...rest}
    className={cn(styles.ModalControls, extraClassNames)}
    data-test-id={testId}
  >
    {children}
  </div>
);
Controls.defaultProps = {
  testId: 'cf-ui-modal-controls',
  extraClassNames: undefined,
};
Controls.propTypes = {
  testId: PropTypes.string,
  extraClassNames: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Controls;

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ModalContent.css';

const Content = ({ testId, extraClassNames, children, ...rest }) => (
  <div
    {...rest}
    className={cn(styles.ModalContent, extraClassNames)}
    data-test-id={testId}
  >
    {children}
  </div>
);
Content.defaultProps = {
  testId: 'cf-ui-modal-content',
  extraClassNames: undefined,
};
Content.propTypes = {
  testId: PropTypes.string,
  extraClassNames: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Content;

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import IconButton from '../../IconButton/index';
import styles from './ModalHeader.css';

const Header = ({ onClose, title, testId, extraClassNames, ...rest }) => (
  <div
    {...rest}
    className={cn(styles.ModalHeader, extraClassNames)}
    data-test-id={testId}
  >
    <h1 className={styles.ModalHeader__title}>{title}</h1>
    {onClose && (
      <IconButton
        iconProps={{ icon: 'Close' }}
        buttonType="muted"
        label="Close"
        onClick={onClose}
      />
    )}
  </div>
);
Header.defaultProps = {
  testId: 'cf-ui-modal-header',
  extraClassNames: undefined,
  onClose: undefined,
};
Header.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  testId: PropTypes.string,
  extraClassNames: PropTypes.string,
};

export default Header;

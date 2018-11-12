import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './DocPage.css';

class DocPage extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {
    const classNames = cn(styles.DocPage);

    return <div className={classNames}>{this.props.children}</div>;
  }
}

export default DocPage;

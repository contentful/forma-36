import React from 'react';
import cn from 'classnames';
import styles from './DocPage.css';

class DocPage extends React.Component {
  render() {
    const classNames = cn(styles['DocPage']);

    return <div className={classNames}>{this.props.children}</div>;
  }
}

export default DocPage;

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Illustration.css';
import { illustrationName } from './constants';

import Archive from './svg/Archive.svg';
import Audio from './svg/Audio.svg';
import Code from './svg/Code.svg';
import Image from './svg/Image.svg';
import Markup from './svg/Markup.svg';
import Pdf from './svg/Pdf.svg';
import Plaintext from './svg/Plaintext.svg';
import Presentation from './svg/Presentation.svg';
import Richtext from './svg/Richtext.svg';
import Spreadsheet from './svg/Spreadsheet.svg';
import Video from './svg/Video.svg';

class Illustration extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    illustration: PropTypes.oneOf(Object.keys(illustrationName)).isRequired,
    testId: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: undefined,
    testId: 'cf-ui-icon',
  };

  render() {
    const { extraClassNames, testId, illustration, ...otherProps } = this.props;
    const illustrationComponents = {
      Archive,
      Audio,
      Richtext,
      Code,
      Image,
      Markup,
      Pdf,
      Plaintext,
      Presentation,
      Spreadsheet,
      Video,
    };

    const classNames = cn(styles.Illustration, extraClassNames);

    const Element = illustrationComponents[illustration];

    return (
      <Element data-test-id={testId} className={classNames} {...otherProps} />
    );
  }
}

export default Illustration;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { illustrationName } from './constants';

const Archive = require('./svg/Archive.svg');
const Audio = require('./svg/Audio.svg');
const Code = require('./svg/Code.svg');
const Image = require('./svg/Image.svg');
const Markup = require('./svg/Markup.svg');
const Pdf = require('./svg/Pdf.svg');
const Plaintext = require('./svg/Plaintext.svg');
const Presentation = require('./svg/Presentation.svg');
const Richtext = require('./svg/Richtext.svg');
const Spreadsheet = require('./svg/Spreadsheet.svg');
const Video = require('./svg/Video.svg');

import styles from './Illustration.css';

export type IllustrationType = keyof typeof illustrationName;

export interface IllustrationProps {
  extraClassNames?: string;
  testId?: string;
  illustration: IllustrationType;
}

export class Illustration extends Component<IllustrationProps> {
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

    const classNames = cn(styles['Illustration'], extraClassNames);

    const Element = illustrationComponents[illustration];

    return (
      <Element data-test-id={testId} className={classNames} {...otherProps} />
    );
  }
}

export default Illustration;

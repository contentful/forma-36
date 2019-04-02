import React, { Component } from 'react';
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

export type IllustrationProps = {
  illustration: IllustrationType;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-illustration',
};

export class Illustration extends Component<IllustrationProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, testId, illustration, ...otherProps } = this.props;
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

    const classNames = cn(styles['Illustration'], className);

    const Element = illustrationComponents[illustration];

    return (
      <Element {...otherProps} data-test-id={testId} className={classNames} />
    );
  }
}

export default Illustration;

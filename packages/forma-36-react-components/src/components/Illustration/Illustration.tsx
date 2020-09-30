import React, { Component } from 'react';
import cn from 'classnames';
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

import styles from './Illustration.css';

export type IllustrationType = keyof typeof illustrationName;

const ILLUSTRATION_NAMES = Object.keys(illustrationName);
export function isIllustrationType(name: string): name is IllustrationType {
  return ILLUSTRATION_NAMES.includes(name);
}

export interface IllustrationProps {
  illustration: IllustrationType;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
}

const defaultProps: Partial<IllustrationProps> = {
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

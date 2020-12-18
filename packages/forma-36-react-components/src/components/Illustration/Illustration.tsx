import React from 'react';
import cn from 'classnames';

import { illustrationName } from './constants';
import {
  Archive,
  Audio,
  Code,
  Image,
  Markup,
  Pdf,
  Plaintext,
  Presentation,
  Richtext,
  Spreadsheet,
  Video,
} from './svg';
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

export function Illustration({
  className,
  testId,
  illustration,
  ...otherProps
}: IllustrationProps): React.ReactElement {
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

Illustration.defaultProps = {
  testId: 'cf-ui-illustration',
};

export default Illustration;

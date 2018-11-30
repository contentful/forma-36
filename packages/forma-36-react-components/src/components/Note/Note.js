import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { iconName } from '../Icon/constants';
import styles from './Note.css';

export const NoteType = {
  PRIMARY: 'primary',
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
};

const Icons = {
  [NoteType.PRIMARY]: iconName.InfoCircle,
  [NoteType.POSITIVE]: iconName.CheckCircle,
  [NoteType.NEGATIVE]: iconName.Warning,
};

export default function Note(props) {
  const icon = Icons[props.noteType];
  if (!icon) {
    throw new Error(
      `Intent ${props.noteType} is not supported in Note component.`,
    );
  }

  return (
    <div
      style={props.style}
      className={classNames(styles.Note, props.extraClassNames, {
        [styles['Note--primary']]: props.noteType === NoteType.PRIMARY,
        [styles['Note--positive']]: props.noteType === NoteType.POSITIVE,
        [styles['Note--negative']]: props.noteType === NoteType.NEGATIVE,
      })}
      data-test-id={props.testId}
    >
      <div className={styles.Note__icon}>
        <Icon icon={icon} color={props.noteType} />
      </div>
      <div className={styles.Note__info}>
        {props.title && <div className={styles.Note__title}>{props.title}</div>}
        <div>{props.children}</div>
      </div>
    </div>
  );
}

Note.Type = NoteType;

Note.propTypes = {
  title: PropTypes.string,
  noteType: PropTypes.oneOf([
    NoteType.POSITIVE,
    NoteType.NEGATIVE,
    NoteType.PRIMARY,
  ]),
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
  extraClassNames: PropTypes.string,
  style: PropTypes.object,
};

Note.defaultProps = {
  title: undefined,
  noteType: NoteType.PRIMARY,
  testId: 'cf-ui-note',
  extraClassNames: undefined,
  style: undefined,
};

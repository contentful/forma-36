import React, { CSSProperties, Component } from 'react';
import classNames from 'classnames';
import Icon, { IconColorType, IconType } from '../Icon/Icon';
import { iconName } from '../Icon/constants';

const styles = require('./Note.css');

// had to use 'as' here in a weird way, due to backward compatible reasons
// since NoteType is exposted as an external API and keys names cannot be changed with a breaking change
export const NoteType = {
  PRIMARY: 'primary' as 'primary',
  POSITIVE: 'positive' as 'positive',
  NEGATIVE: 'negative' as 'negative',
  WARNING: 'warning' as 'warning',
};

const Icons = {
  [NoteType.PRIMARY]: iconName.InfoCircle,
  [NoteType.POSITIVE]: iconName.CheckCircle,
  [NoteType.NEGATIVE]: iconName.Warning,
  [NoteType.WARNING]: iconName.Warning,
};

export type NoteProps = {
  noteType: 'primary' | 'positive' | 'negative' | 'warning';
  testId: string;
  className?: string;
  title?: string;
  style?: CSSProperties;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  noteType: 'primary',
  testId: 'cf-ui-note',
};

export class Note extends Component<NoteProps> {
  static Type = NoteType;

  static defaultProps = defaultProps;

  render() {
    const icon = Icons[this.props.noteType] as IconType;
    if (!icon) {
      throw new Error(
        `Intent ${this.props.noteType} is not supported in Note component.`,
      );
    }

    return (
      <div
        style={this.props.style}
        className={classNames(styles.Note, this.props.className, {
          [styles['Note--primary']]: this.props.noteType === NoteType.PRIMARY,
          [styles['Note--positive']]: this.props.noteType === NoteType.POSITIVE,
          [styles['Note--negative']]: this.props.noteType === NoteType.NEGATIVE,
          [styles['Note--warning']]: this.props.noteType === NoteType.WARNING,
        })}
        data-test-id={this.props.testId}
      >
        <div className={styles.Note__icon}>
          <Icon icon={icon} color={this.props.noteType as IconColorType} />
        </div>
        <div className={styles.Note__info}>
          {this.props.title && (
            <div className={styles.Note__title}>{this.props.title}</div>
          )}
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Note;

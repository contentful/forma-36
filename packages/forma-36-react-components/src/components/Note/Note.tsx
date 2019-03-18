import React, { CSSProperties, Component } from 'react';
import classNames from 'classnames';
import Icon, { IconType } from '../Icon/Icon';
import { iconName } from '../Icon/constants';

const styles = require('./Note.css');

const Icons = {
  primary: iconName.InfoCircle,
  positive: iconName.CheckCircle,
  negative: iconName.Warning,
  warning: iconName.Warning,
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
          [styles['Note--primary']]: this.props.noteType === 'primary',
          [styles['Note--positive']]: this.props.noteType === 'positive',
          [styles['Note--negative']]: this.props.noteType === 'negative',
          [styles['Note--warning']]: this.props.noteType === 'warning',
        })}
        data-test-id={this.props.testId}
      >
        <div className={styles.Note__icon}>
          <Icon icon={icon} color={this.props.noteType} />
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

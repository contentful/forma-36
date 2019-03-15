import React, {
  Component,
  CSSProperties,
  MouseEventHandler,
  KeyboardEvent,
} from 'react';
import classNames from 'classnames';

const styles = require('./Tabs.css');

export type TabProps = {
  id: string;
  onSelect?: (id: string) => void;
  selected?: boolean;
  href?: string;
  target?: string;
  disabled?: boolean;
  tabIndex?: number;
  style?: CSSProperties;
  extraClassNames?: string;
  testId?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  selected: false,
  disabled: false,
  testId: 'cf-ui-tab',
  tabIndex: 0,
};

export class Tab extends Component<TabProps> {
  static defaultProps = defaultProps;

  onClick: MouseEventHandler = () => {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.id);
    }
  };

  onKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (this.props.onSelect && e.key === 'Enter') {
      this.props.onSelect(this.props.id);
      e.preventDefault();
    }
  };

  render() {
    const {
      id,
      disabled,
      extraClassNames,
      href,
      style,
      testId,
      selected,
      children,
      tabIndex,
    } = this.props;
    let elementProps = {
      className: classNames(
        styles.Tab,
        {
          [styles['Tab__selected']]: selected,
        },
        extraClassNames,
      ),
      onClick: this.onClick,
      onKeyPress: this.onKeyPress,
      style: style,
      'data-test-id': testId,
      tabIndex,
    };

    if (disabled) {
      elementProps['aria-disabled'] = true;
    }
    if (href) {
      elementProps['href'] = href;
      if (selected) {
        elementProps['aria-current'] = 'page';
      }
      return <a {...elementProps}>{children}</a>;
    } else {
      elementProps['aria-selected'] = selected;
      elementProps['role'] = 'tab';
      elementProps['aria-controls'] = id;
      return <div {...elementProps}>{children}</div>;
    }
  }
}

export default Tab;

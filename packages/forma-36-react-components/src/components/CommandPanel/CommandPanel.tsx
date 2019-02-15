import React from 'react';
import cn from 'classnames';

const styles = require('./CommandPanel.css');

export interface CommandPanelProps {
  extraClassNames?: string;
  searchString?: string;
  children?: React.ReactNode;
  testId?: string;
  items?: any;
}

export interface CommandPanelItemProps {
  index?: any;
  classNames?: any;
  isSelected?: any;
  item?: any;
}

class CommandPanelItem extends React.Component<CommandPanelItemProps> {
  listItemRef: any;

  componentDidUpdate() {
    if (this.props.isSelected) {
      this.listItemRef.scrollIntoView();
    }
  }

  render() {
    const { index, classNames, item } = this.props;

    return (
      <li
        key={index}
        className={classNames}
        onClick={item.callback && item.callback}
        ref={ref => {
          this.listItemRef = ref;
        }}
      >
        {item.label}
      </li>
    );
  }
}

class CommandPanel extends React.Component<CommandPanelProps> {
  static defaultProps = {
    extraClassNames: undefined,
    searchString: '',
    items: [],
    testId: 'cf-ui-command-panel',
  };

  state = {
    selectedKey: 0,
    items: [],
  };

  static getDerivedStateFromProps(props, state) {
    const itemsHasUpdated = props.items !== state.originalItems;
    const searchStringHasUpdated =
      props.searchString !== state.originalSearchString;

    const items = props.items.filter(item =>
      item.label.toLowerCase().includes(props.searchString.toLowerCase()),
    );

    return {
      originalItems: props.items,
      originalSearchString: props.searchString,
      items,
      selectedKey:
        itemsHasUpdated || searchStringHasUpdated ? 0 : state.selectedKey,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboard, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboard, true);
  }

  handleKeyboard = event => {
    const ESCAPE_KEYCODE = 27;
    const ARROW_UP_KEYCODE = 38;
    const ARROW_DOWN_KEYCODE = 40;
    const ENTER_KEYCODE = 13;

    const currentKey = event.keyCode;

    if (currentKey === ARROW_UP_KEYCODE) {
      if (this.state.selectedKey === 0) return;
      this.setState({ selectedKey: this.state.selectedKey - 1 });
    }

    if (currentKey === ARROW_DOWN_KEYCODE) {
      if (this.state.selectedKey === this.state.items.length - 1) return;
      this.setState({ selectedKey: this.state.selectedKey + 1 });
    }

    if (currentKey === ENTER_KEYCODE) {
      const selectedItem = this.state.items[this.state.selectedKey];

      if (selectedItem.callback) selectedItem.callback();
    }
  };

  renderGroups() {
    const groups = [...new Set(this.state.items.map(item => item.group))];

    if (!groups.length) {
      return <li className={styles['CommandPanel__item']}>No results</li>;
    }

    return groups.map((groupName, index) => {
      return (
        <React.Fragment>
          {groupName && (
            <li className={styles['CommandPanel__divider']}>{groupName}</li>
          )}
          {this.renderItems(groupName)}
        </React.Fragment>
      );
    });
  }

  renderItems(groupName) {
    return this.state.items
      .filter(item => item.group === groupName)
      .map(item => {
        const index = this.state.items.indexOf(item);
        const isSelected = index === this.state.selectedKey;

        const classNames = cn(styles['CommandPanel__item'], {
          [styles['CommandPanel__item--is-selected']]: isSelected,
        });

        return (
          <CommandPanelItem
            item={item}
            classNames={classNames}
            key={index}
            isSelected={isSelected}
          />
        );
      });
  }

  render() {
    const {
      extraClassNames,
      children,
      testId,
      searchString,
      items,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.CommandPanel, extraClassNames);

    return (
      <ul className={classNames} data-test-id={testId} {...otherProps}>
        {this.renderGroups()}
      </ul>
    );
  }
}

export default CommandPanel;

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import IconButton from '../../IconButton';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownList from '../../Dropdown/DropdownList';
import Card from '../Card';
import Spinner from '../../Spinner';
import styles from './InlineReferenceCard.css';

class InlineReferenceCard extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node,
    isSelected: PropTypes.bool,
    dropdownListItemNodes: PropTypes.node,
    isLoading: PropTypes.bool,
    testId: PropTypes.string,
    status: PropTypes.oneOf(['archived', 'changed', 'draft', 'published']),
  };

  static defaultProps = {
    extraClassNames: undefined,
    children: undefined,
    dropdownListItemNodes: undefined,
    isSelected: false,
    isLoading: false,
    testId: 'cf-ui-inline-reference-card',
    status: undefined,
  };

  state = {
    isDropdownOpen: false,
  };

  render() {
    const {
      extraClassNames,
      dropdownListItemNodes,
      isSelected,
      children,
      testId,
      isLoading,
      status,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.InlineReferenceCard, extraClassNames);

    const statusIndicatorClassNames = cn(
      styles['InlineReferenceCard__status-indicator'],
      {
        [styles[`InlineReferenceCard__status-indicator--${status}`]]:
          status && !isLoading,
      },
    );

    return (
      <Card
        selected={isSelected}
        extraClassNames={classNames}
        {...otherProps}
        data-test-id={testId}
      >
        <CSSTransition
          timeout={100}
          in={isLoading}
          classNames={{
            enter: styles['InlineReferenceCard__spinner--enter'],
            enterActive: styles['InlineReferenceCard__spinner--enter-active'],
            exit: styles['InlineReferenceCard__spinner--exit'],
            exitActive: styles['InlineReferenceCard__spinner--exit-active'],
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className={styles['InlineReferenceCard__spinner-wrapper']}>
            <Spinner
              extraClassNames={styles.ReferenceCard__spinner}
              size="small"
            />
          </div>
        </CSSTransition>
        <div className={statusIndicatorClassNames} />
        <span className={styles['InlineReferenceCard__text-wrapper']}>
          {isLoading ? 'Loading' : children}
        </span>
        {dropdownListItemNodes && (
          <Dropdown
            onClose={() => {
              this.setState({
                isDropdownOpen: false,
              });
            }}
            position="bottom-right"
            extraClassNames={styles.InlineReferenceCard__dropdown}
            isOpen={this.state.isDropdownOpen}
            toggleElement={
              <IconButton
                extraClassNames={styles['InlineReferenceCard__icon-button']}
                iconProps={{ icon: 'MoreHorizontal' }}
                buttonType="secondary"
                label="Inline reference actions"
                onClick={() => {
                  this.setState({
                    isDropdownOpen: !this.state.isDropdownOpen,
                  });
                }}
              />
            }
          >
            <DropdownList
              extraClassNames={styles['InlineReferenceCard__dropdown-list']}
            >
              {dropdownListItemNodes}
            </DropdownList>
          </Dropdown>
        )}
      </Card>
    );
  }
}

export default InlineReferenceCard;

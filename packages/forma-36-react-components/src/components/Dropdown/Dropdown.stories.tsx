import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown';
import DropdownListItem from './DropdownListItem';
import Button from '../Button';
import TextLink from '../TextLink';
import DropdownList from './DropdownList';

function DefaultStory() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      isFullWidth={boolean('isFullWidth', false)}
      key={Date.now()} // Force Reinit
      isAutoalignmentEnabled={boolean('isAutoalignmentEnabled', true)}
      usePortal={boolean('usePortal', true)}
      position={select(
        'position',
        {
          'bottom-left': 'bottom-left',
          'bottom-right': 'bottom-right',
          'top-left': 'top-left',
          'top-right': 'top-right',
        },
        'bottom-left',
      )}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          indicateDropdown
          onClick={() => setOpen(!isOpen)}
        >
          Choose more options and settings
        </Button>
      }
      className={text('className', '')}
    >
      <DropdownList>
        <DropdownListItem isTitle>Entry Title</DropdownListItem>
        <DropdownListItem onClick={action('onClick Element')}>
          Embed existing entry
        </DropdownListItem>
        <Dropdown
          position={select(
            'Submenu position',
            {
              left: 'left',
              right: 'right',
            },
            'right',
          )}
          submenuToggleLabel="Create and embed existing entry"
          className={text('className', '')}
        >
          <DropdownList>
            <DropdownListItem onClick={action('submenu click')}>
              Embed as inline element
            </DropdownListItem>
            <DropdownListItem isDisabled>
              Embed as block element
            </DropdownListItem>
          </DropdownList>
        </Dropdown>
      </DropdownList>
      <DropdownList border="top">
        <DropdownListItem>
          <TextLink href="http://google.com">This is a Link</TextLink>
        </DropdownListItem>
      </DropdownList>
    </Dropdown>
  );
}

function ScrollableStory() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      isAutoalignmentEnabled={boolean('isAutoalignmentEnabled', true)}
      usePortal={boolean('usePortal', true)}
      position={select(
        'position',
        {
          'bottom-left': 'bottom-left',
          'bottom-right': 'bottom-right',
          'top-left': 'top-left',
          'top-right': 'top-right',
        },
        'bottom-left',
      )}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          indicateDropdown
          onClick={() => setOpen(!isOpen)}
        >
          toggle
        </Button>
      }
      className={text('className', '')}
    >
      <DropdownList maxHeight={200}>
        {[...new Array(25)].map((entry, index) => (
          // eslint-disable-next-line
          <DropdownListItem key={`key-${index}`} onClick={action('click')}>
            Entry Item {index}
          </DropdownListItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
}

function DynamicContentStory() {
  const messages = ['Loading...', 'This is my other piece of text'];
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState(messages[0]);

  const onClose = () => {
    setOpen(false);
    setText(messages[0]);
  };

  const onClick = () => {
    if (isOpen) {
      return onClose();
    }

    setTimeout(() => setText(messages[1]), 500);
    setOpen(true);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={onClose}
      isAutoalignmentEnabled={boolean('isAutoalignmentEnabled', true)}
      usePortal={boolean('usePortal', true)}
      position={select(
        'position',
        {
          'bottom-left': 'bottom-left',
          'bottom-right': 'bottom-right',
          'top-left': 'top-left',
          'top-right': 'top-right',
        },
        'bottom-right',
      )}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          onClick={onClick}
          indicateDropdown
        >
          Choose more options and settings
        </Button>
      }
    >
      <DropdownList>
        <DropdownListItem>{text}</DropdownListItem>
      </DropdownList>
    </Dropdown>
  );
}

storiesOf('Components/Dropdown', module)
  .addParameters({
    propTypes: [
      Dropdown['__docgenInfo'],
      DropdownList['__docgenInfo'],
      DropdownListItem['__docgenInfo'],
    ],
    component: Dropdown,
    subcomponents: { DropdownList, DropdownListItem },
  })
  .add('default', () => <DefaultStory />)
  .add('scrollable', () => <ScrollableStory />)
  .add('dynamic', () => <DynamicContentStory />);

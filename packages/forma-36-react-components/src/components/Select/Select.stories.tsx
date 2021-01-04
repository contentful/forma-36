import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import Select from './Select';
import Option from './Option';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';

storiesOf('Components/Select', module)
  .addParameters({
    propTypes: [Select['__docgenInfo'], Option['__docgenInfo']],
    component: Select,
  })
  .add('default', () => (
    <Select
      className={text('className', '')}
      id="optionSelect"
      name="optionSelect"
      isDisabled={boolean('isDisabled', false)}
      hasError={boolean('hasError', false)}
      onChange={action('onChange')}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
      width={select(
        'width',
        {
          'Full (default)': 'full',
          large: 'large',
          medium: 'medium',
          small: 'small',
          auto: 'auto',
        },
        'full',
      )}
      willBlurOnEsc={boolean('willBlurOnEsc', true)}
    >
      <Option value="optionOne">Option 1</Option>
      <Option value="optionTwo">Long Option 2</Option>
    </Select>
  ))
  .add('overview', () => (
    <>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Select default</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Select id="optionSelect" name="optionSelect">
          <Option value="optionOne">Option 1</Option>
          <Option value="optionTwo">Long Option 2</Option>
        </Select>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Select full width</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Select id="optionSelect" name="optionSelect" width="full">
          <Option value="optionOne">Option 1</Option>
          <Option value="optionTwo">Long Option 2</Option>
        </Select>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Select large width</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Select id="optionSelect" name="optionSelect" width="large">
          <Option value="optionOne">Option 1</Option>
          <Option value="optionTwo">Long Option 2</Option>
        </Select>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Select small width</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Select id="optionSelect" name="optionSelect" width="small">
          <Option value="optionOne">Option 1</Option>
          <Option value="optionTwo">Long Option 2</Option>
        </Select>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Select auto width</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Select id="optionSelect" name="optionSelect" width="auto">
          <Option value="optionOne">Option 1</Option>
          <Option value="optionTwo">Long Option 2</Option>
        </Select>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Select disabled</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Select id="optionSelect" name="optionSelect" isDisabled>
          <Option value="optionOne">Option 1</Option>
          <Option value="optionTwo">Long Option 2</Option>
        </Select>
      </Flex>
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Select with error</SectionHeading>
      </Flex>
      <Flex marginBottom="spacingS">
        <Select id="optionSelect" name="optionSelect" hasError>
          <Option value="optionOne">Option 1</Option>
          <Option value="optionTwo">Long Option 2</Option>
        </Select>
      </Flex>
    </>
  ));

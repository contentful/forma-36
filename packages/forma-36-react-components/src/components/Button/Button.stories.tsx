import React from 'react';

import Button, { ButtonProps, buttonTypes } from './Button';
import { iconName } from '../Icon/constants';

import notes from './README.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    propTypes: [Button['__docgenInfo']],
    notes,
  },
  argTypes: {
    icon: { control: { type: 'select', options: iconName } },
    buttonType: { control: { type: 'select', options: buttonTypes } },
    size: {
      control: { type: 'select', options: [undefined, 'small', 'large'] },
    },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onClick: { control: { disable: true } },
    onBlur: { control: { disable: true } },
    loading: { control: { disable: true } },
  },
};

export const basic = (args: ButtonProps) => (
  <Button buttonType={args.buttonType} size={args.size}>
    {args['Button Text']}
  </Button>
);

export const typesOverview = () => (
  <>
    <Button buttonType="primary">primary</Button>
    <Button buttonType="positive">posiitve</Button>

    <Button buttonType="warning">warning</Button>
    <Button buttonType="negative">negative</Button>
    <Button buttonType="muted">muted</Button>
    <Button buttonType="naked">naked</Button>
  </>
);

export const sizesOverview = (args: ButtonProps) => (
  <>
    <Button buttonType={args.buttonType} size="small">
      small
    </Button>
    <Button buttonType={args.buttonType}>default size</Button>
    <Button buttonType={args.buttonType} size="large">
      large
    </Button>
  </>
);

export const statesOverview = (args: ButtonProps) => (
  <>
    <Button buttonType={args.buttonType} isActive>
      isActive
    </Button>
    <Button buttonType={args.buttonType} disabled>
      disabled
    </Button>
    <Button buttonType={args.buttonType} indicateDropdown>
      indicateDropdown
    </Button>
    <Button buttonType={args.buttonType} loading>
      loading
    </Button>
  </>
);

basic.args = {
  buttonType: 'positive',
  'Button Text': 'Embed entry',
};

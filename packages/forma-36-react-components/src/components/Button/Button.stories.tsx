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

export const isActiveStateOverview = () => (
  <>
    <Button buttonType="primary" isActive>
      primary
    </Button>
    <Button buttonType="positive" isActive>
      posiitve
    </Button>
    <Button buttonType="warning" isActive>
      warning
    </Button>
    <Button buttonType="negative" isActive>
      negative
    </Button>
    <Button buttonType="muted" isActive>
      muted
    </Button>
    <Button buttonType="naked" isActive>
      naked
    </Button>
  </>
);

export const disabledStateOverview = () => (
  <>
    <Button buttonType="primary" disabled>
      primary
    </Button>
    <Button buttonType="positive" disabled>
      posiitve
    </Button>
    <Button buttonType="warning" disabled>
      warning
    </Button>
    <Button buttonType="negative" disabled>
      negative
    </Button>
    <Button buttonType="muted" disabled>
      muted
    </Button>
    <Button buttonType="naked" disabled>
      naked
    </Button>
  </>
);

export const indicateDropdownStateOverview = () => (
  <>
    <Button buttonType="primary" indicateDropdown>
      primary
    </Button>
    <Button buttonType="positive" indicateDropdown>
      posiitve
    </Button>
    <Button buttonType="warning" indicateDropdown>
      warning
    </Button>
    <Button buttonType="negative" indicateDropdown>
      negative
    </Button>
    <Button buttonType="muted" indicateDropdown>
      muted
    </Button>
    <Button buttonType="naked" indicateDropdown>
      naked
    </Button>
  </>
);

export const loadingDropdownStateOverview = () => (
  <>
    <Button buttonType="primary" loading>
      primary
    </Button>
    <Button buttonType="positive" loading>
      posiitve
    </Button>
    <Button buttonType="warning" loading>
      warning
    </Button>
    <Button buttonType="negative" loading>
      negative
    </Button>
    <Button buttonType="muted" loading>
      muted
    </Button>
    <Button buttonType="naked" loading>
      naked
    </Button>
  </>
);

basic.args = {
  buttonType: 'positive',
  'Button Text': 'Embed entry',
};

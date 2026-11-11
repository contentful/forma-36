import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Paragraph } from '@contentful/f36-typography';
import {
  ModalDisplay,
  type ModalDisplayProps,
} from '../src/ModalDisplay/ModalDisplay';
import { Button } from '@contentful/f36-button';

import illustration from './informative-ct-modal.svg';
import { TextLink } from '@contentful/f36-text-link';

export default {
  title: 'Components/Modal/ModalDisplay',
  component: ModalDisplay,
  parameters: {
    propTypes: [ModalDisplay['__docgenInfo']],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '1200px', height: '800px' }}>{Story()}</div>
    ),
  ],
  argTypes: {
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

function SimpleDemo(props: ModalDisplayProps) {
  const [isShown, setShown] = useState(true);
  return (
    <div>
      <Button variant="negative" onClick={() => setShown(true)}>
        Show Display Modal
      </Button>
      <ModalDisplay
        illustration={
          <img src={illustration} alt="Content type visualisation" />
        }
        title="Setup your first content type"
        controls={
          <Button variant="positive" onClick={() => action('create')}>
            Create
          </Button>
        }
        {...props}
        isShown={isShown}
        onClose={() => {
          setShown(false);
          action('onClose')();
        }}
      >
        <Paragraph>
          This is some explanation text{' '}
          <TextLink> you can read more here ...</TextLink>
        </Paragraph>
      </ModalDisplay>
    </div>
  );
}

export const Basic: StoryObj<ModalDisplayProps> = {
  render: (props) => {
    return <SimpleDemo {...props} />;
  },
};

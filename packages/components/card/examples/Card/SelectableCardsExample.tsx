import React from 'react';
import { Card, Heading } from '@contentful/f36-components';

export default function SelectableCardsExample() {
  const [taco, setTaco] = React.useState(false);
  const [pizza, setPizza] = React.useState(false);
  const [broccoli, setBroccoli] = React.useState(false);

  return (
    <div>
      <Heading>What is your favorite food?</Heading>
      <div>
        <Card onClick={() => setTaco(!taco)} isSelected={taco}>
          <span role="img" aria-label="taco">
            🌮
          </span>
        </Card>
        <Card onClick={() => setPizza(!pizza)} isSelected={pizza}>
          <span role="img" aria-label="pizza">
            🍕
          </span>
        </Card>
        <Card onClick={() => setBroccoli(!broccoli)} isSelected={broccoli}>
          <span role="img" aria-label="broccoli">
            🥦
          </span>
        </Card>
      </div>
    </div>
  );
}

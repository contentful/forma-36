import React from 'react';
import { Card } from '@contentful/f36-components';

export default function OnClickCardExample() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Card onClick={() => setShow(!show)}>
        Click on this card
        <br />
        {show && (
          <span role="img" aria-label="sparkles">
            ✨✨✨
          </span>
        )}
      </Card>
    </>
  );
}

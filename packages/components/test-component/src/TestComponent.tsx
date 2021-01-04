/** @jsx jsx */

import { jsx, css } from '@emotion/react';
import tokens from '@contentful/forma-36-tokens';

export function TestComponent() {
  return (
    <div
      css={css({
        color: tokens.colorBlueBase,
        backgroundColor: tokens.colorRedBase,
      })}
    >
      test component
    </div>
  );
}

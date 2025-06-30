import React from 'react';
import { css } from 'emotion';

export default function TestEmotion() {
  return (
    <div className={css({ color: 'red', fontWeight: 'bold' })}>
      If you see this text in red and bold, Emotion is working!
    </div>
  );
}

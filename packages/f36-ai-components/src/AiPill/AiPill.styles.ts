import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

const AI_GRADIENT =
  'linear-gradient(157.5deg, #1872E5 0.77%, #8C2EEA 31.5%, #E65325 62.3%, #EAAF09 93.9%)';

const AI_BACKGROUND =
  'linear-gradient(157.5deg, rgba(24,114,229,0.05) 0.77%, rgba(140,46,234,0.05) 31.5%, rgba(230,83,37,0.05) 62.3%, rgba(234,175,9,0.05) 93.9%)';

export const aiPillOverrides = css`
  && {
    position: relative;
    border: none;
    background: ${AI_BACKGROUND};
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: ${AI_GRADIENT};
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  & > span:first-of-type {
    color: #6c3ecf;
  }

  & button {
    color: #6c3ecf !important;
  }

  & button:hover:not(:disabled) {
    background-color: ${tokens.gray300};
    mix-blend-mode: luminosity;
  }

  & button:disabled {
    color: ${tokens.gray400} !important;
    background-color: transparent;
    mix-blend-mode: initial;
  }
`;

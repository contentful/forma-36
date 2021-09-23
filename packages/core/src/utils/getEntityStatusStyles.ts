import tokens from '@contentful/f36-tokens';

import type { EntityStatus } from '../types';

export const getEntityStatusStyles = ({ status }: { status: EntityStatus }) => {
  switch (status) {
    case 'published':
      return {
        color: tokens.colorGreenBase,
        backgroundColor: tokens.colorGreenLightest,
      };
    case 'changed':
      return {
        color: tokens.colorBlueBase,
        backgroundColor: tokens.colorBlueLightest,
      };
    case 'deleted':
    case 'archived':
      return {
        color: tokens.colorRedBase,
        backgroundColor: tokens.colorRedLightest,
      };
    case 'draft':
      return {
        color: tokens.colorOrangeDark,
        backgroundColor:
          '#ffefd5' /* temporary hardcoded value until palette improvements */,
      };
    case 'new':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.colorPrimary,
      };
    default:
      console.warn(`Unknown EntityStatus: ${status}`);
      return {};
  }
};

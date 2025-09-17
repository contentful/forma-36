import tokens from '@contentful/f36-tokens';

import type { EntityStatus } from '../types';

export const getEntityStatusStyles = ({ status }: { status: EntityStatus }) => {
  switch (status) {
    case 'published':
      return {
        color: tokens.green600,
        backgroundColor: tokens.green100,
      };
    case 'changed':
      return {
        color: tokens.blue600,
        backgroundColor: tokens.blue100,
      };
    case 'deleted':
    case 'archived':
      return {
        color: tokens.red600,
        backgroundColor: tokens.red100,
      };
    case 'draft':
      return {
        color: tokens.orange600,
        backgroundColor: tokens.orange200,
      };
    case 'new':
      return {
        color: tokens.colorWhite,
        backgroundColor: tokens.blue500,
      };
    default:
      return {
        color: tokens.blue600,
        backgroundColor: tokens.blue200,
      };
  }
};

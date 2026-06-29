import React from 'react';
import figma from '@figma/code-connect';
import { Pagination } from './Pagination';

figma.connect(
  Pagination,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=10438:126777',
  {
    props: {
      activePage: figma.boolean('Previous button', {
        true: 2,
        false: 0,
      }),
      totalItems: figma.boolean('Show total', {
        true: 113,
        false: undefined,
      }),
    },
    example: ({ activePage, totalItems }) => (
      <Pagination
        activePage={activePage}
        totalItems={totalItems}
        itemsPerPage={20}
        onPageChange={() => {}}
      />
    ),
  },
);

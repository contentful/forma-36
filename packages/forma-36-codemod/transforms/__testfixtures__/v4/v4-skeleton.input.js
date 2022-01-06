import React from 'react';
import { SkeletonContainer, SkeletonDisplayText, SkeletonText, SkeletonBodyText, SkeletonRow, Table, TableBody, SkeletonImage } from '@contentful/forma-36-react-components';

<SkeletonContainer animate={false}>
  <SkeletonDisplayText numberOfLines={1} />
  <SkeletonBodyText numberOfLines={3} offsetTop={35} />
</SkeletonContainer>;

<Table>
  <TableBody>
    <SkeletonRow />
  </TableBody>
</Table>;

<SkeletonContainer>
  <SkeletonImage />
  <SkeletonText />
</SkeletonContainer>;

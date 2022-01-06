import React from 'react';
import { Table, TableBody } from '@contentful/forma-36-react-components';

import {
  SkeletonContainer,
  SkeletonRow,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonImage,
  SkeletonText,
} from "@contentful/f36-components";

<SkeletonContainer isAnimated={false}>
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

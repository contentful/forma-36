import React, { Component } from 'react';

import TableCell from '../../../Table/TableCell';
import SkeletonContainer from '../../SkeletonContainer';
import SkeletonBodyText from '../../SkeletonBodyText';

export type SkeletonTableCellProps = {
  clipId?: string;
} & typeof defaultProps;

const defaultProps = {
  clipId: 'skeleton-table-cell',
};

export class SkeletonTableCell extends Component<SkeletonTableCellProps> {
  static defaultProps = defaultProps;

  render() {
    const { clipId } = this.props;

    return (
      <TableCell>
        <SkeletonContainer
          svgHeight={42}
          clipId={clipId}
          gradientId={`${clipId}-gradient`}
        >
          <SkeletonBodyText numberOfLines={2} />
        </SkeletonContainer>
      </TableCell>
    );
  }
}

export default SkeletonTableCell;

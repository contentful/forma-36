import React from 'react';

import { Modal, type ModalProps } from '../Modal';
import { ModalHeader, type ModalHeaderProps } from '../ModalHeader/ModalHeader';

export interface ModalBasicProps extends Omit<
  ModalProps,
  'header' | 'title' | 'subtitle' | 'modalHeaderProps'
> {
  /**
   * Modal title that is used in header. For a modal without a title use `Modal`.
   */
  title: string;
  /**
   * Modal subtitle that is used in header
   */
  subtitle?: string;
  /**
   * Optional props passed to the `Modal.Header`
   */
  headerProps?: Partial<Omit<ModalHeaderProps, 'title' | 'subtitle'>>;
}

export const ModalBasic = ({
  title,
  subtitle,
  headerProps,
  ...otherProps
}: ModalBasicProps) => (
  <Modal
    {...otherProps}
    header={<ModalHeader title={title} subtitle={subtitle} {...headerProps} />}
  />
);

ModalBasic.displayName = 'ModalBasic';

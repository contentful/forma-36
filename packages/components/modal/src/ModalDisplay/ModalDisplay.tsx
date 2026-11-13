import React from 'react';

import { Modal } from '../CompoundModal';
import type { ModalProps } from '../Modal';
import { type ModalDisplayHeaderProps } from '../ModalDisplayHeader/ModalDisplayHeader';
import type { ModalContentProps } from '../ModalContent/ModalContent';
import type { ModalControlsProps } from '../ModalControls/ModalControls';
import { cx } from '@emotion/css';
import { styles } from './ModalDisplay.styles';

export type ModalDisplayProps = ModalProps & {
  title: string;
  subtitle?: string;
  illustration?: ModalDisplayHeaderProps['illustration'];
  modalHeaderProps?: Partial<ModalDisplayHeaderProps>;
  modalControlsProps?: Partial<ModalControlsProps>;
  modalContentProps?: Partial<ModalContentProps>;
  controls?: ModalControlsProps['children'];
  children?: React.ReactNode;
};

export const ModalDisplay = ({
  illustration,
  title,
  subtitle,
  onClose,
  modalHeaderProps,
  modalContentProps,
  modalControlsProps,
  controls,
  children,
  ...otherProps
}: ModalDisplayProps) => {
  return (
    <Modal onClose={onClose} {...otherProps}>
      {() => {
        return (
          <>
            <Modal.DisplayHeader
              title={title}
              subtitle={subtitle}
              illustration={illustration}
              {...modalHeaderProps}
            />
            <Modal.Content
              {...modalContentProps}
              className={cx(modalContentProps?.className, styles.content)}
            >
              {children}
            </Modal.Content>
            <Modal.Controls justifyContent="center" {...modalControlsProps}>
              {controls}
            </Modal.Controls>
          </>
        );
      }}
    </Modal>
  );
};

ModalDisplay.displayName = 'ModalDisplay';

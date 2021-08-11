import { cx } from 'emotion';
import React from 'react';
import { CommonProps } from '@contentful/f36-core';
import { styles } from './Modal.styles';

export interface ModalProps extends CommonProps {
  testId?: string;
  className?: string;
  children: React.ReactNode;
}

function Modal(props: ModalProps, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.modal, props.className)}
    >
      {props.children}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
const _Modal = React.forwardRef(Modal);
export { _Modal as Modal };

import { Modal as OriginalModal } from './Modal';
import { ModalContent } from './ModalContent/ModalContent';
import { ModalHeader } from './ModalHeader/ModalHeader';
import { ModalControls } from './ModalControls/ModalControls';

type CompoundModal = typeof OriginalModal & {
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  Controls: typeof ModalControls;
};

export const Modal = OriginalModal as CompoundModal;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Controls = ModalControls;

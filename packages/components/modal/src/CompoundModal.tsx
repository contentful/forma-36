import { Modal as OriginalModal } from './Modal';
import { ModalContent } from './ModalContent/ModalContent';
import { ModalHeader } from './ModalHeader/ModalHeader';
import { ModalControls } from './ModalControls/ModalControls';
import { ModalDisplayHeader } from './ModalDisplayHeader/ModalDisplayHeader';

type CompoundModal = typeof OriginalModal & {
  Content: typeof ModalContent;
  Header: typeof ModalHeader;
  DisplayHeader: typeof ModalDisplayHeader;
  Controls: typeof ModalControls;
};

export const Modal = OriginalModal as CompoundModal;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.DisplayHeader = ModalDisplayHeader;
Modal.Controls = ModalControls;

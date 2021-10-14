import { Modal as OriginalModal } from './Modal';
import { ModalContent } from './ModalContent/ModalContent';
import { ModalHeader } from './ModalHeader/ModalHeader';
import { ModalControls } from './ModalControls/ModalControls';

export const Modal = Object.assign({}, OriginalModal, {
  Content: ModalContent,
  Header: ModalHeader,
  Controls: ModalControls,
});

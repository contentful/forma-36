---
'@contentful/f36-modal': patch
---

The ModalConfirm should always render a x close button in the modal header.

This is accomplished by passing the onClose prop from ModalConfirm to Modal.Header to ensure that the header will render a close icon to dismiss the modal.

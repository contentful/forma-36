import { Modal, Button, Paragraph } from '@contentful/f36-components';
import { useState } from 'react';

function DeleteContentTypeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    // ... perform deletion
    setIsDeleting(false);
    setIsOpen(false);
  }

  return (
    <>
      <Button variant="negative" size="small" onClick={() => setIsOpen(true)}>
        Delete content type
      </Button>

      <Modal
        isShown={isOpen}
        onClose={() => setIsOpen(false)}
        size="small"
        shouldCloseOnOverlayClick={false}
      >
        <Modal.Header
          title="Delete content type"
          onClose={() => setIsOpen(false)}
        />
        <Modal.Content>
          <Paragraph>
            This content type and all its fields will be permanently deleted.
            This cannot be undone.
          </Paragraph>
        </Modal.Content>
        <Modal.Controls>
          {/* Cancel label MUST be "Never mind" for destructive confirmations — never "Cancel" */}
          <Button
            variant="secondary"
            size="small"
            onClick={() => setIsOpen(false)}
          >
            Never mind
          </Button>
          <Button
            variant="negative"
            size="small"
            isLoading={isDeleting}
            onClick={handleDelete}
          >
            Delete content type
          </Button>
        </Modal.Controls>
      </Modal>
    </>
  );
}

export { DeleteContentTypeModal };

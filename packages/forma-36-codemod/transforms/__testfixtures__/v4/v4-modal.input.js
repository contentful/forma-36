import React from "react";

import {
  Modal,
  ModalHeader,
  ModalConfirm,
  ModalControls,
  ModalContent,
  ModalLauncher,
} from "@contentful/forma-36-react-components";

<Modal></Modal>;
<ModalConfirm
  onSecondary={() => {}}
  isSecondaryLoading
  secondaryIntent="primary"
  secondaryLabel="secondary label"
  secondaryTestId="secondary id"
></ModalConfirm>;
<ModalHeader isNotWrapped></ModalHeader>;
<ModalContent></ModalContent>;
<ModalControls></ModalControls>;

function run() {
  return ModalLauncher.open()
}

run()

import { modifyPropsCodemod } from './common/modify-props-codemod.mjs';
import { pipe } from './common/pipe.mjs';
import { getComponentLocalName } from '../utils/index.mjs';
import { getFormaImport } from '../utils/config.mjs';

export default pipe([
  (file, api) => {
    const j = api.jscodeshift;

    let source = file.source;

    const componentName = getComponentLocalName(j, source, {
      componentName: 'Modal',
      importName: getFormaImport(),
    });

    if (!componentName) {
      return source;
    }

    // eslint-disable-next-line no-console
    console.warn(
      `If you are using Buttons inside Modal.Controls component, please add size="small" to the Buttons and swap buttons' positions manually, so the primary button is the last one.`,
    );
    // eslint-disable-next-line no-console
    console.warn(`
      Before:

      <Modal.Controls>
        <Button variant="primary" />
        <Button variant="secondary" />
      </Modal.Controls>

      After:

      <Modal.Controls>
        <Button variant="secondary" size="small" />
        <Button variant="primary" size="small" />
      </Modal.Controls>
    `);

    return source;
  },
  modifyPropsCodemod({
    componentName: 'Modal',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'ModalHeader',
    renameMap: {
      isNotWrapped: null,
    },
  }),
  modifyPropsCodemod({
    componentName: 'ModalControls',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'ModalContent',
    renameMap: {},
  }),
  modifyPropsCodemod({
    componentName: 'ModalConfirm',
    renameMap: {
      onSecondary: null,
      isSecondaryLoading: null,
      secondaryIntent: null,
      secondaryLabel: null,
      secondaryTestId: null,
    },
  }),
  modifyPropsCodemod({
    componentName: 'ModalLauncher',
    renameMap: {},
  }),
]);

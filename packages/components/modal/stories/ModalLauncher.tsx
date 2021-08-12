/* global Promise */
import ReactDOM from 'react-dom';

// @todo: change any to unknown
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ModalLauncherComponentRendererProps<T = any> {
  isShown: boolean;
  onClose: (result?: T) => void;
}

interface ModalLauncherOpenOptions {
  /**
   * Unique id to be used as identifier for the modal contianer
   */
  modalId?: string;
  /**
   * ms before removing the component from the tree
   * @default 300
   */
  delay?: number;
}

interface CloseModalData {
  delay: number;
  render: (args: ModalLauncherComponentRendererProps<any>) => void;
  currentConfig: ModalLauncherComponentRendererProps<any>;
}

const getRoot = (rootElId: string): HTMLElement => {
  // Reuse the container if we find it
  let rootDom = document.getElementById(rootElId);
  if (rootDom !== null) {
    return rootDom;
  }

  // Otherwise create it
  rootDom = document.createElement('div');
  rootDom.setAttribute('id', rootElId);
  document.body.appendChild(rootDom);
  return rootDom;
};

const openModalsIds: Map<string, CloseModalData> = new Map();
function closeAll() {
  openModalsIds.forEach(async ({ render, currentConfig, delay }, rootElId) => {
    const config = { ...currentConfig, isShown: false };
    render(config);
    await new Promise((resolveDelay) => setTimeout(resolveDelay, delay));
    ReactDOM.unmountComponentAtNode(getRoot(rootElId));
    openModalsIds.delete(rootElId);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function open<T = any>(
  componentRenderer: (
    props: ModalLauncherComponentRendererProps<T>,
  ) => JSX.Element,
  options: ModalLauncherOpenOptions = {},
): Promise<T> {
  options = { delay: 300, ...options };

  // Allow components to specify if they wish to reuse the modal container
  const rootElId = `modals-root${options.modalId || Date.now()}`;
  const rootDom = getRoot(rootElId);

  return new Promise((resolve) => {
    let currentConfig = { onClose, isShown: true };

    function render({
      onClose,
      isShown,
    }: ModalLauncherComponentRendererProps<T>) {
      ReactDOM.render(componentRenderer({ onClose, isShown }), rootDom);
    }

    async function onClose(arg?: T) {
      currentConfig = {
        ...currentConfig,
        isShown: false,
      };
      render(currentConfig);
      await new Promise((resolveDelay) =>
        setTimeout(resolveDelay, options.delay),
      );
      ReactDOM.unmountComponentAtNode(rootDom);
      rootDom.remove();
      openModalsIds.delete(rootElId);
      resolve(arg);
    }

    render(currentConfig);
    openModalsIds.set(rootElId, {
      render,
      currentConfig,
      delay: options.delay,
    });
  });
}

export const ModalLauncher = {
  open,
  closeAll,
};

/* global Promise */
import ReactDOM from 'react-dom';

// @todo: change any to unknown
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ModalLauncherComponentRendererProps<T = any> {
  isShown: boolean;
  onClose: (result?: T) => void;
}

interface ModalLauncherOpenOptions {
  modalId?: string;
  // ms before removing the component from the tree, defaults to 25ms.
  delay?: number;
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
  let rootDom: HTMLElement | null = null;

  const getRoot = () => {
    if (rootDom !== null) {
      return rootDom;
    }

    // Reuse the container if we find it
    rootDom = document.getElementById(rootElId);
    if (rootDom !== null) {
      return rootDom;
    }

    // Otherwise create it
    rootDom = document.createElement('div');
    rootDom.setAttribute('id', rootElId);
    document.body.appendChild(rootDom);
    return rootDom;
  };

  return new Promise((resolve) => {
    let currentConfig = { onClose, isShown: true };

    function render({
      onClose,
      isShown,
    }: ModalLauncherComponentRendererProps<T>) {
      ReactDOM.render(componentRenderer({ onClose, isShown }), getRoot());
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
      ReactDOM.unmountComponentAtNode(getRoot());
      getRoot().remove();
      resolve(arg);
    }

    render(currentConfig);
  });
}

export const ModalLauncher = {
  open,
};

export default ModalLauncher;

/* global Promise */

import ReactDOM from 'react-dom';

interface OpenerProps {
  isShown: boolean;
  onClose: Function;
}

let closableModals: Function[] = [];

export function open(
  componentRenderer: (props: OpenerProps) => React.ReactElement,
  options: { persisted: boolean } = { persisted: false },
) {
  let rootDom: HTMLDivElement | null = null;

  const getRoot = () => {
    if (rootDom === null) {
      rootDom = document.createElement('div');
      rootDom.setAttribute('id', 'modals-root' + Date.now().toString());
      document.body.appendChild(rootDom);
    }
    return rootDom;
  };

  return new Promise(resolve => {
    let currentConfig = { onClose, isShown: true };

    function render({ onClose, isShown }: OpenerProps) {
      ReactDOM.render(componentRenderer({ onClose, isShown }), getRoot());
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function onClose(...args: any[]) {
      currentConfig = {
        ...currentConfig,
        isShown: false,
      };
      render(currentConfig);
      resolve(...args);
      getRoot().remove();
    }

    if (options && options.persisted === false) {
      closableModals.push(onClose);
    }

    render(currentConfig);
  });
}

export function closeAll() {
  closableModals.forEach(fn => fn());
  closableModals = [];
}

export const ModalLauncher = {
  open,
  closeAll,
};

/* global Promise */
import React from 'react';
import ReactDOM from 'react-dom/client';
export interface ModalLauncherComponentRendererProps<T = void> {
  isShown: boolean;
  onClose: (result?: T) => void;
}

export interface ModalLauncherOpenOptions {
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

interface CloseModalData<T = unknown> {
  root: ReactDOM.Root;
  delay: number;
  render: (args: ModalLauncherComponentRendererProps<T>) => void;
  currentConfig: ModalLauncherComponentRendererProps<T>;
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
async function closeAll(): Promise<void> {
  await Promise.all(
    Array.from(openModalsIds.entries()).map(
      async ([rootElId, { root, render, currentConfig, delay }]) => {
        const config = { ...currentConfig, isShown: false };
        render(config);
        await new Promise((resolveDelay) => setTimeout(resolveDelay, delay));
        root.unmount();

        const rootDom = document.getElementById(rootElId);
        if (rootDom) rootDom.remove();
        openModalsIds.delete(rootElId);
      },
    ),
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function open<T = any>(
  componentRenderer: (
    props: ModalLauncherComponentRendererProps<T>,
  ) => React.JSX.Element,
  options: ModalLauncherOpenOptions = {},
): Promise<T> {
  options = { delay: 300, ...options };

  // Allow components to specify if they wish to reuse the modal container
  const rootElId = `modals-root${options.modalId || Date.now()}`;
  const rootDom = getRoot(rootElId);
  const root = ReactDOM.createRoot(rootDom);

  return new Promise((resolve) => {
    let currentConfig = { onClose, isShown: true };

    function render({
      onClose,
      isShown,
    }: ModalLauncherComponentRendererProps<T>) {
      root.render(componentRenderer({ onClose, isShown }));
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
      root.unmount();
      rootDom.remove();
      openModalsIds.delete(rootElId);
      resolve(arg);
    }

    render(currentConfig);
    openModalsIds.set(rootElId, {
      root,
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

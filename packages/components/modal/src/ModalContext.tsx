import React from 'react';

export type ModalIds = {
  titleId?: string;
  subtitleId?: string;
};

export type ModalContextType = {
  /**
   * Called by the header to report its title/subtitle ids to the Modal.
   * Returns a cleanup function that clears them again.
   */
  registerTitleIds: (ids: ModalIds) => () => void;
};

const ModalContext = React.createContext<ModalContextType | undefined>(
  undefined,
);

// Returns undefined outside of a Modal, so ModalHeader can also be rendered standalone
export const useModalContext = () => React.useContext(ModalContext);

export const ModalContextProvider = ModalContext.Provider;

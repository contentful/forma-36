import { useLayoutEffect } from 'react';
import type ReactModal from 'react-modal';
import { useId } from '@contentful/f36-core';

import { useModalContext } from './ModalContext';

type UseModalHeaderOptions = {
  title?: string;
  subtitle?: string;
  titleId?: string;
  subtitleId?: string;
  onClose?: ReactModal.Props['onRequestClose'];
  closeIconLabel?: string;
};

/**
 * Shared header logic: resolves ids, close handler and close label,
 * and reports the ids to the surrounding Modal (if any) for aria linking.
 */
export const useModalHeader = ({
  title,
  subtitle,
  titleId,
  subtitleId,
  onClose,
  closeIconLabel,
}: UseModalHeaderOptions) => {
  const context = useModalContext();
  const generatedTitleId = useId(titleId, 'title');
  const generatedSubtitleId = useId(subtitleId, 'subtitle');
  const resolvedTitleId = title ? generatedTitleId : undefined;
  const resolvedSubtitleId = subtitle ? generatedSubtitleId : undefined;

  const registerTitleIds = context?.registerTitleIds;
  useLayoutEffect(
    () =>
      registerTitleIds?.({
        titleId: resolvedTitleId,
        subtitleId: resolvedSubtitleId,
      }),
    [registerTitleIds, resolvedTitleId, resolvedSubtitleId],
  );

  return {
    titleId: resolvedTitleId,
    subtitleId: resolvedSubtitleId,
    onClose:
      onClose ??
      (context?.isDismissable !== false ? context?.onClose : undefined),
    closeIconLabel: closeIconLabel ?? context?.closeIconLabel ?? 'Close',
  };
};

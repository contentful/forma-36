import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderHook } from '@testing-library/react';

import { ModalContextProvider, type ModalContextType } from './ModalContext';
import { useModalHeader } from './useModalHeader';

const setup = (context: Partial<ModalContextType> = {}) => {
  const cleanup = vi.fn();
  const value: ModalContextType = {
    registerTitleIds: vi.fn(() => cleanup),
    ...context,
  };
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ModalContextProvider value={value}>{children}</ModalContextProvider>
  );
  return { value, cleanup, wrapper };
};

describe('ids', () => {
  it('generates ids when title and subtitle are set', () => {
    const { result } = renderHook(() =>
      useModalHeader({ title: 'Title', subtitle: 'Sub' }),
    );
    expect(result.current.titleId).toEqual(expect.any(String));
    expect(result.current.subtitleId).toEqual(expect.any(String));
  });

  it('returns no ids without title and subtitle', () => {
    const { result } = renderHook(() =>
      useModalHeader({ titleId: 'my-title', subtitleId: 'my-sub' }),
    );
    expect(result.current.titleId).toBeUndefined();
    expect(result.current.subtitleId).toBeUndefined();
  });

  it('uses custom ids', () => {
    const { result } = renderHook(() =>
      useModalHeader({
        title: 'Title',
        subtitle: 'Sub',
        titleId: 'my-title',
        subtitleId: 'my-sub',
      }),
    );
    expect(result.current.titleId).toBe('my-title');
    expect(result.current.subtitleId).toBe('my-sub');
  });
});

describe('registration', () => {
  it('registers the resolved ids with the Modal', () => {
    const { value, wrapper } = setup();
    renderHook(() => useModalHeader({ title: 'Title', titleId: 'my-title' }), {
      wrapper,
    });
    expect(value.registerTitleIds).toHaveBeenCalledWith({
      titleId: 'my-title',
      subtitleId: undefined,
    });
  });

  it('re-registers when the ids change', () => {
    const { value, cleanup, wrapper } = setup();
    const { rerender } = renderHook(
      ({ subtitle }: { subtitle?: string }) =>
        useModalHeader({ title: 'Title', subtitle, subtitleId: 'my-sub' }),
      { wrapper, initialProps: {} },
    );
    rerender({ subtitle: 'Sub' });
    expect(cleanup).toHaveBeenCalledTimes(1);
    expect(value.registerTitleIds).toHaveBeenLastCalledWith({
      titleId: expect.any(String),
      subtitleId: 'my-sub',
    });
  });

  it('clears the ids on unmount', () => {
    const { cleanup, wrapper } = setup();
    const { unmount } = renderHook(() => useModalHeader({ title: 'Title' }), {
      wrapper,
    });
    unmount();
    expect(cleanup).toHaveBeenCalledTimes(1);
  });
});

describe('onClose', () => {
  it('comes from the Modal unless it is not dismissable', () => {
    const onClose = vi.fn();
    const dismissable = setup({ onClose });
    expect(
      renderHook(() => useModalHeader({}), { wrapper: dismissable.wrapper })
        .result.current.onClose,
    ).toBe(onClose);
    const locked = setup({ onClose, isDismissable: false });
    expect(
      renderHook(() => useModalHeader({}), { wrapper: locked.wrapper }).result
        .current.onClose,
    ).toBeUndefined();
  });

  it('prefers its own onClose, even when the Modal is not dismissable', () => {
    const own = vi.fn();
    const { wrapper } = setup({ onClose: vi.fn(), isDismissable: false });
    const { result } = renderHook(() => useModalHeader({ onClose: own }), {
      wrapper,
    });
    expect(result.current.onClose).toBe(own);
  });
});

describe('closeIconLabel', () => {
  it('prefers own label, then Modal label, then "Close"', () => {
    const { wrapper } = setup({ closeIconLabel: 'Schließen' });
    expect(
      renderHook(() => useModalHeader({ closeIconLabel: 'Fermer' }), {
        wrapper,
      }).result.current.closeIconLabel,
    ).toBe('Fermer');
    expect(
      renderHook(() => useModalHeader({}), { wrapper }).result.current
        .closeIconLabel,
    ).toBe('Schließen');
    expect(
      renderHook(() => useModalHeader({})).result.current.closeIconLabel,
    ).toBe('Close');
  });
});

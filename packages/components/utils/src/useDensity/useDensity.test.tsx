import React from 'react';
import { render, renderHook } from '@testing-library/react';

import { DensityProvider, useDensity } from './useDensity';

describe('useDensity', () => {
  it('should return the default density value', () => {
    const { result } = renderHook(() => useDensity());

    expect(result.current).toBe('low');
  });

  it('should return the low density value', () => {
    render(<DensityProvider value="low">Children</DensityProvider>);

    const { result } = renderHook(() => useDensity());

    expect(result.current).toBe('low');
  });

  it('should return the high density value', () => {
    render(<DensityProvider value="high">Children</DensityProvider>);

    const { result } = renderHook(() => useDensity());

    expect(result.current).toBe('low');
  });
});

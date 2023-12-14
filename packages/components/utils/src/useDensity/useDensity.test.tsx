import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { DensityContainer } from '@contentful/f36-density-container';

import { useDensity } from './useDensity';

describe('useDensity', () => {
  it('should return the default density value', () => {
    const { result } = renderHook(() => useDensity());

    expect(result.current).toBe('low');
  });

  it('should return the low density value', () => {
    render(<DensityContainer density="low">Children</DensityContainer>);

    const { result } = renderHook(() => useDensity());

    expect(result.current).toBe('low');
  });

  it('should return the high density value', () => {
    render(<DensityContainer density="high">Children</DensityContainer>);

    const { result } = renderHook(() => useDensity());

    expect(result.current).toBe('low');
  });
});

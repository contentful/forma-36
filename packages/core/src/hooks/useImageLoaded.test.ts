import { renderHook, waitFor } from '@testing-library/react';
import { useImageLoaded } from './useImageLoaded';

describe('useImageLoaded', () => {
  it('should call the onLoad function when the image loads', async () => {
    const onLoad = jest.fn();
    const mockImage = {
      complete: false,
      addEventListener: (event: string, callback: () => void) => {
        if (event === 'load') {
          setTimeout(() => {
            mockImage.complete = true;
            callback();
          }, 0);
        }
      },
    };
    const { result } = renderHook(() => useImageLoaded({ onLoad }));

    result.current.ref.current = mockImage as HTMLImageElement;
    mockImage.addEventListener('load', result.current.onLoad);

    expect(onLoad).not.toHaveBeenCalled();
    await waitFor(
      () => {
        expect(result.current.loaded).toBe(false);
      },
      { timeout: 5000 },
    );
    expect(onLoad).toHaveBeenCalledTimes(1);

    await waitFor(
      () => {
        expect(result.current.loaded).toBe(true);
      },
      { timeout: 5000 },
    );
  });
});

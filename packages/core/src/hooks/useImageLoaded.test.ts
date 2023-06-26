import { renderHook } from '@testing-library/react-hooks';
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
    const { result, waitForNextUpdate } = renderHook(() =>
      useImageLoaded({ onLoad }),
    );

    result.current.ref.current = mockImage as HTMLImageElement;
    mockImage.addEventListener('load', result.current.onLoad);

    expect(onLoad).not.toHaveBeenCalled();
    expect(result.current.loaded).toBe(false);

    await waitForNextUpdate();

    expect(onLoad).toHaveBeenCalledTimes(1);
    expect(result.current.loaded).toBe(true);
  });
});

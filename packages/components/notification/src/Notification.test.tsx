import { act } from '@testing-library/react';
import { Notification } from './Notification';

describe('Notification with custom container', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('cleanup unmounts the React root and resets state', async () => {
    let resultPromise;
    act(() => {
      resultPromise = Notification.success('Test message');
    });
    await resultPromise;

    const managerBefore = document.querySelector(
      '[data-test-id="cf-notification-container"]',
    );
    expect(managerBefore).toBeTruthy();

    let cleanupPromise;
    act(() => {
      cleanupPromise = Notification.cleanup();
    });
    await cleanupPromise;

    const managerAfter = document.querySelector(
      '[data-test-id="cf-notification-container"]',
    );
    expect(managerAfter).toBeNull();
  });
});

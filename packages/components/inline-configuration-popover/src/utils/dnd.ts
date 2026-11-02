import {
  KeyboardCode,
  KeyboardSensor,
  PointerSensor,
  type Announcements,
  type KeyboardCoordinateGetter,
  type KeyboardSensorProps,
  type Modifier,
  type PointerSensorProps,
  type ScreenReaderInstructions,
} from '@dnd-kit/core';

const KEYBOARD_STEP = 16;
const KEYBOARD_LARGE_STEP = 64;

/**
 * Arrow keys move the popover by 16px, or 64px with Shift.
 */
export const coordinateGetter: KeyboardCoordinateGetter = (
  event,
  { currentCoordinates },
) => {
  const step = event.shiftKey ? KEYBOARD_LARGE_STEP : KEYBOARD_STEP;

  switch (event.code) {
    case KeyboardCode.Right:
      return { ...currentCoordinates, x: currentCoordinates.x + step };
    case KeyboardCode.Left:
      return { ...currentCoordinates, x: currentCoordinates.x - step };
    case KeyboardCode.Down:
      return { ...currentCoordinates, y: currentCoordinates.y + step };
    case KeyboardCode.Up:
      return { ...currentCoordinates, y: currentCoordinates.y - step };
    default:
      return undefined;
  }
};

const WINDOW_PADDING = 8;

/**
 * Keeps the popover inside the window while it's dragged. It never pushes a
 * popover that already overlaps an edge (e.g. a tall popover), it only stops
 * it from moving further out.
 */
export const restrictToWindow: Modifier = ({
  transform,
  draggingNodeRect,
  windowRect,
}) => {
  if (!draggingNodeRect || !windowRect) {
    return transform;
  }

  const minX = Math.min(
    0,
    windowRect.left + WINDOW_PADDING - draggingNodeRect.left,
  );
  const maxX = Math.max(
    0,
    windowRect.left +
      windowRect.width -
      WINDOW_PADDING -
      draggingNodeRect.right,
  );
  const minY = Math.min(
    0,
    windowRect.top + WINDOW_PADDING - draggingNodeRect.top,
  );
  const maxY = Math.max(
    0,
    windowRect.top +
      windowRect.height -
      WINDOW_PADDING -
      draggingNodeRect.bottom,
  );

  return {
    ...transform,
    x: Math.min(maxX, Math.max(minX, transform.x)),
    y: Math.min(maxY, Math.max(minY, transform.y)),
  };
};

type KeyListeners = {
  add: (
    eventName: string,
    handler: EventListener,
    options?: AddEventListenerOptions,
  ) => void;
  removeAll: () => void;
};

/**
 * dnd-kit's KeyboardSensor, with its key listener moved to the capture phase.
 *
 * The stock sensor listens to `keydown` on the document in the bubble phase,
 * so while a keyboard drag is active every other handler sees the keys first:
 * Escape would close the inline configuration popover (and any page-level panel that
 * listens for Escape) instead of only cancelling the drag. Listening in the
 * capture phase and stopping the keys the sensor handles (it calls
 * `preventDefault()` on them) keeps Escape, Space, Enter, Tab and the arrow
 * keys scoped to the drag.
 */
export class InlineConfigurationPopoverKeyboardSensor extends KeyboardSensor {
  constructor(props: KeyboardSensorProps) {
    super(props);

    const doc = (props.event.target as Node | null)?.ownerDocument ?? document;
    const entries: Array<[string, EventListener]> = [];

    const listeners: KeyListeners = {
      add(eventName, handler) {
        const captureHandler: EventListener = (event) => {
          handler(event);

          if (event.defaultPrevented) {
            event.stopPropagation();
          }
        };
        entries.push([eventName, captureHandler]);
        doc.addEventListener(eventName, captureHandler, true);
      },
      removeAll() {
        entries.forEach(([eventName, handler]) =>
          doc.removeEventListener(eventName, handler, true),
        );
        entries.length = 0;
      },
    };

    // The base class adds its keydown listener on the next tick, through
    // `this.listeners`, so replacing it here is enough.
    (this as unknown as { listeners: KeyListeners }).listeners = listeners;
  }
}

type PointerSensorInternals = {
  activated: boolean;
  documentListeners: {
    add: (
      eventName: string,
      handler: EventListener,
      options?: AddEventListenerOptions,
    ) => void;
  };
  handleCancel: () => void;
  detach: () => void;
};

/**
 * dnd-kit's PointerSensor, with Escape kept to the drag.
 *
 * The stock sensor cancels on a bubbling `keydown` on the document but
 * doesn't stop it, so during a pointer drag Escape also reaches page-level
 * listeners (e.g. a slide-in that closes on Escape). This adds a
 * capture-phase listener that cancels the drag and stops Escape, only once
 * the drag has started and until the sensor is detached.
 */
export class InlineConfigurationPopoverPointerSensor extends PointerSensor {
  constructor(props: PointerSensorProps) {
    super(props);

    const sensor = this as unknown as PointerSensorInternals;
    let isAttached = true;
    const detach = sensor.detach.bind(sensor);
    sensor.detach = () => {
      isAttached = false;
      detach();
    };

    // The base class attached its listeners in its constructor. Document
    // listeners are all removed when it detaches.
    sensor.documentListeners.add(
      'keydown',
      (event) => {
        if (
          isAttached &&
          sensor.activated &&
          (event as KeyboardEvent).key === 'Escape'
        ) {
          event.stopPropagation();
          sensor.handleCancel();
        }
      },
      { capture: true },
    );
  }
}

/**
 * Drag announcements and instructions. Key instructions are only given for
 * keyboard drags: during a pointer drag, Space and the arrow keys do nothing.
 */
export function getDragAccessibility(
  getName: () => string,
  isKeyboardDrag: () => boolean,
): {
  announcements: Announcements;
  screenReaderInstructions: ScreenReaderInstructions;
} {
  return {
    announcements: {
      onDragStart: () =>
        isKeyboardDrag()
          ? `Picked up ${getName()}. Use the arrow keys to move, Space to drop, Escape to cancel.`
          : `Picked up ${getName()}.`,
      // Silent while moving and when hovering droppables (there are none)
      onDragMove: () => undefined,
      onDragOver: () => undefined,
      onDragEnd: () => `Moved ${getName()}.`,
      onDragCancel: () => `Movement cancelled. ${getName()} is back in place.`,
    },
    screenReaderInstructions: {
      draggable:
        'Press Space or Enter to pick up. Use the arrow keys to move, hold Shift to move further. Press Space or Enter to drop, or Escape to cancel.',
    },
  };
}

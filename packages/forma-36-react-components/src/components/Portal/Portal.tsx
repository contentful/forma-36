import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactElement;
  container?: Document | HTMLElement;
}

export default function Portal({
  children,
  container: containerElement,
}: PortalProps): React.ReactPortal | null {
  const container = useRef<Document | HTMLElement | undefined>(
    containerElement,
  );
  const portal = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    if (!container.current) {
      container.current = document.body;
    }

    container.current.appendChild(portal.current);

    return () => {
      if (container.current) {
        container.current.removeChild(portal.current);
      }
    };
  }, []);

  return portal.current ? createPortal(children, portal.current) : null;
}

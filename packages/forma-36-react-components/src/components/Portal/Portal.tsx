import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactElement;
  container?: Document | HTMLElement;
}

export function Portal({
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

    const portalContainer = portal.current;
    portalContainer.setAttribute('data-cf-ui-portal', '');
    container.current.appendChild(portalContainer);

    return () => {
      if (container.current) {
        container.current.removeChild(portalContainer);
      }
    };
  }, []);

  return portal.current ? createPortal(children, portal.current) : null;
}

export default Portal;

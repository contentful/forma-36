import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function ImageRow({ children }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        alignItems: 'flex-start',
      }}
    >
      {React.Children.map(children, (child) => (
        <div style={{ flex: '0 1 auto', minWidth: 0, maxWidth: '100%' }}>
          {child}
        </div>
      ))}
    </div>
  );
}

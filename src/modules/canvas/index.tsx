import React, { Suspense } from 'react';

const CanvasComponent = React.lazy(() => import('./Canvas.tsx'));

export function Canvas() {
  return (
    <Suspense>
      <CanvasComponent />
    </Suspense>
  );
}

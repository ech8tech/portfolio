import React, { Suspense } from 'react';

export function PixelPioneer() {
  const PixelPioneerComponent = React.lazy(() => import('./PixelPioneer'));

  return (
    <Suspense>
      <PixelPioneerComponent />
    </Suspense>
  );
}

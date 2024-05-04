import React, { Suspense } from 'react';

const PixelPioneerComponent = React.lazy(() => import('./PixelPioneer'));

export function PixelPioneer() {
  return (
    <Suspense>
      <PixelPioneerComponent />
    </Suspense>
  );
}

import React, { Suspense } from 'react';

const MainComponent = React.lazy(() => import('./Main'));

export function Main() {
  return (
    <Suspense>
      <MainComponent />
    </Suspense>
  );
}

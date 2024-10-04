/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';

const PaymentForm = lazy(() => import('pagos/PaymentForm'));

const App = () => {
  return (
    <>
    <div>
      <h1>App React + VITE + WEBPACK</h1>
      <h2>This is vite deploy</h2>
    </div>
      <Suspense fallback={<p>Loading Payment Form...</p>}>
        <PaymentForm title={'Formulario desde remoto (react+vite)'}/>
      </Suspense>
    </>
  );
};

export default App;

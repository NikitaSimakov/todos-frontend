import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar, Footer } from './';

export const Layout = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

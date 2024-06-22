import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Footer } from './AppBar/Footer/Footer';

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

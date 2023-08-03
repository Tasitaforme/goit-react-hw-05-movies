import Header from 'components/Header/Header'
import { Loader } from 'components/Loader/Loader';
import React from 'react'
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
    return (
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    );
}

export default SharedLayout
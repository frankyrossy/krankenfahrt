import React from 'react';
import App from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getCurrentUser } from '../lib/auth';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const user = await getCurrentUser();

        if (!user && router.pathname !== '/login') {
          router.push('/login');
        }

        if (user && router.pathname === '/login') {
          router.push('/');
        }
      };

      checkAuth();
    }, [router]);

    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
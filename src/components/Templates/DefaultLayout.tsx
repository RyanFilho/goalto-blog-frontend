import React from 'react';
import { Header } from '../Organisms/Header';

export interface DefaultLayoutProps{
  children: React.ReactNode;
}

export function DefaultLayout ({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

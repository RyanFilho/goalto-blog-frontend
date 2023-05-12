import React from 'react';
import { Header } from '../Organisms/Header';
import "./DefaultLayout.scss";
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

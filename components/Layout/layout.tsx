// components/Layout/layout.tsx
import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

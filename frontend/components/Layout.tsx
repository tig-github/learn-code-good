import React, { PropsWithChildren } from "react";
import { useRouter } from 'next/router'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  return (
    <>
      <Navbar />
      { router.pathname.includes('lesson') && <Sidebar /> }
      {children}
    </>
  );
};

export default Layout;

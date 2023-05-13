import React, { PropsWithChildren } from "react";
import Router, { useRouter } from "next/router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;

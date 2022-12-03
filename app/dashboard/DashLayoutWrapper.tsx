"use client";

import { useEffect, useState } from "react";
import {  Toaster } from "react-hot-toast";
import Header from "./Header";
import SideBar from "./SideBar";

const DashLayoutWrapper = ({ children }: any) => {
  useEffect(() => {
    import("bootstrap/js/dist/modal");
    import("bootstrap/js/dist/dropdown");
    import("bootstrap/js/dist/tooltip");
  }, []);
  const [show, setShow] = useState(false);

  const showSideBar = () => {
    setShow(!show);
  };

  return (
    <div>
      <Toaster/>
      <SideBar show={show} />
      <section className={`dash_container ${show ? "add_body_padding" : " "} `}>
        <Header show={show} showSideBar={showSideBar} />
        {children}
      </section>
    </div>
  );
};

export default DashLayoutWrapper;

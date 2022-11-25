"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const DashLayoutWrapper = ({ children }: any) => {
  useEffect(() => {
    import("bootstrap/js/dist/modal");
    import("bootstrap/js/dist/dropdown");
  }, []);
  const [show, setShow] = useState(false);

  const showSideBar = () => {
    setShow(!show);
  };

  return (
    <div>
      <SideBar show={show} />
      <section className={`dash_container ${show ? "add_body_padding" : " "} `}>
        <Header show={show} showSideBar={showSideBar} />
        {children}
      </section>
    </div>
  );
};

export default DashLayoutWrapper;

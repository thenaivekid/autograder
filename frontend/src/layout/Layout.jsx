import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";
import { LayoutDiv } from "../styles/Container";

function Layout() {
  return (
    <>
      <Header />
      <LayoutDiv>
        <Outlet />
      </LayoutDiv>
    </>
  );
}

export default Layout;

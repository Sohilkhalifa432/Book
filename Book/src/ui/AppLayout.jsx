import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
// import Sidebar from '/'

function AppLayout() {
  return (
    <div className="main-container layout-root">
      <Navbar />
      <div style={{ flex: 1 }} className="layout-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;

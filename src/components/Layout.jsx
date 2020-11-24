import React from "react";
import Sidebar from "./Sidebar";
import Bottom from "./Bottom";
import "./layoutStyle.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="content">
        <div className="main-content">{children}</div>
        <Sidebar />
      </div>
      <Bottom />
    </div>
  );
}

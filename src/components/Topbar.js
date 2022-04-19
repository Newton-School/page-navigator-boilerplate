import React from "react";
import { useNavigate } from "react-router-dom";

import "./topbar.css";
export default function Topbar() {
  let navigate = useNavigate();
  const pageChanger = () => {};

  return (
    <>
      <div className="topbar">
        <button
          className="topbarButton"
          onClick={() => pageChanger()}
          data-testid="home"
        >
          <h3>Home page</h3>
        </button>
        <button
          className="topbarButton"
          onClick={() => pageChanger()}
          data-testid="profile"
        >
          <h3>profile page</h3>
        </button>
        <button
          className="topbarButton"
          onClick={() => pageChanger()}
          data-testid="contact"
        >
          <h3>contact page</h3>
        </button>
      </div>
    </>
  );
}

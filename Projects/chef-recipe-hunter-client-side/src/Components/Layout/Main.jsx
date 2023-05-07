import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="mt-auto mx-auto">
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Main;

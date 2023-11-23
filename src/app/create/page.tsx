import React from "react";
import CreateEvent from "@/components/Create";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default async function Create() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <CreateEvent />
    </div>
  );
}

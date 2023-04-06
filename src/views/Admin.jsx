import React from "react";
import Register from "./Register";
import Sidebar from "../components/Sidebar";

function Admin() {
  return (
    <div class="flex">
      <Sidebar />
      <Register />
    </div>
  );
}

export default Admin;

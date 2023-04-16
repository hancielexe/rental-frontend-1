import React from "react";
import Register from "./Register";
import Sidebar from "../components/Sidebar";
import Users from "../components/Users";

function Admin() {
  return (
    <div class="flex">
      <Sidebar />
      <Users />
    </div>
  );
}

export default Admin;

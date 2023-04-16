import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistLogin";
import Login from "./views/Login";
import Register from "./views/Register";
import Inquiry from "./views/Inquiry";
import Admin from "./views/Admin";
import Tenant from "./views/Tenant";
import Unauthorized from "./views/Unauthorized";

const ROLES = {
  Tenant: 2001,
  Admin: 5150,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes*/}
        <Route path="/" element={<Landing />} />
        <Route path="/inquire" element={<Inquiry />} />
        <Route path="/login" element={<Login />} />

        {/*protected routes*/}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Tenant]} />}>
            <Route path="/tenant" element={<Tenant />} />
          </Route>
        </Route>

        {/*catch all*/}
        <Route path="*" element={<Unauthorized />} />
      </Route>
    </Routes>
  );
}

export default App;

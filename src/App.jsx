import React, { useEffect } from "react";
import "./css/style.css";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Dashboard from "./pages/Dashboard";
import Listings from "./pages/Listings";
import Unit from "./pages/Unit";
import Header from "./components/Header";
import UserDashboard from "./pages/UserDashboard";
import Notfound from "./views/Notfound";
import UserApartment from "./views/UserApartment";
import AdminRegister from "./views/AdminRegister";
import ChangePass from "./views/ChangePass";
import Maintenance from "./views/Maintenance";
import Complaint from "./views/complaint";
import MainteAdmin from "./views/MainteAdmin";
import Sales from "./views/Sales";
import SalesDetails from "./views/SalesDetails";
import ContractUser from "./views/ContractUser";
import Registry from "./views/Registry";
import Profile from "./views/Profile";
import TenantIn_Out from "./views/TenantIn_Out";

const ROLES = {
  Tenant: 2001,
  Admin: 5150,
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes*/}
        <Route path="/" element={<Landing />} />
        <Route path="/inquire" element={<Inquiry />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/listings" element={<Listings />} />
        <Route exact path="/unit" element={<Unit />}>
          <Route path=":id" element={<Unit />} />
        </Route>

        {/*protected routes*/}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminregister" element={<AdminRegister />} />
            <Route path="/mainteadmin" element={<MainteAdmin />} />
            <Route path="/finance/sales" element={<Sales />} />
            <Route path="/finance/sales/details" element={<SalesDetails />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/tenantin_out" element={<TenantIn_Out />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Tenant]} />}>
            <Route path="/tenant" element={<Tenant />} />
            <Route exact path="/user" element={<UserDashboard />} />
            <Route exact path="/apartment" element={<UserApartment />} />
            <Route exact path="/changepass" element={<ChangePass />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/contractuser" element={<ContractUser />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        {/*catch all*/}
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;

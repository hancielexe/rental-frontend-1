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
import Complaint from "./views/Complaint";
import MainteAdmin from "./views/MainteAdmin";
import SalesDetails from "./views/SalesDetails";
import Contract from "./views/Contract";
import Registry from "./views/Registry";
import Profile from "./views/Profile";
import TenantIn from "./views/TenantIn";
import ComplaintAdmin from "./views/ComplaintAdmin";
import Expenses from "./views/Expenses";
import AssetsLiabilities from "./views/AssetsLiabilities";
import CashFlow from "./views/CashFlow";
import RoomView from "./views/RoomView";
import Billing from "./views/Billing";
import UserBilling from "./views/UserBilling";
import SalesForm from "./views/SalesForm";
import FAQ from "./views/FAQ";
import AptView from "./views/AptView";
import TenantOut from "./views/TenantOut";
import About from "./views/About";
import Contact from "./views/Contact";
import AdminInquiry from "./views/AdminInquiry";
import AcknowledgeAdmin from "./views/ContractAcknowAdmin";

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
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/roomview" element={<RoomView />} />
        <Route exact path="/aptview" element={<AptView />} />
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
            <Route path="/complaintadmin" element={<ComplaintAdmin />} />
            <Route path="/finance/sales" element={<SalesDetails />} />
            <Route path="/salesform" element={<SalesForm />} />
            <Route path="/finance/expenses" element={<Expenses />} />
            <Route path="/assets/a" element={<AssetsLiabilities />} />
            <Route path="/assets/cashflow" element={<CashFlow />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/tenantin" element={<TenantIn />} />
            <Route path="/tenantout" element={<TenantOut />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/inquiries" element={<AdminInquiry />} />
            <Route path="/contract" element={<Contract />} />
            <Route
              path="/contract/acknowledgement"
              element={<AcknowledgeAdmin />}
            />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Tenant]} />}>
            <Route path="/tenant" element={<Tenant />} />
            <Route exact path="/user" element={<UserDashboard />} />
            <Route exact path="/apartment" element={<UserApartment />} />
            <Route exact path="/settings" element={<ChangePass />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bill" element={<UserBilling />} />
          </Route>
        </Route>

        {/*catch all*/}
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;

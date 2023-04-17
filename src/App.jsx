import React, { useEffect } from 'react';
import './css/style.css';
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
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings';
import Unit from './pages/Unit';
import Header from './components/Header';
import UserDashboard from './pages/UserDashboard';

const ROLES = {
  Tenant: 2001,
  Admin: 5150,
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*public routes*/}
        <Route path="/" element={<Landing />} />
        <Route path="/inquire" element={<Inquiry />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/listings" element={<Listings />} />
        <Route exact path="/unit" element={<Unit />} />

        {/*protected routes*/}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route exact path="/admin" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Tenant]} />}>
            <Route path="/tenant" element={<Tenant />} />
            <Route exact path="/user" element={<UserDashboard />} />
          </Route>
        </Route>

        {/*catch all*/}
        <Route path="*" element={<Unauthorized />} />
      </Route>
    </Routes>
  );
}

export default App;

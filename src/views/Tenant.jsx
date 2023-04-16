import React from "react";
import Users from "../components/Users";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

function Tenant() {
  const logout = useLogout();
  const navigate = useNavigate();

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <Users />
      <button onClick={signOut}>Logout</button>
    </>
  );
}

export default Tenant;

import React from "react";
import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "../api/axios";
import useToggle from "../hooks/useToggle";

const LOGIN_URL = "/auth";

function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/user";

  const userRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttributes] = useInput("user", "");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [check, toggleCheck] = useToggle("persist", false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const userId = response?.data?.userId;
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const unit = response?.data?.unit;

      if (roles.includes(5150)) from = "/dashboard";

      setAuth({ user, pwd, userId, roles, accessToken, unit });
      localStorage.setItem("userid", userId);
      resetUser(); //setUser("");
      setPwd("");

      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  /* const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]); */

  return (
    <div className="body-bg min-h-screen pt-1 md:pt-1 pb-6 px-2 md:px-0">
      <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 class="font-bold text-2xl text-gray-700">Login</h3>
          <p class="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section class="mt-10">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form class="flex flex-col" onSubmit={handleSubmit}>
            <div class="mb-6 rounded">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-1"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                class="bg-gray-200 rounded w-full text-gray-700  focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                ref={userRef}
                autoComplete="off"
                {...userAttributes}
                required
              />
            </div>
            <div class="mb-6 pb-6 rounded">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 ml-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div class="flex justify-between">
              <div class="text-sm text-purple-600">
                <input
                  type="checkbox"
                  id="persist"
                  onChange={toggleCheck}
                  checked={check}
                  class="mr-2"
                />
                <label htmlFor="persist">Trust this device</label>
              </div>
              <a
                href="#"
                class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
              >
                Forgot your password?
              </a>
            </div>
            <button
              class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;

import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
    
        const configuration = {
            method: "post",
            url: "https://api.marlynshouserental.com/login",
            data: {
              username,
              password,
            },
          };
        
          axios(configuration)
          .then((result) => {
            setLogin(true);
            cookies.set("TOKEN", result.data.token, {
                path: "/",
            });
            setUsername('')
            setPassword('')
            navigate("/auth");
          })
          .catch((error) => {
            error = new Error();
            alert("No such user!")
          });

    }

    return ( 
        <div>
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg">
    <form action="" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
      <p class="text-lg font-medium">Sign in to your account</p>

      <div>
        <label for="email" class="text-sm font-medium">Email</label>

        <div class="relative mt-1 border rounded-lg border-gray-400">
          <input
            type="email"
            id="email"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
      </div>

      <div>
        <label for="password" class="text-sm font-medium">Password</label>

        <div class="relative mt-1 border rounded-lg border-gray-400">
          <input
            type="password"
            id="password"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      {login ? (
          <p className="text-green-600">Tenant login successful!</p>
        ) : (
          <p className="text-danger"></p>
        )}
      <button
        type="submit"
        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
        onClick={(e) => handleSubmit(e)}
      >
        Sign in
      </button>
    </form>
  </div>
</div>

        </div>
    );
}

export default Login;
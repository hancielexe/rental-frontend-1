import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
    
        const configuration = {
            method: "post",
            url: "https://api.marlynshouserental.com/register",
            data: {
              username,
              password,
            },
          };
        
          axios(configuration)
          .then((result) => {
            setRegister(true);
            setUsername('')
            setPassword('')
          })
          .catch((error) => {
            error = new Error();
          });

    }
    
    return ( 
    <div>
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg">
    <h1 class="text-2xl font-bold sm:text-3xl">Register Tenant</h1>
  </div>
  <form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
    <div>
      <label for="email" class="sr-only">Username</label>

      <div class="relative border rounded-lg border-gray-400">
        <input
          type="email"
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>
      <div class="relative border rounded-lg border-gray-400">
        <input
          type="password"
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
    </div>
    {register ? (
          <p className="text-green-600">Tenant registered successfully!</p>
        ) : (
          <p className="text-danger"></p>
        )}
      <button
        type="submit"
        class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        onClick={(e) => handleSubmit(e)}
      >
        Sign in
      </button>
  </form>
</div>
    </div>
    );
}

export default Register;
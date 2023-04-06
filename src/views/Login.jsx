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
      <div className="body-bg min-h-screen pt-1 md:pt-1 pb-6 px-2 md:px-0">


      <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
              <h3 class="font-bold text-2xl">Welcome to Startup</h3>
              <p class="text-gray-600 pt-2">Sign in to your account.</p>
          </section>
  
          <section class="mt-10">
              <form class="flex flex-col" method="POST" action="#">
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                      <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                      <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                  </div>
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                      <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                      <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                  </div>
                  <div class="flex justify-end">
                      <a href="#" class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                  </div>
                  <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
              </form>
          </section>
      </main>
  
      <div class="max-w-lg mx-auto text-center mt-12 mb-6">
          <p class="text-white">Don't have an account? <a href="#" class="font-bold hover:underline">Sign up</a>.</p>
      </div>
  
      <footer class="max-w-lg mx-auto flex justify-center text-white">
          <a href="#" class="hover:underline">Contact</a>
          <span class="mx-3">•</span>
          <a href="#" class="hover:underline">Privacy</a>
      </footer>
         </div>
  
    );
}

export default Login;

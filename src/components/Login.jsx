import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to send the form data to your server for login.
    // You might use fetch() or an Axios request to post the data.
    // Remember to validate and handle errors appropriately.

    console.log('Form data submitted:', formData);
  };

  return (
    <div className="min-h-screen text-white flex justify-center bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-[80%] md:w-[40%]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">Sign in to your account</h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <label className="flex flex-col mb-3">
            <div>Email<sup className="text-red-600"> *</sup></div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-lg w-[95%] border border-slate-800 px-3 py-2 placeholder-gray-400 text-gray-100 bg-slate-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col mb-3">
            <div>Password<sup className="text-red-600"> *</sup></div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="rounded-lg w-[95%] border border-slate-800 px-3 py-2 placeholder-gray-400 text-gray-100 bg-slate-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <div>
            <button
              type="submit"
              className="w-[95%] py-2 px-4 mb-2 text-md font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
            >
              Sign In
            </button>
          </div>
          <div className="flex w-[95%] mb-2">
            <div className="w-[50%] border-t-[2px] border-gray-400 relative top-[12px]"></div>
            <div className="w-[30px] z-2 bg-gray-800 text-center">OR</div>
            <div className="w-[50%] border-t-[2px] border-gray-400 relative top-[12px]"></div>
          </div>
          <div>
            <button
              type="submit"
              className="w-[95%] py-2 px-4 mb-3 text-md font-medium rounded-md text-white bg-violet-900 hover:bg-violet-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
            >
              <FcGoogle className="scale-[1.5] inline-block mr-4" />Sign in with Google
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-sm">
              Don't have an account ?{' '}
              <NavLink to="/sign" className="font-medium text-blue-600 hover:text-blue-500">
                Sign up
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

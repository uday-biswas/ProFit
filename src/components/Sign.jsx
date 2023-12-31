import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Sign = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
        const navigate = useNavigate();
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
        if(formData.password !== formData.confirmPassword){
            toast.error('Password and Confirm Password do not match');
            return;
        }
        toast.success('Account created successfully');
        navigate('/login');
      };
    
      return (
        <div className="min-h-screen text-white flex justify-center bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-[80%] md:w-[40%]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">Sign up for your account</h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
            <div className='flex flex-col md:flex-row mb-2'>
            <label className='w-full md:w-[50%] mb-2'>
               First Name<sup className='text-red-600'> *</sup>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className="rounded-lg w-[95%] md:w-[90%] border border-slate-800 px-3 py-2 placeholder-gray-400 text-gray-100 bg-slate-600 focus:outline-none focus:border-blue-500"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                />
            </label>
            <label className='w-full md:w-[50%] mb-2'>
                Last Name<sup className='text-red-600'> *</sup>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                className="rounded-lg w-[95%] md:w-[90%] border border-slate-800 px-3 py-2 placeholder-gray-400 text-gray-100 bg-slate-600 focus:outline-none focus:border-blue-500"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            </div>
            <label className='flex flex-col mb-3'>
                <div> Email<sup className='text-red-600'> *</sup></div>
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
            <div className='flex flex-col md:flex-row mb-2'>
            <label className='w-full md:w-[50%] mb-2 relative'>
               Create Password<sup className='text-red-600'> *</sup>
              <input
                id="password"
                name="password"
                type= {showPassword ? ("text") : ("password")}
                required
                className="rounded-lg w-[95%] md:w-[90%] border border-slate-800 px-3 py-2 placeholder-gray-400 text-gray-100 bg-slate-600 focus:outline-none focus:border-blue-500"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
              />
              <span className='absolute right-[15%] top-[38px]' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiOutlineEyeInvisible className='scale-[1.4]'/> : <AiOutlineEye className='scale-[1.4]'/>}</span>
            </label>
            <label className='w-full md:w-[50%] mb-2 relative'>
               Confirm Password<sup className='text-red-600'> *</sup>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type= {showConfirmPassword ? ("text") : ("password")}
                required
                className="rounded-lg w-[95%] md:w-[90%] border border-slate-800 px-3 py-2 placeholder-gray-400 text-gray-100 bg-slate-600 focus:outline-none focus:border-blue-500"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
                <span className='absolute right-[15%] top-[38px]' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <AiOutlineEyeInvisible className='scale-[1.4]'/> : <AiOutlineEye className='scale-[1.4]'/>}</span>
            </label>
            </div>
          <div>
            <button
              type="submit"
              className="w-[95%] py-2 px-4 mb-3 text-md font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
            >
              Create Account
            </button>
          </div>
          <div className='flex w-[95%] mb-3'>
            <div className='w-[50%] border-t-[2px] border-gray-400 relative top-[12px]'></div>
            <div className='w-[30px] z-2 bg-gray-800 text-center'>OR</div>
            <div className='w-[50%] border-t-[2px] border-gray-400 relative top-[12px]'></div>
          </div>
          <div>
            <button
              type="button"
              className="w-[95%] py-2 px-4 mb-2 text-md font-medium rounded-md text-white bg-violet-900 hover:bg-violet-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
            >
              <FcGoogle className='scale-[1.5] inline-block mr-4' />Sign up with Google
            </button>
          </div>
            <div className="flex items-center justify-center">
                <div className="text-sm">
                Already have an account ?{' '}
                <NavLink to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign in
                </NavLink>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;
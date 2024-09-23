import React, { useRef, useState } from "react";
import { checkValidData } from "../../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const mobile = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    if (isSignInForm) {
      const message = checkValidData(email.current.value, password.current.value, "", "");
      setErrorMessage(message);
    } else {
      const message = checkValidData(email.current.value, password.current.value, name.current.value, mobile.current.value);
      setErrorMessage(message);
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Logo Text */}
      <div className="absolute top-5 left-5 z-20 flex items-center">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-rose-500 via-blue-600 to-yellow-500 bg-clip-text text-transparent tracking-wider font-dm-sans">
          Cognify<span className="text-blue-400">Web</span>
        </h1>
      </div>

      {/* Login Form Container */}
      <div className={`relative z-10 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full space-y-6 ${isSignInForm ? "" : "max-w-2xl"}`}>
        {/* Title */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-violet-500 via-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent tracking-wider text-center">
          {isSignInForm ? (
            <>
              Welcome to <span className="font-dm-sans">Cognify</span>
              <span className="text-blue-400">Web</span>
            </>
          ) : (
            <>Create Your Account</>
          )}
        </h1>

        {/* Subheading */}
        <p className="text-white font-dm-sans text-center text-lg">
          {isSignInForm
            ? "Sign In to explore amazing movies!"
            : "Sign Up to explore amazing movies!"}
        </p>

        {/* Login Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {isSignInForm ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-200">Gmail</label>
                <input
                  ref={email}
                  type="email"
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">Password</label>
                <input
                  ref={password}
                  type="password"
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200">Name</label>
                <input
                  ref={name}
                  type="text"
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">Date of Birth</label>
                <input
                  type="date"
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">Gmail</label>
                <input
                  ref={email}
                  type="email"
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">Mobile No</label>
                <input
                  ref={mobile}
                  type="tel"
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">Password</label>
                <input
                  ref={password}
                  type="password"
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          )}

          {/* Error Message */}
          <p className="text-red-500 font-bold text-lg">{errorMessage}</p>

          {/* Forgot Password Link */}
          {isSignInForm && (
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-blue-400 hover:text-blue-500 text-sm"
              >
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-900 rounded-lg text-white font-bold text-lg tracking-wide hover:shadow-xl transition duration-300"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle between Sign In and Sign Up */}
          <p
            className="text-center text-sm text-blue-400 hover:text-blue-500 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "Don’t have an account? Sign up here"
              : "Already have an account? Login here"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

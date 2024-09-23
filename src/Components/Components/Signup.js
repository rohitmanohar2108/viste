import React from 'react';

const Signup = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1689443111130-6e9c7dfd8f9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-violet-500 via-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent tracking-wider text-center">
          Create Your Account
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Create a password"
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
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-300 rounded-lg text-white font-bold text-lg tracking-wide hover:shadow-xl transition duration-300"
          >
            Sign Up
          </button>
          <p className="text-center text-gray-400 text-sm">
            Already have an account? <a href="/sign-in" className="text-blue-400 hover:text-blue-500">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

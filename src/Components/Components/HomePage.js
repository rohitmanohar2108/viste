import React from 'react';

const HomePage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Background image
      }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Title and Subtitle */}
      <div className="relative z-10 text-center font-dm-sans">
        <h1 className="text-6xl font-bold mb-4">FASHION FLAIR</h1>
        <p className="text-xl font-light tracking-wider">
          Unleash Your Style. Discover the Latest Trends.
        </p>
      </div>

      {/* Front Floating Fashion Images */}
      <div className="relative z-10 mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="group">
          <img
            src="https://static.wixstatic.com/media/2feeec_5fad5efbfdd0477cabfb3fe42e8d8173~mv2.jpg/v1/fill/w_735,h_1160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2feeec_5fad5efbfdd0477cabfb3fe42e8d8173~mv2.jpg"
            alt="Fashion Look 1"
            className="w-64 h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg"
          />
        </div>
        <div className="group">
          <img
            src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Fashion Look 2"
            className="w-64 h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg"
          />
        </div>
        <div className="group">
          <img
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Fashion Look 3"
            className="w-64 h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg"
          />
        </div>
        <div className="group">
          <img
            src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Fashion Look 4"
            className="w-64 h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

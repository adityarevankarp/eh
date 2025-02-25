

const EasyHealthLanding = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen flex flex-col items-center text-center px-6">
      {/* Hero Section */}
      <h1 className="text-white text-6xl font-extrabold mt-20">
        EasyHealth – Instant Emergency Care
      </h1>
      <p className="text-white text-xl mt-4 max-w-2xl">
        One tap to connect with emergency responders, family, and healthcare providers – because every second counts.
      </p>
      
      {/* Enhanced SOS Button */}
      <div className="mt-10 relative">
        <div className="absolute -inset-1 bg-red-500 rounded-full opacity-75 blur animate-pulse"></div>
        <button className="relative bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-6 text-2xl font-bold rounded-full shadow-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 border-2 border-white flex items-center space-x-3">
          <span className="text-3xl animate-pulse">🚨</span>
          <span>SOS EMERGENCY</span>
        </button>
      </div>
      
      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-blue-500 text-4xl mb-4">🏥</div>
          <h3 className="text-gray-800 text-xl font-bold mb-2">Instant Medical Response</h3>
          <p className="text-gray-600">Connect with emergency services and nearby medical professionals with one tap.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-blue-500 text-4xl mb-4">📍</div>
          <h3 className="text-gray-800 text-xl font-bold mb-2">Location Tracking</h3>
          <p className="text-gray-600">Automatically shares your precise location with emergency responders.</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-blue-500 text-4xl mb-4">👪</div>
          <h3 className="text-gray-800 text-xl font-bold mb-2">Family Alerts</h3>
          <p className="text-gray-600">Notifies your emergency contacts immediately with your status and location.</p>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-16 mb-20 bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <h2 className="text-blue-600 text-3xl font-bold mb-4">Download EasyHealth Today</h2>
        <p className="text-gray-700 mb-6">Be prepared for any emergency. Our app could save your life or the life of someone you love.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold">App Store</button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Google Play</button>
        </div>
      </div>
    </div>
  );
};

export default EasyHealthLanding;
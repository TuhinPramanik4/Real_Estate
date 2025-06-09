import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-slate-100 to-white text-gray-800 flex flex-col lg:flex-row">
      
      {/* Left: Brand Image + Tagline */}
      <div className="w-full lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Real Estate Contact"
          className="w-full h-[40vh] lg:h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-6 backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Let’s Connect</h1>
          <p className="text-md md:text-lg mt-2 text-center max-w-md">
            Your dream property is just a message away. Contact us today.
          </p>
        </div>
      </div>

      {/* Right: Form and Contact Info */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 space-y-10 bg-white">
        
        {/* Inquiry Form */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-700">Enquiry Form</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white border border-blue-100 shadow-2xl rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6">Contact Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center w-12 h-12">
                <i className="fas fa-phone-alt text-blue-600 text-lg"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg font-semibold text-gray-800">+91 98765 43210</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center w-12 h-12">
                <i className="fas fa-envelope text-blue-600 text-lg"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-semibold text-gray-800">contact@myrealestate.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4 sm:col-span-2">
              <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center w-12 h-12">
                <i className="fas fa-map-marker-alt text-blue-600 text-lg"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">Office Address</p>
                <p className="text-lg font-semibold text-gray-800">
                  45B Real Estate Avenue, 3rd Floor,<br />
                  Andheri West, Mumbai - 400058
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start space-x-4 sm:col-span-2 pt-2">
              <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center w-12 h-12">
                <i className="fas fa-share-alt text-blue-600 text-lg"></i>
              </div>
              <div>
                <p className="text-sm text-gray-500">Social Profiles</p>
                <div className="flex space-x-4 mt-1">
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-sky-500 hover:text-sky-700 text-xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-700 text-xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-blue-800 hover:text-blue-900 text-xl">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;

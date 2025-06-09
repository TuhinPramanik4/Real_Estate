import React from 'react'
import { Home, Building, BedDouble } from 'lucide-react' // Optional icons

const Lists = () => {
  const options = [
    { title: 'Buy', path: '/buy', icon: <Home size={36} /> },
    { title: 'PGs', path: '/pg', icon: <BedDouble size={36} /> },
    { title: 'Rent', path: '/rent', icon: <Building size={36} /> }
  ];

  return (
    <div className="w-full min-h-[80vh] flex flex-wrap justify-center items-center gap-16 p-6 bg-gradient-to-b from-white to-gray-100">
      {options.map((item, index) => (
        <div
          key={index}
          className="w-[250px] h-[300px] bg-white rounded-3xl shadow-lg flex flex-col justify-between items-center p-6 transition-transform hover:scale-105"
        >
          {/* Icon */}
          <div className="text-blue-600">{item.icon}</div>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">{item.title}</h1>

          {/* Button */}
          <button
            onClick={() => { window.location.href = item.path }}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Search More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Lists;

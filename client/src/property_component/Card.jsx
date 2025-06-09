import React from "react";

const Card = ({ house }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col md:flex-row transition-transform hover:shadow-2xl hover:scale-[1.01] duration-300">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:h-auto">
        <img
          src={house.house_image}
          alt={house.house_name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between bg-gray-50">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
            {house.house_name}
          </h2>
          <p className="text-sm text-gray-500 mb-3 md:mb-4">{house.house_address}</p>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Facilities</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              {house.facility.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 md:mt-6 flex justify-end">
          <button className="px-4 md:px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

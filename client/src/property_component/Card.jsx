
const houses = [
  {
    house_image: "https://via.placeholder.com/300x200.png?text=House+1",
    house_name: "Maple Residency",
    house_address: "123 Oak Street, Springfield",
    facility: ["Swimming Pool", "Wi-Fi", "Gym"]
  },
  {
    house_image: "https://via.placeholder.com/300x200.png?text=House+2",
    house_name: "Sunset Villa",
    house_address: "45 Palm Drive, Oceanside",
    facility: ["Beach View", "Home Theater", "BBQ Area"]
  },
  {
    house_image: "https://via.placeholder.com/300x200.png?text=House+3",
    house_name: "Hilltop Mansion",
    house_address: "789 Mountain Lane, Hillview",
    facility: ["Private Elevator", "Fireplace", "Wine Cellar"]
  },
  {
    house_image: "https://via.placeholder.com/300x200.png?text=House+4",
    house_name: "Lakeside Cottage",
    house_address: "22 Willow Road, Lake District",
    facility: ["Fishing Dock", "Boat House", "Fire Pit"]
  },
  {
    house_image: "https://via.placeholder.com/300x200.png?text=House+5",
    house_name: "Urban Nest",
    house_address: "500 Main Street, Downtown",
    facility: ["Smart Home System", "CCTV", "Rooftop Garden"]
  }
];

// components/Card.jsx
// components/Card.jsx
import React from "react";

const Card = ({ house }) => {
  return (
    <div className="w-full h-[40vh] bg-white rounded-2xl shadow-md overflow-hidden flex m-4">
      {/* Image Section */}
      <img
        src={house.house_image}
        alt={house.house_name}
        className="w-1/2 h-full object-cover"
      />

      {/* Details Section */}
      <div className="w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-1">{house.house_name}</h2>
          <p className="text-sm text-gray-600 mb-4">{house.house_address}</p>
          <div>
            <h4 className="text-md font-medium mb-1">Facilities:</h4>
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
              {house.facility.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Wrap button in a flex container to align right */}
        <div className="flex justify-end mt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

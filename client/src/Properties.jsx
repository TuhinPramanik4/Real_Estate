import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Card from "./property_component/Card";

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
    facility: ["Private Elevator", "Fireplace", "Sauna"]
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

function Properties() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % houses.length);
    }, 3000); // change slide every 3 seconds
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-400 flex">
      {/* Left section: Auto sliding cards */}
      <div className="w-[70vw] h-full p-6 bg-pink-300 flex flex-col">
       <div>
               <h1 className="text-3xl font-bold  text-white">Available For Buy</h1>
        <div className="overflow-hidden w-full h-[40vh]">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {houses.map((house, idx) => (
              <div key={idx} className="min-w-full h-fit px-2">
                <Card house={house} />
              </div>
            ))}
          </motion.div>
        </div>
       </div>
       <div>
              <h1 className="text-3xl font-bold  text-white">Available For Rent</h1>
        <div className="overflow-hidden w-full h-[40vh]">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {houses.map((house, idx) => (
              <div key={idx} className="min-w-full px-2">
                <Card house={house} />
              </div>
            ))}
          </motion.div>
        </div>
       </div>
      </div>

      {/* Right section: Floating boxes */}
      <div className="w-[30vw] h-full relative bg-gray-100">
        <div className="absolute top-2 left-2 w-[12vw] h-[40vh] bg-white m-4 shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold">Paying Guests</h2>
        </div>
        <div className="absolute top-2 right-2 w-[12vw] h-[40vh] bg-white m-4 shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold">Rent</h2>
        </div>
        <div className="absolute bottom-2 left-2 w-[12vw] h-[40vh] bg-white m-4 shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold">Buy</h2>
        </div>
        <div className="absolute bottom-2 right-2 w-[12vw] h-[40vh] bg-white m-4 shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold">Plots</h2>
        </div>
      </div>
    </div>
  );
}

export default Properties;

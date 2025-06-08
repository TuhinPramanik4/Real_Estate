import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Card from "./property_component/Card";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8000/api/properties") // change to your deployed URL on Vercel
      .then((res) => setProperties(res.data))
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 5); // or max count per category
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const filterByCategory = (category) =>
    properties.filter((p) => p.category.toLowerCase() === category);

  return (
    <div className="w-full h-screen bg-gray-400 flex">
      {/* Left Section */}
      <div className="w-[70vw] h-full p-6 bg-pink-300 flex flex-col gap-4 overflow-y-scroll">
        {["buy", "rent"].map((type) => (
          <div key={type}>
            <h1 className="text-3xl font-bold text-white capitalize">
              Available for {type}
            </h1>
            <div className="overflow-hidden w-full h-[40vh]">
              <motion.div
                className="flex"
                animate={{ x: `-${index * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {filterByCategory(type).map((house, idx) => (
                  <div key={idx} className="min-w-full px-2">
                    <Card house={{
                      house_image: house.imageUrl,
                      house_name: house.title,
                      house_address: house.location,
                      facility: [house.description] // simplified
                    }} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
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

import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, Wallet } from 'lucide-react'; // modern icons

const Search = () => {
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    alert(`Search:\nCity: ${city}\nType: ${type}\nBudget: ${budget}`);
  };

  return (
    <div className="w-[90vw] max-w-5xl mx-auto mt-12 bg-white shadow-2xl rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
      
      {/* City Input */}
      <div className="flex items-center gap-2 w-full md:w-1/3">
        <MapPin className="text-blue-600" />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Type Selector */}
      <div className="flex items-center gap-2 w-full md:w-1/4">
        <SearchIcon className="text-blue-600" />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">Select Type</option>
          <option value="pg">PG</option>
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
        </select>
      </div>

      {/* Budget Selector */}
      <div className="flex items-center gap-2 w-full md:w-1/4">
        <Wallet className="text-blue-600" />
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="">Select Budget</option>
          <option value="<100000">Below ₹1,00,000</option>
          <option value="<200000">Below ₹2,00,000</option>
          <option value="<300000">Below ₹3,00,000</option>
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 shadow-md transition w-full md:w-auto"
      >
        Search
      </button>
    </div>
  );
};

export default Search;

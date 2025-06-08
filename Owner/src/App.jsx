import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    title: '',
    price: '',
    location: '',
    description: '',
    category: '',
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in form) {
      data.append(key, form[key]);
    }

    try {
      const res = await axios.post('http://localhost:8000/api/properties', data);
      alert('Uploaded Successfully!');
    } catch (err) {
      alert('Upload failed');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg space-y-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">Upload Property</h2>

        <input
          type="text"
          name="title"
          placeholder="Property Title"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price in ₹"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Property Description"
          className="w-full p-3 border rounded-xl"
          rows="4"
          onChange={handleChange}
          required
        ></textarea>

        <select
          name="category"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-xl bg-white"
        >
          <option value="">Select Category</option>
          <option value="Rent">Rent</option>
          <option value="Buy">Buy</option>
          <option value="PG">PG</option>
          <option value="Plot">Plot</option>
        </select>

        <input
          type="file"
          name="image"
          accept="image/*"
          className="w-full p-3 border rounded-xl"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

function PgProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/properties") // update with your backend URL
      .then((res) => {
        const pgProperties = res.data.filter(
          (p) => p.category && p.category.toLowerCase() === "pg"
        );
        setProperties(pgProperties);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch properties");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.length === 0 && <p>No PG properties found.</p>}
      {properties.map((property) => (
        <div key={property._id} className="border rounded shadow p-4">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-semibold">{property.title}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="mt-2 font-bold text-green-700">₹{property.price}</p>
          <p className="mt-2 text-gray-700">{property.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PgProperties;

import React ,{useState} from 'react'

const Search=()=>{
  const [city,setCity]=useState('');
  const[type,setType] = useState('');
  const[budget,setBudget]=useState('');
   
  const handleSearch =()=>{
    alert(`search: \nCity: ${city}\nType: ${type}\n Budget: ${budget}`)
  }
  return(
    <div className="w-[80vw] flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-2xl shadow-md  mx-auto mt-10">
      <input type="text" value={city}
       onChange={(e)=> setCity(e.target.value)}
       placeholder='Enter city name'
       className="w-full sm:w-1/3 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
       />
       <select value={type} onChange={(e)=>setType(e.target.value)}
        className='w-full sm:w-1/4 px-4 py-2 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="">select budget</option>
                <option value="pg">PG</option>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
        </select>

      <select
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="w-full sm:w-1/4 px-4 py-2 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Budget</option>
        <option value="<100000">Below ₹1,00,000</option>
        <option value="<200000">Below ₹2,00,000</option>
        <option value="<300000">Below ₹3,00,000</option>
      </select>
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  )
};

export default Search
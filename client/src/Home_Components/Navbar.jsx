import React from 'react'

function Navbar() {
  return (
    <div className="w-full h-[12vh] text-white bg-black shadow flex items-center">
  {/* Left: Logo + Brand */}
  <div className='w-1/4 h-full  flex  justify-center items-center'>
                <div className='w-1/3 h-full flex justify-center items-center '>
                <img src="./assets/logo" alt="logo" />
                </div>
                <div className='w-2/3 text-2xl h-full flex justify-center items-center'>
                <h2>Star Properties</h2>
                </div>
        </div>

  {/* Right: Navigation */}
  <div className="w-2/4 h-full flex items-center justify-center   bg-black">
    <ul className="flex  text-lg font-medium gap-30 text-white">
      <li className="hover:text-blue-600 transition-colors cursor-pointer">Buy</li>
      <li className="hover:text-blue-600 transition-colors cursor-pointer">Rent</li>
      <li className="hover:text-blue-600 transition-colors cursor-pointer">PG</li>
      <li className="hover:text-blue-600 transition-colors cursor-pointer">Plots</li>
    </ul>
  </div>
  <div className='w-1/4 h-full  flex items-center justify-center   bg-blacl'>
   <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Sign In
        </button></div>
</div>


  )
}

export default Navbar
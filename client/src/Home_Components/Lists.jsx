import React from 'react'

function Lists() {
  return (
    <div className='w-full h-full flex justify-center items=center gap-30  '>
        <div className='w-[20vw] h-[90%] '>
             <div className='w-full h-2/3 flex justify-center items-center text-3xl '>
                   <h1>Buy</h1>
             </div>
             <div className='w-full h-1/3 bg-zinc-400 flex justify-center items-center'>
                      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition "
      >
        Search More
      </button>
             </div>
        </div>
        <div className='w-[20vw] h-[90%]'>
             <div className='w-full h-2/3 flex justify-center items-center text-3xl '>
                   <h1> PGs</h1>
             </div>
             <div className='w-full h-1/3 bg-zinc-400 flex justify-center items-center'>
 <button
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition  "
      >
        Search More
      </button>
             </div>
        </div>
        <div className='w-[20vw] h-[90%] '>
              <div className='w-full h-2/3 flex justify-center items-center text-3xl '>
                   <h1> Rent</h1>
             </div>
             <div className='w-full h-1/3 bg-zinc-400 flex justify-center items-center'>
                  <button
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition "
      >
        Search More
      </button>
             </div>
        </div>
    </div>
  )
}

export default Lists
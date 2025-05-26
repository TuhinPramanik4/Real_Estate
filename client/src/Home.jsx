import Navbar from './Home_Components/Navbar';
import Search from './Home_Components/Search';
import Lists from './Home_Components/Lists';
export default function Home() {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      
      {/* Center the Search component */}
      <div className="w-full h-[calc(100vh-12vh)] flex flex-col justify-center items-top">
          <div className='w-full h-1/2 flex justify-center items-top mt-15 bg-red-400'>
             <Search />
          </div>
          <div className='w-full h-1/2 flex justify-center items-top'>
             <Lists/>
          </div>

      </div>
    </div>
  );
}

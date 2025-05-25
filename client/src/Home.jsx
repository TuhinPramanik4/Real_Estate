import Navbar from './Home_Components/Navbar';
import Search from './Home_Components/Search';

export default function Home() {
  return (
    <div className="w-full h-screen bg-green-500">
      <Navbar />
      
      {/* Center the Search component */}
      <div className="w-full h-[calc(100vh-12vh)] flex justify-center items-top mt-15">
        <Search />
      </div>
    </div>
  );
}

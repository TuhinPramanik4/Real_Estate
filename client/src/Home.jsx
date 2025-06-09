import Navbar from './Home_Components/Navbar';
import Search from './Home_Components/Search';
import Lists from './Home_Components/Lists';
import banner from './assets/real-estate-banner.jpg'; // 👈 Make sure to add a relevant image

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div
        className="w-full h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-6"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${banner})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center drop-shadow-md">
          Find Your Perfect Home Today
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-6 drop-shadow-md">
          Whether you're buying, renting, or looking for PGs, we bring the best real estate deals right to your fingertips.
        </p>
        <div className="w-full max-w-4xl">
          <Search />
        </div>
      </div>

      {/* Property Categories Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Explore Property Categories
          </h2>
          <p className="mt-2 text-gray-600">
            Choose from various types like PGs, Rentals, and Properties for Sale.
          </p>
        </div>
        <Lists />
      </section>
    </div>
  );
}

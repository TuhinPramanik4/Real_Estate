import Navbar from './Home_Components/Navbar';
import Search from './Home_Components/Search';
import Lists from './Home_Components/Lists';
import banner from './assets/real-estate-banner.jpg'; // Make sure this image exists

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Fixed Glass Navbar */}
      <Navbar />

      {/* Wrapper below navbar with margin-top to prevent overlap */}
      <div className="mt-[10vh]">
        {/* Hero Section */}
        <div
          className="w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-4 md:px-6"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${banner})`,
          }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg mb-4">
              Find Your Perfect Home Today
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md mb-8 text-white/90">
              Whether you're buying, renting, or looking for PGs, we bring the best real estate deals right to your fingertips.
            </p>
          </div>
          <div className="w-full max-w-5xl">
            <Search />
          </div>
        </div>

        {/* Property Categories Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Explore Property Categories
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Choose from a wide range of categories like PGs, Rentals, and Properties for Sale. We simplify your search!
            </p>
          </div>
          <div className="flex justify-center px-4">
            <Lists />
          </div>
        </section>
      </div>
    </div>
  );
}

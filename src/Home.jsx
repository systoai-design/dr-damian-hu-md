import { Phone } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary-color py-4 text-white">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">Dr. Hu</h1>
          <button className="bg-transparent hover:bg-white hover:text-primary-color border-white border-2 py-2 px-4 rounded">
            Book an Appointment
          </button>
        </nav>
      </header>
      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
        <section className="hero-section bg-primary-color text-white p-4 md:p-6 lg:p-12 xl:p-24 rounded">
          <h1 className="text-3xl font-bold mb-4">Welcome to Dr. Hu's Clinic</h1>
          <p className="text-lg mb-6">Get the best medical care with our expert team.</p>
          <button className="bg-white hover:bg-gray-100 text-primary-color border-white border-2 py-2 px-4 rounded">
            Learn More
          </button>
        </section>
        <section className="services-section mt-12">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul className="flex flex-wrap justify-center">
            <li className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow p-4">
                <h3 className="text-lg font-bold mb-2">Service 1</h3>
                <p className="text-sm">Description of service 1.</p>
              </div>
            </li>
            <li className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow p-4">
                <h3 className="text-lg font-bold mb-2">Service 2</h3>
                <p className="text-sm">Description of service 2.</p>
              </div>
            </li>
            <li className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow p-4">
                <h3 className="text-lg font-bold mb-2">Service 3</h3>
                <p className="text-sm">Description of service 3.</p>
              </div>
            </li>
          </ul>
        </section>
        <section className="call-to-action-section mt-12">
          <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
          <button className="bg-primary-color hover:bg-blue-700 text-white border-primary-color border-2 py-2 px-4 rounded flex items-center">
            <Phone size={20} className="mr-2" />
            Call Us
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;
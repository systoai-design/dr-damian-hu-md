import { MapPin, Phone, Mail } from 'lucide-react';

function Contact() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-[#4567b7] mb-4">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Office Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838249142855!2d-122.08405168402935!3d37.38534807932664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad6d%3A0xb9c2144a3211b1a5!2sGoogleplex!5e0!3m2!1sen!2sus!4v1672991421111!5m2!1sen!2sus"
            width="100%"
            height="200"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-[#4567b7] focus:border-[#4567b7]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-[#4567b7] focus:border-[#4567b7]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-[#4567b7] focus:border-[#4567b7]"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#4567b7] hover:bg-[#3b5f9a] focus:ring-4 focus:ring-[#4567b7] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-lg font-bold mb-2">Online Booking System</h2>
        <div className="flex flex-wrap gap-4">
          <button
            className="text-white bg-[#4567b7] hover:bg-[#3b5f9a] focus:ring-4 focus:ring-[#4567b7] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Book Now
          </button>
          <button
            className="text-white bg-[#4567b7] hover:bg-[#3b5f9a] focus:ring-4 focus:ring-[#4567b7] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View Schedule
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-lg font-bold mb-2">Contact Information</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <MapPin size={20} className="mr-2" />
            <span>123 Main St, Anytown, USA</span>
          </div>
          <div className="flex items-center">
            <Phone size={20} className="mr-2" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center">
            <Mail size={20} className="mr-2" />
            <span>info@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
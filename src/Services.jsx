import { CheckCircle, Heart, FirstAid } from 'lucide-react';

function Services() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-[#4567b7] mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <CheckCircle size={24} className="text-[#4567b7] mb-2" />
          <h2 className="text-lg font-bold mb-2">Preventive Care</h2>
          <ul>
            <li>Regular check-ups</li>
            <li>Vaccinations</li>
            <li>Screenings</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <Heart size={24} className="text-[#4567b7] mb-2" />
          <h2 className="text-lg font-bold mb-2">Chronic Disease Management</h2>
          <ul>
            <li>Diabetes management</li>
            <li>Hypertension management</li>
            <li>Asthma management</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <FirstAid size={24} className="text-[#4567b7] mb-2" />
          <h2 className="text-lg font-bold mb-2">Acute Care</h2>
          <ul>
            <li>Emergency care</li>
            <li>Urgent care</li>
            <li>Minor surgeries</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
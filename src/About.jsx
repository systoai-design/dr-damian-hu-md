import { Briefcase, Heart, User } from 'lucide-react';

function About() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-[#4567b7] mb-4">About Dr. Hu</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-[#4567b7] mb-2">Biography</h2>
          <p className="text-lg font-sans mb-4">
            Dr. Hu is a renowned medical professional with over 10 years of experience in the field.
          </p>
          <p className="text-lg font-sans mb-4">
            She has a strong passion for delivering exceptional patient care and has a proven track record of success.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-[#4567b7] mb-2">Medical Background</h2>
          <p className="text-lg font-sans mb-4">
            Dr. Hu holds a medical degree from a prestigious university and has completed extensive training in her field.
          </p>
          <p className="text-lg font-sans mb-4">
            She is certified by the relevant medical boards and is committed to staying up-to-date with the latest medical advancements.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#4567b7] mb-4">Patient Testimonials</h2>
      <div className="flex flex-col gap-4 mb-8">
        <div className="bg-white p-4 shadow-md rounded-md">
          <div className="flex items-center gap-2 mb-2">
            <User size={24} className="text-[#4567b7]" />
            <p className="text-lg font-sans">John Doe</p>
          </div>
          <p className="text-lg font-sans">
            Dr. Hu is an exceptional doctor who truly cares about her patients. I highly recommend her!
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <div className="flex items-center gap-2 mb-2">
            <Heart size={24} className="text-[#4567b7]" />
            <p className="text-lg font-sans">Jane Smith</p>
          </div>
          <p className="text-lg font-sans">
            Dr. Hu is a compassionate and knowledgeable doctor who always puts her patients first.
          </p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase size={24} className="text-[#4567b7]" />
            <p className="text-lg font-sans">Bob Johnson</p>
          </div>
          <p className="text-lg font-sans">
            Dr. Hu is a highly skilled doctor who always provides excellent care and attention to her patients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
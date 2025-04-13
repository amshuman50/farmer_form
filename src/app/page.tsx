import Navbar from '../components/Navbar';
import { InputField, InputFieldRequired } from '../components/input_field';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="relative w-full h-screen mb-8">
        <video
          className="w-full h-full object-cover rounded-lg shadow-lg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <main className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold text-green-700 mb-6 pb-2 border-b border-gray-200">Farmer Personal Information</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputFieldRequired type="text" id="name" placeholder="Enter your First Name" label="First Name" />
            <InputField type="text" id="name" placeholder="Enter your Middle Name" label="Middle Name" />
            <InputFieldRequired type="text" id="name" placeholder="Enter your Last Name" label="Last Name" />
            <InputFieldRequired type="tel" id="phone" placeholder="Enter your Phone Number" label="Phone Number" />
            {/* <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium text-sm mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-300 p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium text-sm mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-md border border-gray-300 p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your phone number"
              />
            </div> */}

            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-medium text-sm mb-1">
                Gender
              </label>
              <div className="relative">
                <select
                  id="gender"
                  className="w-full rounded-md border border-gray-300 p-2.5 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-medium text-sm mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                className="w-full rounded-md border border-gray-300 p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your age"
                min="18"
                max="120"
              />
            </div>
            <InputFieldRequired type="email" id="email" placeholder="Enter your Email" label="Email" />
            <InputField type="email" id="email" placeholder="Enter your ward email" label="Secondary Email" />
            <InputFieldRequired type="text" id="name" placeholder="Eg : Rice" label="Product Name" />
            <InputFieldRequired type="text" id="name" placeholder="Eg : Marshi" label="Product Type" />


          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium text-sm mb-1">
              Write your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-md border border-gray-300 p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your message here..."
            />
          </div>


          <div className="mt-8">
            <button className="bg-green-600 text-white py-2.5 px-6 rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Continue to Next Section
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

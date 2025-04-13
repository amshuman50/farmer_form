'use client';

import { useState } from 'react';

const Navbar = () => {
  const [selectedProvince, setSelectedProvince] = useState('Bagmati');
  const [district, setDistrict] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [ward, setWard] = useState('');

  // Province options
  const provinces = [
    'Koshi',
    'Madhesh',
    'Bagmati',
    'Gandaki',
    'Lumbini',
    'Karnali',
    'Sudur-Paschim'
  ];

  // Generate ward numbers from 1 to 35
  const wardNumbers = Array.from({ length: 35 }, (_, i) => (i + 1).toString());

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Farmer Data Collection</h1>
          <div className="hidden md:block">
            <button className="bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition-colors">
              Help
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-green-700 font-semibold text-lg mb-4 border-b border-green-100 pb-2">Location Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Province Dropdown */}
            <div className="w-full">
              <label htmlFor="province" className="block text-gray-700 font-medium text-sm mb-1">
                Province <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="province"
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2.5 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white"
                >
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* District Input */}
            <div className="w-full">
              <label htmlFor="district" className="block text-gray-700 font-medium text-sm mb-1">
                District <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="Enter district"
                className="w-full rounded-md border border-gray-300 p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Municipality Input */}
            <div className="w-full">
              <label htmlFor="municipality" className="block text-gray-700 font-medium text-sm mb-1">
                Municipality <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="municipality"
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                placeholder="Enter municipality"
                className="w-full rounded-md border border-gray-300 p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Ward Dropdown */}
            <div className="w-full">
              <label htmlFor="ward" className="block text-gray-700 font-medium text-sm mb-1">
                Ward <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="ward"
                  value={ward}
                  onChange={(e) => setWard(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2.5 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none bg-white"
                >
                  <option value="">Select Ward</option>
                  {wardNumbers.map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 
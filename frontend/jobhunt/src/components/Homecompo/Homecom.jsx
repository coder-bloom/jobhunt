import React from 'react';
import { HiComputerDesktop } from 'react-icons/hi2';
import { BsGraphUpArrow } from 'react-icons/bs';
import { SiGoogleanalytics } from 'react-icons/si';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { GrRestroomMen } from 'react-icons/gr';
import { LuBookOpenText } from 'react-icons/lu';
import { MdMessage } from 'react-icons/md';
import Categories from './Categories';

function Homecom() {
  return (
    <div className="my-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">
            FIND YOUR DREAM JOB
          </h1>
          <div className="mt-7 w-full">
            <form className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                className="flex-1 bg-gray-200 rounded px-3 py-2 h-12"
                type="text"
                placeholder="Job title or Keyword"
              />
              <input
                className="flex-1 bg-gray-200 rounded px-3 py-2 h-12"
                type="text"
                placeholder="Location"
              />
              <button className="bg-[#1A936F] text-white rounded px-6 py-2 hover:scale-105 hover:bg-[#34A88A]">
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-md md:max-w-lg"
            src="bg.webp"
            alt="Job Search"
          />
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories mt-16 px-6 md:px-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-10">
          Explore Top Categories
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-xl font-bold">
          <Categories icon={<HiComputerDesktop size={50} />} text="IT" />
          <Categories icon={<BsGraphUpArrow size={50} />} text="Sales" />
          <Categories icon={<SiGoogleanalytics size={50} />} text="Marketing" />
          <Categories icon={<FaHandHoldingMedical size={50} />} text="Medical" />
          <Categories icon={<IoSettings size={50} />} text="Engineering" />
          <Categories icon={<GrRestroomMen size={50} />} text="Human Resource" />
          <Categories icon={<LuBookOpenText size={50} />} text="Education" />
          <Categories icon={<MdMessage size={50} />} text="Customer Service" />
        </div>
      </div>
    </div>
  );
}

export default Homecom;

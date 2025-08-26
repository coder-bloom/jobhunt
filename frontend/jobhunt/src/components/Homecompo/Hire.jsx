function Hire() {
  return (
    <div className="flex items-center justify-center px-4 py-10">
      <div className="flex flex-col md:flex-row items-center bg-emerald-50 rounded-2xl shadow-md w-full max-w-6xl overflow-hidden">
        
        {/* Image */}
        <div className="flex justify-center w-full md:w-1/2 p-4">
          <img 
            src="https://storage.googleapis.com/mumbai_apnatime_prod/apna-home/two-people.png" 
            alt="Hiring illustration" 
            className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 p-6 md:p-10">
          <h2 className="text-lg text-emerald-800 font-semibold">
            JobHunt for EMPLOYERS
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-bold text-emerald-950">
              Want to hire?
            </h1>
            <p className="font-medium text-gray-700">
              Find the best candidate from 5 crore+ active job seekers!
            </p>

            <button className="bg-white h-12 w-40 border-2 border-emerald-800 text-emerald-800 font-bold rounded-lg hover:bg-emerald-800 hover:scale-105 transition-all duration-200 hover:text-white">
              Post Job
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hire

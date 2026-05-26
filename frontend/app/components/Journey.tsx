export default function Journey() {
  return (
    <section className="py-20 px-10 md:px-32 bg-gray-50 text-gray-900 w-full">
      <div className="text-center mb-16">
        <span className="text-gray-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
          — Education & Work
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          My Academic and <br />
          <span className="text-blue-600">Professional Journey</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl mx-auto">
        
        {/* Left Column: Education */}
        <div className="md:w-1/2 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-2xl shadow-sm">🎓</div>
             <h3 className="text-2xl font-bold">Education</h3>
          </div>
          
          <div className="flex flex-col gap-8 relative border-l-2 border-gray-100 ml-6 pl-8">
            
            {/* MBA in HRM */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-yellow-400 rounded-full border-4 border-white shadow"></div>
              <p className="text-sm font-bold text-gray-400 mb-1">Master's Degree</p>
              <h4 className="text-xl font-bold text-gray-900 mb-1">MBA in HRM</h4>
              <p className="text-gray-500 text-sm">Human Resource Management</p>
            </div>

            {/* Henry Harvin Education */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></div>
              <p className="text-sm font-bold text-gray-400 mb-1">Henry Harvin Education</p>
              <h4 className="text-xl font-bold text-gray-900 mb-1">Certified HR Generalist</h4>
              <p className="text-gray-500 text-sm">NSDC Certified Professional</p>
            </div>

            {/* B.Tech */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></div>
              <p className="text-sm font-bold text-gray-400 mb-1">KIET Group of Institutions</p>
              <h4 className="text-xl font-bold text-gray-900 mb-1">B.Tech - ECE</h4>
              <p className="text-gray-500 text-sm">JNTU Kakinada</p>
            </div>

          </div>
        </div>

        {/* Right Column: Work Experience */}
        <div className="md:w-1/2 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl shadow-sm">💼</div>
             <h3 className="text-2xl font-bold">Work Experience</h3>
          </div>
          
          <div className="flex flex-col gap-8 relative border-l-2 border-gray-100 ml-6 pl-8">
            
            {/* AVA Technology */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow"></div>
              <p className="text-sm font-bold text-gray-400 mb-1">AVA Technology</p>
              <h4 className="text-xl font-bold text-gray-900 mb-1">HR Executive Trainee</h4>
              <p className="text-gray-500 text-sm">Talent Acquisition & HR Operations</p>
            </div>

            {/* Biznexus */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></div>
              <p className="text-sm font-bold text-gray-400 mb-1">Biznexus</p>
              <h4 className="text-xl font-bold text-gray-900 mb-1">HR Executive</h4>
              <p className="text-gray-500 text-sm">Contributing to ~8 months of core HR experience</p>
            </div>

            {/* Henry Harvin Internship */}
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-gray-300 rounded-full border-4 border-white"></div>
              <p className="text-sm font-bold text-gray-400 mb-1">Henry Harvin Education</p>
              <h4 className="text-xl font-bold text-gray-900 mb-1">Recruitment Specialist Intern</h4>
              <p className="text-gray-500 text-sm">End-to-End Recruitment & ATS Management</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
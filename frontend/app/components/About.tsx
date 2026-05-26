export default function About() {
  return (
    <section className="bg-[#1a4a38] text-white py-20 px-10 md:px-32 w-full flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left Side: Profile Image / Graphic */}
      <div className="md:w-[40%] flex justify-center relative">
         <div className="w-72 h-72 md:w-[400px] md:h-[400px] bg-emerald-900 rounded-full border-8 border-emerald-700/50 flex items-center justify-center overflow-hidden shadow-2xl relative z-10">
            <span className="text-emerald-400 font-medium">Second Photo Here</span>
         </div>
         {/* Background glow decoration */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-600/20 rounded-full blur-3xl -z-10"></div>
      </div>

      {/* Right Side: Text & Details */}
      <div className="md:w-[60%] flex flex-col gap-6">
        <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">
          — About Me
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">
          Who is TNS Pravallika?
        </h2>
        <p className="text-emerald-100/80 leading-relaxed text-lg max-w-2xl">
          I am a proactive and people-first HR professional with a B.Tech in Electronics & Communication Engineering and a Certified HR Generalist credential from Henry Harvin Education. I specialize in end-to-end recruitment, HR operations, and building inclusive workplace cultures.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-8 mt-4 border-b border-emerald-700 pb-8 mb-4">
          <div>
            <h4 className="text-3xl font-bold text-yellow-400">3+</h4>
            <p className="text-sm text-emerald-200 mt-1">HR Roles</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-yellow-400">NSDC</h4>
            <p className="text-sm text-emerald-200 mt-1">Certified</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-yellow-400">100%</h4>
            <p className="text-sm text-emerald-200 mt-1">People-First Focus</p>
          </div>
        </div>

        {/* Download CV Button & Signature */}
        <div className="flex items-center gap-8 mt-2">
          <a href="#" className="bg-yellow-400 text-black px-8 py-3.5 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg flex items-center gap-2">
            Download CV 
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </a>
          {/* A styled signature text */}
          <div className="font-serif italic text-3xl text-emerald-300 opacity-80">
            TNS Pravallika
          </div>
        </div>
      </div>
    </section>
  );
}
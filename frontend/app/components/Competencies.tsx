export default function Competencies() {
  return (
    <section className="py-20 px-10 md:px-32 bg-gray-50 text-gray-900 w-full relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <span className="text-gray-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
            — Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Skills I <span className="text-blue-600">Bring</span>
          </h2>
        </div>
        <a href="#" className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          View All Skills <span className="bg-yellow-400 text-black rounded-full px-2 py-0.5">→</span>
        </a>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Talent Acquisition */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
            🤝
          </div>
          <h3 className="text-xl font-bold mb-4">Talent Acquisition & Planning</h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            End-to-end recruitment, strategic workforce planning, and managing ATS dashboards to build high-performing teams[cite: 25, 35, 36].
          </p>
          <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
            Learn more →
          </a>
        </div>

        {/* Card 2: HR Operations & Analytics */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
            📊
          </div>
          <h3 className="text-xl font-bold mb-4">HR Analytics & Operations</h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            Data-driven HR strategies, statutory compliance, payroll coordination, and seamless policy implementation[cite: 16, 19, 21, 26, 31].
          </p>
          <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
            Learn more →
          </a>
        </div>

        {/* Card 3: Employee Engagement & L&D */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
            🌟
          </div>
          <h3 className="text-xl font-bold mb-4">Engagement & L&D</h3>
          <p className="text-gray-500 leading-relaxed mb-6">
            Fostering inclusive cultures, managing conflict resolution, and coordinating Learning & Development initiatives[cite: 19, 25, 26, 32].
          </p>
          <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
            Learn more →
          </a>
        </div>

      </div>
    </section>
  );
}
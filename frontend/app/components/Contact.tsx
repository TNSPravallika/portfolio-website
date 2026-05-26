export default function Contact() {
  return (
    <section className="py-20 px-10 md:px-32 bg-white text-gray-900 w-full flex flex-col md:flex-row gap-16">
      
      {/* Left Side: Contact Info */}
      <div className="md:w-[40%] flex flex-col gap-6">
        <span className="text-gray-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
          — Contact Us
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Let's Talk For Your <br/>
          <span className="text-blue-600">Next Projects</span>
        </h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          Feel free to reach out for collaborations, HR consulting, or talent acquisition opportunities. I am always open to discussing new projects!
        </p>
        
        <div className="flex flex-col gap-6">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 text-blue-600 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100">
              📞
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Phone*</p>
              <p className="font-bold text-gray-900">+91 76720 78781</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 text-blue-600 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100">
              ✉️
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Email*</p>
              <p className="font-bold text-gray-900">navyapravallika14@gmail.com</p>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-50 text-blue-600 rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100">
              📍
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">Location*</p>
              <p className="font-bold text-gray-900">India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="md:w-[60%]">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Your Name *</label>
            <input type="text" placeholder="Ex. John Doe" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Email *</label>
            <input type="email" placeholder="example@gmail.com" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Phone *</label>
            <input type="tel" placeholder="Enter Phone Number" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">I'm Interested In *</label>
            <select className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition text-gray-500">
              <option>Select Category</option>
              <option>Talent Acquisition</option>
              <option>HR Operations</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-900">Your Message *</label>
            <textarea rows={4} placeholder="Enter here..." className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"></textarea>
          </div>
          <div className="md:col-span-2 mt-2">
            <button type="button" className="bg-yellow-400 text-black px-8 py-3.5 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg w-max">
              Submit →
            </button>
          </div>
        </form>
      </div>

    </section>
  );
}
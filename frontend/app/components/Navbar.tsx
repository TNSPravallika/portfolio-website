export default function Navbar() {
  return (
    <nav className="flex w-full justify-between items-center px-10 md:px-32 py-6 bg-white text-gray-900 shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wider">
        TNS<span className="text-blue-600 text-3xl">.</span>
      </div>
      
      {/* Menu Links */}
      <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
        <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
        <a href="#" className="hover:text-blue-600 transition-colors">About</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Skills</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Journey</a>
      </div>
      
      {/* Contact Button */}
      <a href="mailto:navyapravallika14@gmail.com" className="hidden md:block bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors shadow-lg">
        Contact Me
      </a>
    </nav>
  );
}
// Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-24 px-6 text-white min-h-screen bg-[#0b1120]"
    >
      <h2 className="text-4xl font-bold mb-10 text-blue-400 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Banking System</h3>
          <p>Built with Spring Boot and REST APIs.</p>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Pet Care System</h3>
          <p>Java, Maven, Spring-based backend system.</p>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Crypto Tracker</h3>
          <p>Python-based real-time price monitoring app.</p>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Cancer Detection System</h3>
          <p>Built with SSL, CNN & Flask backend.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;


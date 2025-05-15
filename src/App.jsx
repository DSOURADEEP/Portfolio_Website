import React, { useState } from "react";

const bgProjects = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80"; // coding
const bgExperience = "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1470&q=80"; // office
const bgContact = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80"; // writing letter or desk

function Navbar() {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center space-x-10">
        <a href="#hero" className="text-gray-300 hover:text-amber-400 font-semibold">Home</a>
        <a href="#projects" className="text-gray-300 hover:text-amber-400 font-semibold">Projects</a>
        <a href="#experience" className="text-gray-300 hover:text-amber-400 font-semibold">Experience</a>
        <a href="#contact" className="text-gray-300 hover:text-amber-400 font-semibold">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 bg-gray-900 text-gray-100">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Hi, I'm Souradeep Das</h1>
      <p className="max-w-xl text-lg md:text-xl text-gray-300">A passionate full-stack developer skilled in Java, Python, and React. Building modern, scalable web apps and AI projects.</p>
    </section>
  );
}

function Projects() {
  const projects = [
    { title: "Banking System", desc: "Built with Spring Boot and REST APIs." },
    { title: "Pet Care System", desc: "Java, Maven, Spring-based backend system." },
    { title: "Crypto Tracker", desc: "Python-based real-time price monitoring app." },
    { title: "Cancer Detection System", desc: "Built with SSL, CNN & Flask backend." },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 max-w-7xl mx-auto rounded-xl shadow-lg mb-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgProjects})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-85 rounded-xl"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ title, desc }) => (
            <div key={title} className="bg-gray-800 bg-opacity-80 rounded-lg p-6 shadow-md hover:shadow-amber-400 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-amber-300 mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    { role: "Software Engineer", company: "Accenture", duration: "2025 - Present", desc: "Working on cloud solutions and Java full-stack projects." },
    { role: "Intern", company: "Blackcoffer", duration: "2024 - 2025", desc: "Data science and analytics projects." },
    { role: "Student", company: "AICTE", duration: "2021 - 2024", desc: "Bachelor's in Computer Science & Engineering." },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-6 max-w-7xl mx-auto rounded-xl shadow-lg mb-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgExperience})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-85 rounded-xl"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map(({ role, company, duration, desc }) => (
            <div key={role} className="bg-gray-800 bg-opacity-80 rounded-lg p-6 shadow-md hover:shadow-amber-400 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-amber-300">{role}</h3>
              <p className="text-gray-300 italic">{company} — {duration}</p>
              <p className="text-gray-300 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [message, setMessage] = useState("");
  const mailtoLink = `mailto:sdeepdas2114@gmail.com?subject=Portfolio%20Contact&body=${encodeURIComponent(message)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return alert("Please enter a message");
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 max-w-3xl mx-auto text-center rounded-xl shadow-lg mb-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgContact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-85 rounded-xl"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-6">Feel free to reach out by sending a message below:</p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <textarea
            rows={6}
            className="resize-none p-4 rounded-md bg-gray-700 bg-opacity-80 text-gray-100 focus:outline-amber-400 focus:ring-2 focus:ring-amber-400"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center text-gray-500">
      <p>© 2025 Souradeep Das. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;



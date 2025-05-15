import React from "react";

const Experience = () => (
  <section id="experience" className="py-16 px-8 text-center bg-white">
    <h3 className="text-3xl font-bold mb-8 text-green-600 animate-fade-down">Experience</h3>
    <div className="space-y-6 max-w-2xl mx-auto">
      {[
        { role: "Full Stack Developer Intern", company: "Blackcoffer", time: "3 months" },
        { role: "Packaged App Dev Associate", company: "Accenture", time: "4 months(Currently Ongoing)" },
        { role: "Cloud Engineer Intern", company: "AICTE", time: "4 months" }
      ].map((exp, idx) => (
        <div key={idx} className="border p-4 rounded-lg shadow-md bg-gray-50">
          <h4 className="text-xl font-semibold">{exp.role} - {exp.company}</h4>
          <p className="text-gray-600">{exp.time}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;


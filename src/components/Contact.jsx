import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const SERVICE_ID = "service_onzfmti";      // 🔁 replace with your actual ID
  const TEMPLATE_ID = "template_zaqoay7";    // 🔁 replace with your actual ID
  const PUBLIC_KEY = "nroS8LZPoIV2Am58h";      // 🔁 replace with your actual key

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", title: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Please try again.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 max-w-3xl mx-auto text-center rounded-xl shadow-lg mb-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80 rounded-xl"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-left">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Subject"
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="resize-none p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <button
            type="submit"
            disabled={sending}
            className={`${
              sending ? "bg-gray-500 cursor-not-allowed" : "bg-amber-400 hover:bg-amber-500"
            } text-black font-semibold py-3 px-6 rounded-md transition-colors duration-300`}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && <p className="mt-4 text-green-400">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;

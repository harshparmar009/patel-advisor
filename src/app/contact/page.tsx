"use client"

import React, { useState } from "react";
import Footer from "@/components/pages/Footer";
// import Navbar from "@/components/Navbar";
import Navbar from "@/components/pages/Navbar";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div>
        <Navbar/>
            <div className="min-h-screen bg-gray-100 py-12 mt-16 px-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                <h1 className="text-4xl font-bold mb-4">Have Questions? Feel Free to Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    />
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Example@domain.com"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    />
                    <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your number"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    />
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg h-32"
                    />
                    <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition"
                    >
                    Send Message
                    </button>
                </form>
                {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
                </div>

                <div className="bg-green-500 text-white p-8 rounded-lg space-y-6">
                <h2 className="text-2xl font-semibold">Contact Information</h2>
                <p>📞 Phone No: IN (+91 9680719296)</p>
                <p>🏠 Web: www.Pateladvisors.in</p>
                <p>📧 Mail: support@Pateladvisors.in</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-200">🌐 Facebook</a>
                    <a href="#" className="hover:text-gray-200">🐦 Twitter</a>
                    <a href="#" className="hover:text-gray-200">📺 YouTube</a>
                    <a href="#" className="hover:text-gray-200">💼 LinkedIn</a>
                </div>
                </div>
            </div>
            </div>
            <Footer/>
    </div>
  );
}

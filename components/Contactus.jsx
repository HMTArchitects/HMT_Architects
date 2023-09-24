'use client'
import React, { useState } from "react";


export default function Contactus() {
  const [query, setQuery] = useState({
    name: "",
    email: ""
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/e0720344-51f3-4f50-acef-98c49ac61dae", {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: "", phone: "", message: "" }));
  };
  return (
    <div className="flex mx-auto">
    
    <div className="m-8 border-2 p-8  shadow-lg border-white rounded-md mx-auto ">
      <h1 className="text-center font-semibold text-3xl mt-2">Get In Touch</h1>
      <form className="m-4" onSubmit={formSubmit}>
        <div className="mb-4">
        <label>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your Name"
            className="form-control border-2  p-2 w-full"
            value={query.name}
            onChange={handleParam()}
          />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="form-control  border-2  p-2 w-full"
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div className="mb-4">
          <label>Phone</label>
          <input
            type="phone"
            name="phone"
            required
            placeholder="Phone number"
            className="form-control  border-2  p-2 w-full"
            value={query.phone}
            onChange={handleParam()}
          />
        </div>
        <div className="mb-4">
          <label>Message</label>
          <input
            type="text"
            name="message"
            required
            placeholder="Message"
            className="form-control   border-2  p-2 w-full"
            value={query.message}
            onChange={handleParam()}
          />
        </div>
        <button className="bg-[#0e3548] w-full p-2 text-white rounded-md " type="submit">Send</button>
      </form>
    </div>
    
    </div>
  );
}








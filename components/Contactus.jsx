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
    <div className="flex flex-row">
    
    <div className="flex basis-1/2">
        <h1>hi</h1>

    </div>
    <div className="App">
      <h1>Get in Touch</h1>
      <form className="m-4" onSubmit={formSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="form-control"
            value={query.name}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="form-control"
            value={query.email}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="phone"
            name="phone"
            required
            placeholder="Phone number"
            className="form-control"
            value={query.phone}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            name="message"
            required
            placeholder="Message"
            className="form-control"
            value={query.message}
            onChange={handleParam()}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    
    </div>
  );
}
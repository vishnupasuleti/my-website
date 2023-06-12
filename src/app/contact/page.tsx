"use client";
import { useRouter } from "next/router";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const body = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setEmail("");
        setMessage("");
      });

  };

  return (
    <div className="w-full">
      <h1 className="my-16 text-3xl font-bold text-center uppercase">
        Contact Me
      </h1>
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="Your Message"
              onChange={(event) => setMessage(event.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              rows={5}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!name || !email || !message}
              className="px-4 py-2 font-bold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

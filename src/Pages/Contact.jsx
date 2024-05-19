import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <div className="flex justify-center">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-200 p-2 border rounded-lg" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-200 p-2 border rounded-lg" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" name="message" className="w-full p-2 border rounded-lg" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

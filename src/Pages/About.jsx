import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce fermentum augue ac metus consectetur, eget lobortis libero finibus. Vestibulum dapibus, eros sed pulvinar commodo, lectus justo lobortis nisl, vitae fringilla quam odio id eros. Donec aliquet vitae erat vel mattis. Proin et erat et est rhoncus suscipit.</p>
        <p className="text-lg mb-4">Here are some key points about our dress website:</p>
        <ul className="text-left">
          <li className="mb-2">We offer a wide range of dresses for all occasions.</li>
          <li className="mb-2">Our dresses are made from high-quality materials.</li>
          <li className="mb-2">We provide fast and reliable shipping.</li>
          <li className="mb-2">Our customer service team is available to assist you with any inquiries.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;

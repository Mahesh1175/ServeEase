import React from 'react';


const services = [
  {
    name: 'Home Cleaning',
    description: 'Professional cleaning services for homes and offices.',
    image: './images/img-a.jpg' 
  },
  {
    name: 'Plumbing',
    description: 'Reliable plumbing solutions for your household.',
    image: './images/img-b.jpg' 
  },
  {
    name: 'Electrical',
    description: 'Licensed electricians for all types of electrical work.',
    image: './images/img-c.jpg' 
  }
];

const Services = () => {
  return (
    <section className="py-20 mx-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
             
              <img
                src={service.image}
                alt={service.name}
                className="w-44 h-44 object-cover rounded-full mb-4 "
              />
              <h3 className="text-2xl font-semibold mb-4 text-center">{service.name}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

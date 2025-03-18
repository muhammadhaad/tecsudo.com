import React from 'react';
import { technologies } from '../config/technology';

export default function TechnologiesSection() {


  return (
    <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#232B32]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-3xl sm:text-4xl font-bold">Our Technologies</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4 text-center">
          We leverage a comprehensive stack of technologies to deliver innovative solutions across web, mobile, and business intelligence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {technologies.map((tech, index) => (
            <div key={index} className="card p-6">
              <div className="h-16 w-16 rounded-full bg-[#00E2D6]/20 flex items-center justify-center mb-6">
                <div dangerouslySetInnerHTML={{ __html: tech.icon.svg }} />
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-gray-300 mb-4">{tech.description}</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                {tech.techs.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00E2D6] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#2d3741] text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Technology Approach</h3>
          <p className="mb-4">
            At Tecsudo, we take a strategic approach to technology selection, choosing the right tools for each unique project. 
            We stay at the forefront of technological advancements while ensuring our solutions are stable, scalable, and maintainable.
          </p>
          <p>
            Our expertise spans across web, mobile, and data analytics, allowing us to deliver comprehensive solutions 
            that address all aspects of your digital transformation journey.
          </p>
        </div>
      </div>
    </section>
  );
} 
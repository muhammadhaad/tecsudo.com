import React from 'react';

export default function TechnologiesSection() {
  const technologies = [
    {
      title: 'Web Development',
      description: 'We build responsive, modern web applications with cutting-edge technologies.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00E2D6" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express']
    },
    {
      title: 'Mobile Development',
      description: 'We create native and cross-platform mobile applications for iOS and Android.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00E2D6" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store Optimization']
    },
    {
      title: 'Business Intelligence',
      description: 'We transform your data into actionable insights with advanced analytics solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00E2D6" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      techs: ['Power BI', 'Tableau', 'Python', 'R', 'Machine Learning', 'Predictive Analytics']
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'We deploy and manage scalable, secure cloud infrastructure for your applications.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00E2D6" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      techs: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      title: 'Database Solutions',
      description: 'We implement efficient, secure database systems tailored to your specific needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00E2D6" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'GraphQL']
    },
    {
      title: 'Emerging Technologies',
      description: 'We explore and implement cutting-edge technologies to keep your business ahead.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00E2D6" className="h-8 w-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      techs: ['Blockchain', 'AI/ML', 'IoT', 'AR/VR', 'Voice Interfaces', 'Progressive Web Apps']
    }
  ];

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
                {tech.icon}
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
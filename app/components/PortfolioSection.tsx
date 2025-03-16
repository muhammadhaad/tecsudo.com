import React from 'react';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration and inventory management.',
      image: '/portfolio/project1.jpg',
      features: ['Secure payment processing', 'Inventory management', 'Customer accounts']
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Analytics dashboard for healthcare providers to monitor patient data.',
      image: '/portfolio/project2.jpg',
      features: ['Real-time analytics', 'HIPAA compliant', 'Interactive reports']
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure banking application with biometric authentication and real-time transactions.',
      image: '/portfolio/project3.jpg',
      features: ['Biometric security', 'Real-time notifications', 'Transaction history']
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management system with virtual tours and agent portal.',
      image: '/portfolio/project4.jpg',
      features: ['Virtual property tours', 'Agent dashboard', 'Listing management']
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform for course creation, student management, and progress tracking.',
      image: '/portfolio/project5.jpg',
      features: ['Course creation tools', 'Student progress tracking', 'Interactive assessments']
    },
    {
      title: 'Supply Chain Solution',
      description: 'Blockchain-based supply chain tracking and management system.',
      image: '/portfolio/project6.jpg',
      features: ['Blockchain verification', 'Real-time tracking', 'Supplier management']
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#232B32]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-3xl sm:text-4xl font-bold">Our Portfolio</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4 text-center">
          Explore our recent projects and see how we&apos;ve helped businesses transform their digital presence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="card p-6">
              <div className="h-16 w-16 rounded-full bg-[#00E2D6]/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00E2D6" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <ul className="text-gray-300 space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00E2D6] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary px-8 py-3 rounded-full font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
} 
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../config/portfolio';
import { motion } from 'framer-motion';

export default function PortfolioSection() {
  // Filter to only show featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#232B32]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading text-3xl sm:text-4xl font-bold">Our Portfolio</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4 text-center mb-12">
            Explore our recent projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card p-6 rounded-lg overflow-hidden bg-[#2d3741] hover:bg-[#343e48] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 relative h-48 w-full rounded-lg overflow-hidden">
                {project.images?.thumbnail ? (
                  <Image
                    src={project.images.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="h-full w-full bg-[#00E2D6]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00E2D6" className="h-16 w-16">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2 text-[#00E2D6]">Key Features</h4>
                <ul className="text-gray-300 space-y-2">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00E2D6] mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-[#00E2D6] text-sm">+ {project.features.length - 3} more features</li>
                  )}
                </ul>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-[#1e2730] text-[#00E2D6] px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies && project.technologies.length > 3 && (
                    <span className="text-xs bg-[#1e2730] text-gray-400 px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  href={`/portfolio/${project.slug}`}
                  className="text-[#00E2D6] hover:text-white flex items-center transition-colors"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-primary px-8 py-3 rounded-full font-medium inline-block bg-[#00E2D6] text-[#1e2730] hover:bg-[#00c2b8] transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
} 
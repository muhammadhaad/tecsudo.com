"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from '../../config/portfolio';

// Define a type for the project
type Project = {
  id: string | number;
  title: string;
  slug: string;
  description: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  clientName?: string;
  clientIndustry?: string;
  projectYear?: string;
  projectDuration?: string;
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  images?: {
    thumbnail?: string;
    gallery?: string[];
  };
};

export default function PortfolioPageClient({ project }: { project: Project }) {
  return (
    <main className="bg-[#1a232c] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          {/* TODO: Add the gallery images   */}
          {/* {project.images?.gallery?.[0] ? (
            <Image
              src={project.images.gallery[0]}
              alt={project.title}
              fill
              className="object-cover brightness-50"
              priority
            />
          ) : (
            <div className="w-full h-full bg-[#232B32]"></div>
          )} */}

          {project.images?.thumbnail ? (
            <Image
              src={project.images.thumbnail}
              alt={project.title}
              fill
              className="object-cover brightness-50"
              priority
            />
          ) : (
            <div className="w-full h-full bg-[#232B32]"></div>
          )}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#portfolio"
              className="inline-flex items-center text-[#00E2D6] mb-6 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Portfolio
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.technologies?.map((tech, index) => (
                <span key={index} className="bg-[#00E2D6]/20 text-[#00E2D6] px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-xl text-gray-300 max-w-3xl">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#232B32]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>

              {project.challenge && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#00E2D6]">The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#00E2D6]">Our Solution</h3>
                  <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              )}

              {project.results && project.results.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#00E2D6]">Results</h3>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00E2D6] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-[#2d3741] rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-700">Project Details</h3>

                <div className="space-y-4">
                  {project.clientName && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Client</h4>
                      <p className="text-white">{project.clientName}</p>
                    </div>
                  )}

                  {project.clientIndustry && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Industry</h4>
                      <p className="text-white">{project.clientIndustry}</p>
                    </div>
                  )}

                  {project.projectYear && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Year</h4>
                      <p className="text-white">{project.projectYear}</p>
                    </div>
                  )}

                  {project.projectDuration && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Duration</h4>
                      <p className="text-white">{project.projectDuration}</p>
                    </div>
                  )}

                  {project.technologies && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-[#1e2730] text-[#00E2D6] px-2 py-1 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {project.testimonial && (
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <h4 className="text-lg font-semibold mb-4 text-[#00E2D6]">Client Testimonial</h4>
                    <blockquote className="italic text-gray-300 mb-4">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-[#00E2D6]/20 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00E2D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">{project.testimonial.author}</p>
                        <p className="text-sm text-gray-400">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <Link
                    href="/#contact"
                    className="block w-full py-3 px-4 bg-[#00E2D6] text-[#1e2730] font-medium rounded-lg text-center hover:bg-[#00c2b8] transition-colors"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a232c]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Related Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  className="bg-[#232B32] rounded-lg overflow-hidden hover:bg-[#2d3741] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="relative h-48">
                    {relatedProject.images?.thumbnail ? (
                      <Image
                        src={relatedProject.images.thumbnail}
                        alt={relatedProject.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-[#2d3741] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#00E2D6" className="h-12 w-12">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{relatedProject.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{relatedProject.description}</p>

                    <Link
                      href={`/portfolio/${relatedProject.slug}`}
                      className="text-[#00E2D6] hover:text-white flex items-center text-sm transition-colors"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images?.gallery && project.images.gallery.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-[#00E2D6]">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
} 
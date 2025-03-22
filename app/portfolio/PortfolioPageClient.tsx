"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '../config/portfolio';
import { FiArrowLeft, FiFilter } from 'react-icons/fi';

export default function PortfolioPageClient() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Extract unique categories from projects
    const categories = Array.from(
        new Set(projects.flatMap(project => project.categories || []))
    );

    // Filter projects based on selected category and search query
    const filteredProjects = projects.filter(project => {
        const matchesCategory = !selectedCategory ||
            (project.categories && project.categories.includes(selectedCategory));

        const matchesSearch = !searchQuery ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-[#232B32] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/#portfolio"
                        className="inline-flex items-center text-[#00E2D6] hover:text-white mb-6 transition-colors"
                    >
                        <FiArrowLeft className="mr-2" />
                        Back to Home
                    </Link>

                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Portfolio
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-300 max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Explore our complete collection of projects and see how we&apos;ve helped businesses achieve their digital goals.
                    </motion.p>
                </div>

                {/* Filters */}
                <motion.div
                    className="mb-12 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex flex-wrap gap-2 items-center">
                        <div className="flex items-center mr-2">
                            <FiFilter className="text-[#00E2D6] mr-2" />
                            <span className="text-gray-300">Filter:</span>
                        </div>

                        <button
                            className={`px-3 py-1 rounded-full text-sm ${selectedCategory === null
                                ? 'bg-[#00E2D6] text-[#1e2730]'
                                : 'bg-[#2d3741] text-gray-300 hover:bg-[#343e48]'
                                } transition-colors`}
                            onClick={() => setSelectedCategory(null)}
                        >
                            All
                        </button>

                        {categories.map(category => (
                            <button
                                key={category}
                                className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category
                                    ? 'bg-[#00E2D6] text-[#1e2730]'
                                    : 'bg-[#2d3741] text-gray-300 hover:bg-[#343e48]'
                                    } transition-colors`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full md:w-64 px-4 py-2 rounded-lg bg-[#2d3741] border border-[#3a4550] focus:border-[#00E2D6] focus:outline-none text-white"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </motion.div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="card p-6 rounded-lg overflow-hidden bg-[#2d3741] hover:bg-[#343e48] transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                ) : (
                    <div className="text-center py-16">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-bold mb-2">No projects found</h3>
                        <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSelectedCategory(null);
                                setSearchQuery('');
                            }}
                            className="mt-4 px-4 py-2 bg-[#2d3741] text-[#00E2D6] rounded-lg hover:bg-[#343e48] transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
} 
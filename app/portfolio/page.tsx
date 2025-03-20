import React from 'react';
import { Metadata } from 'next';
import PortfolioPageClient from './PortfolioPageClient';

export const metadata: Metadata = {
    title: 'Portfolio | Our Projects',
    description: 'Explore our complete portfolio of web development and design projects.',
};

export default function PortfolioPage() {
    return <PortfolioPageClient />;
} 
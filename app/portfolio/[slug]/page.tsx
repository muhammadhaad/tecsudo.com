// app/portfolio/[slug]/page.tsx
import React from 'react';
import { projects } from '../../config/portfolio';
import { notFound } from 'next/navigation';
import PortfolioPageClient from './PortfolioPageClient';

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortfolioPage({ params }: PageParams) {
  const slug = (await params).slug;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return <PortfolioPageClient project={project} />;
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}
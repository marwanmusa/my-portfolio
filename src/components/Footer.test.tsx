import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render the footer and display the copyright notice and tech stack', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    
    // Check for copyright notice
    expect(screen.getByText(`© ${currentYear} Marwan Musa. All rights reserved.`)).toBeInTheDocument();
    
    // Check for tech stack message
    expect(screen.getByText('Built with Next.js, TypeScript, TailwindCSS, and Framer Motion.')).toBeInTheDocument();
  });
});

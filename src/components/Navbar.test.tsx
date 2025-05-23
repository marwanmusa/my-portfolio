import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Navbar from './Navbar';
import { NAV_LINKS } from '../constants/navigation'; // Adjust path as necessary

// Mock framer-motion to simplify testing and avoid issues with animations/observers
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    motion: {
      ...actual.motion,
      span: ({ children, ...props }) => <span {...props}>{children}</span>,
      div: ({ children, ...props }) => <div {...props}>{children}</div>,
    },
  };
});


describe('Navbar Component', () => {
  // Test 1: Render Brand Name
  it('should render the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('Marwan Musa')).toBeInTheDocument();
  });

  // Test 2: Render Desktop Navigation Links
  it('should render all desktop navigation links', () => {
    render(<Navbar />);
    // Desktop links are within a 'hidden md:flex' container.
    // We check if links with the correct labels are present.
    // Framer motion mock will render spans directly.
    NAV_LINKS.forEach(link => {
      // Query all elements with the link label.
      // The desktop links are expected to be present.
      const linkElements = screen.queryAllByText(link.label);
      // Filter for those that are part of the desktop navigation structure.
      // Desktop links are direct children of a div with class "hidden md:flex"
      // This check can be complex. For now, we'll ensure the text exists.
      // A more robust way would be a data-testid for the desktop nav container.
      expect(linkElements.some(el => el.closest('.hidden.md\\:flex'))).toBeTruthy();
    });
  });

  // Test 3: Mobile Menu Functionality
  describe('Mobile Menu', () => {
    it('should toggle mobile navigation menu, make links visible/hidden, and hide on link click', async () => {
      render(<Navbar />);
      
      const mobileMenuButton = screen.getByTestId('mobile-menu-button');

      // --- Initial State: Mobile menu should not be visible ---
      // The mobile menu container itself might be in the DOM but hidden, or not in DOM.
      // Framer motion's conditional rendering (isOpen && <motion.div>) means it's not in DOM initially.
      expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();

      // --- Open Menu ---
      fireEvent.click(mobileMenuButton);
      
      // Wait for the menu to appear (due to state change and framer-motion mock)
      await waitFor(() => {
        expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
        expect(screen.getByTestId('mobile-menu')).toBeVisible();
      });

      // Check if mobile links are now visible within the mobile menu
      NAV_LINKS.forEach(link => {
        const mobileLink = screen.getByTestId(`mobile-link-${link.label}`);
        expect(mobileLink).toBeInTheDocument();
        expect(mobileLink).toBeVisible();
        expect(mobileLink).toHaveTextContent(link.label);
      });

      // --- Close Menu (Toggle) ---
      fireEvent.click(mobileMenuButton);
      
      await waitFor(() => {
        // The mobile menu should be removed from the DOM or not visible
        // Given our framer-motion mock and conditional rendering, it should be removed.
        expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
      });

      // --- Re-Open Menu for Link Click Test ---
      fireEvent.click(mobileMenuButton);
      await waitFor(() => {
        expect(screen.getByTestId('mobile-menu')).toBeVisible();
      });
      
      // --- Click on a Mobile Navigation Link (e.g., the first one) ---
      const firstMobileLink = screen.getByTestId(`mobile-link-${NAV_LINKS[0].label}`);
      expect(firstMobileLink).toBeVisible(); // Ensure it's there before clicking
      fireEvent.click(firstMobileLink);

      // --- Menu should close ---
      await waitFor(() => {
         expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
      });
    });
  });
});

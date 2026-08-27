import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the copyright and charity registration text', () => {
    render(<Footer />);
    expect(screen.getByText('© 2026 Bridge Collective')).toBeInTheDocument();
    expect(screen.getByText('Registered charity 12345678')).toBeInTheDocument();
  });

  it('renders as a footer landmark', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});

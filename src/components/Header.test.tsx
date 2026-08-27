import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders the logo text', () => {
    render(<Header />);
    expect(screen.getByText('Bridge Collective')).toBeInTheDocument();
  });

  it('renders an accessible menu button', () => {
    render(<Header />);
    const button = screen.getByRole('button', { name: 'Open menu' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('renders as a banner landmark', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});

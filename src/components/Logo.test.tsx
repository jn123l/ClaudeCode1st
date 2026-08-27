import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders the brand name', () => {
    render(<Logo />);
    expect(screen.getByText('Bridge Collective')).toBeInTheDocument();
  });

  it('renders a decorative dot that is hidden from assistive tech', () => {
    const { container } = render(<Logo />);
    const dot = container.querySelector('span[aria-hidden="true"]');
    expect(dot).toBeInTheDocument();
  });
});

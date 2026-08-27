import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'A classroomfor every child.',
    );
  });

  it('renders the supporting paragraph', () => {
    render(<Hero />);
    expect(
      screen.getByText(/we fund the schools, train the teachers/i),
    ).toBeInTheDocument();
  });
});

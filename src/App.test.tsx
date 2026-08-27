import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { stats } from './data/stats';

vi.mock('gsap', () => ({
  default: {
    to: (target: { current: number }, vars: { current: number; onUpdate?: () => void }) => {
      target.current = vars.current;
      vars.onUpdate?.();
    },
  },
}));

describe('App', () => {
  it('renders the header, hero, stats and footer sections together', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'A classroomfor every child.',
    );
    stats.forEach((stat) => {
      expect(screen.getByRole('heading', { name: stat.label })).toBeInTheDocument();
    });
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatsGrid } from './StatsGrid';
import { stats } from '../data/stats';

vi.mock('gsap', () => ({
  default: {
    to: (target: { current: number }, vars: { current: number; onUpdate?: () => void }) => {
      target.current = vars.current;
      vars.onUpdate?.();
    },
  },
}));

describe('StatsGrid', () => {
  it('renders a card for every stat in the data set', () => {
    render(<StatsGrid />);
    stats.forEach((stat) => {
      expect(screen.getByRole('heading', { name: stat.label })).toBeInTheDocument();
      expect(screen.getByText(stat.description)).toBeInTheDocument();
    });
  });

  it('renders exactly as many headings as stats', () => {
    render(<StatsGrid />);
    expect(screen.getAllByRole('heading')).toHaveLength(stats.length);
  });
});

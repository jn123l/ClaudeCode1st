import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatCard } from './StatCard';
import type { IconProps } from './icons/types';

vi.mock('gsap', () => ({
  default: {
    to: (target: { current: number }, vars: { current: number; onUpdate?: () => void }) => {
      target.current = vars.current;
      vars.onUpdate?.();
    },
  },
}));

function FakeIcon({ className }: IconProps) {
  return <svg data-testid="fake-icon" className={className} />;
}

describe('StatCard', () => {
  it('renders the label, description and animated value', () => {
    render(
      <StatCard
        Icon={FakeIcon}
        value={1284}
        decimals={0}
        suffix=""
        label="Schools partnered"
        description="In 14 countries, from Kenya to Guatemala."
        delay={0}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Schools partnered' })).toBeInTheDocument();
    expect(
      screen.getByText('In 14 countries, from Kenya to Guatemala.'),
    ).toBeInTheDocument();
    expect(screen.getByText('1,284')).toBeInTheDocument();
  });

  it('renders the provided icon', () => {
    render(
      <StatCard
        Icon={FakeIcon}
        value={38}
        decimals={0}
        suffix="K"
        label="Teachers trained"
        description="Equipped with modern tools and methodology."
        delay={0}
      />,
    );

    expect(screen.getByTestId('fake-icon')).toBeInTheDocument();
  });

  it('applies decimals and suffix to the animated value', () => {
    render(
      <StatCard
        Icon={FakeIcon}
        value={2.4}
        decimals={1}
        suffix="M"
        label="Students reached"
        description="Across 31 countries since 2011."
        delay={0}
      />,
    );

    expect(screen.getByText('2.4M')).toBeInTheDocument();
  });
});

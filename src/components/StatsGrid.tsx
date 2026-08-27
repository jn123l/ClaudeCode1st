import { StatCard } from './StatCard';
import { stats } from '../data/stats';

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 divide-y divide-brand-line sm:grid-cols-2 sm:divide-x">
      {stats.map((stat, index) => (
        <StatCard key={stat.label} {...stat} delay={index * 0.15} />
      ))}
    </div>
  );
}

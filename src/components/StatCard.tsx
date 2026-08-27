import type { ComponentType } from 'react';
import { CountUpNumber } from './CountUpNumber';
import type { IconProps } from './icons/types';

export interface Stat {
  Icon: ComponentType<IconProps>;
  value: number;
  decimals: number;
  suffix: string;
  label: string;
  description: string;
}

interface StatCardProps extends Stat {
  delay: number;
}

export function StatCard({ Icon, value, decimals, suffix, label, description, delay }: StatCardProps) {
  return (
    <div className="flex min-h-[220px] flex-col justify-between p-8 lg:min-h-[280px] lg:p-10">
      <div className="flex items-start justify-between">
        <Icon className="h-6 w-6 text-white" />
        <span className="text-4xl font-semibold text-white lg:text-5xl">
          <CountUpNumber value={value} decimals={decimals} suffix={suffix} delay={delay} />
        </span>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-white lg:text-xl">{label}</h2>
        <p className="mt-1 text-sm text-brand-muted lg:text-base">{description}</p>
      </div>
    </div>
  );
}

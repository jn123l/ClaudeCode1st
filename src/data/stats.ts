import { SparkleIcon } from '../components/icons/SparkleIcon';
import { PlusIcon } from '../components/icons/PlusIcon';
import { ArrowRightIcon } from '../components/icons/ArrowRightIcon';
import { TrendingUpIcon } from '../components/icons/TrendingUpIcon';
import type { Stat } from '../components/StatCard';

export const stats: Stat[] = [
  {
    Icon: SparkleIcon,
    value: 2.4,
    decimals: 1,
    suffix: 'M',
    label: 'Students reached',
    description: 'Across 31 countries since 2011.',
  },
  {
    Icon: PlusIcon,
    value: 1284,
    decimals: 0,
    suffix: '',
    label: 'Schools partnered',
    description: 'In 14 countries, from Kenya to Guatemala.',
  },
  {
    Icon: ArrowRightIcon,
    value: 38,
    decimals: 0,
    suffix: 'K',
    label: 'Teachers trained',
    description: 'Equipped with modern tools and methodology.',
  },
  {
    Icon: TrendingUpIcon,
    value: 3.1,
    decimals: 1,
    suffix: '×',
    label: 'Graduation lift',
    description: 'Partner schools outperform national averages 3x.',
  },
];

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface CountUpNumberProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

function formatCount(value: number, decimals: number) {
  const fixed = value.toFixed(decimals);
  const [whole, fraction] = fixed.split('.');
  const withCommas = Number(whole).toLocaleString('en-US');
  return fraction ? `${withCommas}.${fraction}` : withCommas;
}

export function CountUpNumber({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1.6,
  delay = 0,
}: CountUpNumberProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const counter = { current: 0 };
    gsap.to(counter, {
      current: value,
      duration,
      delay,
      ease: 'power2.out',
      onUpdate: () => {
        if (spanRef.current) {
          spanRef.current.textContent = `${prefix}${formatCount(counter.current, decimals)}${suffix}`;
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={spanRef}>{`${prefix}${formatCount(0, decimals)}${suffix}`}</span>;
}

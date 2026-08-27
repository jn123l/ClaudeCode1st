import { StrictMode } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { CountUpNumber } from './CountUpNumber';

const toMock = vi.fn();

vi.mock('gsap', () => ({
  default: {
    to: (...args: unknown[]) => toMock(...args),
  },
}));

beforeEach(() => {
  toMock.mockReset();
});

describe('CountUpNumber', () => {
  it('renders the formatted zero value before the animation runs', () => {
    render(<CountUpNumber value={1284} decimals={0} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('calls gsap.to with the target value, duration and delay', () => {
    render(<CountUpNumber value={38} duration={2} delay={0.3} />);
    expect(toMock).toHaveBeenCalledTimes(1);
    const [target, vars] = toMock.mock.calls[0] as [{ current: number }, Record<string, unknown>];
    expect(target.current).toBe(0);
    expect(vars.current).toBe(38);
    expect(vars.duration).toBe(2);
    expect(vars.delay).toBe(0.3);
  });

  it('updates the rendered text as the animation progresses', () => {
    render(<CountUpNumber value={1284} decimals={0} />);
    const [target, vars] = toMock.mock.calls[0] as [
      { current: number },
      { onUpdate: () => void },
    ];

    act(() => {
      target.current = 1284;
      vars.onUpdate();
    });

    expect(screen.getByText('1,284')).toBeInTheDocument();
  });

  it('formats decimals, prefixes and suffixes together', () => {
    render(<CountUpNumber value={2.4} decimals={1} prefix="$" suffix="M" />);
    const [target, vars] = toMock.mock.calls[0] as [
      { current: number },
      { onUpdate: () => void },
    ];

    act(() => {
      target.current = 2.4;
      vars.onUpdate();
    });

    expect(screen.getByText('$2.4M')).toBeInTheDocument();
  });

  it('only starts the animation once even if re-rendered', () => {
    const { rerender } = render(<CountUpNumber value={10} />);
    rerender(<CountUpNumber value={10} />);
    expect(toMock).toHaveBeenCalledTimes(1);
  });

  it('only starts the animation once under StrictMode double-invoked effects', () => {
    render(
      <StrictMode>
        <CountUpNumber value={10} />
      </StrictMode>,
    );
    expect(toMock).toHaveBeenCalledTimes(1);
  });

  it('skips the DOM update when onUpdate fires after unmount', () => {
    const { unmount } = render(<CountUpNumber value={1284} decimals={0} />);
    const [target, vars] = toMock.mock.calls[0] as [
      { current: number },
      { onUpdate: () => void },
    ];

    unmount();

    expect(() => {
      act(() => {
        target.current = 1284;
        vars.onUpdate();
      });
    }).not.toThrow();
    expect(document.body.textContent).toBe('');
  });
});

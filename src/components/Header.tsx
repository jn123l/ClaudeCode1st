import { Logo } from './Logo';
import { MenuIcon } from './icons/MenuIcon';

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-brand-line px-6 py-5 sm:px-10 lg:px-12">
      <Logo />
      <button
        type="button"
        aria-label="Open menu"
        className="rounded p-1.5 text-white transition hover:bg-white/10"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
    </header>
  );
}

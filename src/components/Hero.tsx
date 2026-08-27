export function Hero() {
  return (
    <div className="flex flex-col justify-center gap-6 border-b border-brand-line px-6 py-14 sm:px-10 lg:border-b-0 lg:border-r lg:px-16 lg:py-0">
      <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        A classroom
        <br />
        for every child.
      </h1>
      <p className="max-w-md text-base leading-relaxed text-brand-muted lg:text-lg">
        We fund the schools, train the teachers, and measure what works — so every
        child we reach today becomes a graduate tomorrow.
      </p>
    </div>
  );
}

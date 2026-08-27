import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsGrid } from './components/StatsGrid';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand">
      <Header />
      <main className="grid flex-1 grid-cols-1 lg:grid-cols-2">
        <Hero />
        <StatsGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;

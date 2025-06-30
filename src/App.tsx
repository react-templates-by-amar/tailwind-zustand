import { useStore } from './store/useStore';
import { Button } from './components/Button';
import { ThemeToggle } from './components/ThemeToggle';
import './styles/globals.css';

function App() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">React + Tailwind + Zustand</h1>
          <ThemeToggle />
        </div>
        <div className="bg-background border-foreground/10 mx-auto mt-8 max-w-md rounded-lg border p-6 shadow-lg">
          <div className="mb-6 text-center">
            <p className="text-foreground mb-4 text-2xl">Count: {count}</p>
            <div className="flex justify-center gap-4">
              <Button onClick={decrement} variant="secondary">
                Decrement
              </Button>
              <Button onClick={increment} variant="secondary">
                Increment
              </Button>
            </div>
            <div className="mt-4">
              <Button onClick={reset} variant="outline" size="sm">
                Reset
              </Button>
            </div>
          </div>
          <div className="border-foreground/10 mt-8 border-t pt-6">
            <h2 className="text-foreground mb-2 text-xl font-semibold">Template Features</h2>
            <ul className="text-foreground/80 list-disc space-y-1 pl-5 text-sm">
              <li>React with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>Zustand for state management</li>
              <li>Dark mode support</li>
              <li>Component structure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useStore } from "./store/useStore";
import { Button } from "./components/Button";
import { ThemeToggle } from "./components/ThemeToggle";
import "./styles/globals.css";

function App() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">React + Tailwind + Zustand</h1>
          <ThemeToggle />
        </div>
        <div className="bg-background border border-foreground/10 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-8">
          <div className="text-center mb-6">
            <p className="text-2xl mb-4 text-foreground">Count: {count}</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={decrement} variant="secondary">
                Decrement
              </Button>
              <Button onClick={increment}>Increment</Button>
            </div>
            <div className="mt-4">
              <Button onClick={reset} variant="outline" size="sm">
                Reset
              </Button>
            </div>
          </div>
          <div className="mt-8 border-t border-foreground/10 pt-6">
            <h2 className="text-xl font-semibold mb-2 text-foreground">Template Features</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/80">
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

import { useStore } from './store/useStore'
import { Button } from './components/Button'
import { ThemeToggle } from './components/ThemeToggle'
import './styles/globals.css'

function App() {
  const { count, increment, decrement, reset } = useStore()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">React + Tailwind + Zustand</h1>
          <ThemeToggle />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <div className="text-center mb-6">
            <p className="text-2xl mb-4">Count: {count}</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={decrement} variant="secondary">Decrement</Button>
              <Button onClick={increment}>Increment</Button>
            </div>
            <div className="mt-4">
              <Button onClick={reset} variant="outline" size="sm">Reset</Button>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-xl font-semibold mb-2">Template Features</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
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
  )
}

export default App

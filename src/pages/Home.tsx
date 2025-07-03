import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary mb-6">React + TypeScript + Tailwind CSS Template</h1>
      <p className="text-text-secondary mb-4">
        Welcome to this modern React template with TypeScript and Tailwind CSS.
        This template includes everything you need to build amazing web applications.
      </p>
      <Link 
        to="/about" 
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};

export default Home;

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About This Template</h1>
      <p className="text-gray-600 mb-4">
        This is a modern React template built with:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-600">
        <li>React 18+ with TypeScript</li>
        <li>React Router v6 for routing</li>
        <li>Tailwind CSS for styling</li>
        <li>Zustand for state management</li>
        <li>Axios for HTTP requests</li>
      </ul>
      <Link 
        to="/" 
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default About;

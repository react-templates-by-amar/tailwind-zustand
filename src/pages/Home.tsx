import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from '@components/ui';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-text-primary mb-6">React + TypeScript + Tailwind CSS Template</h1>
      <p className="text-text-secondary mb-4">
        Welcome to this modern React template with TypeScript and Tailwind CSS.
        This template includes everything you need to build amazing web applications.
      </p>
      
      <div className="flex gap-4">
        <Link 
          to="/about" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
        >
          Learn More
        </Link>
        
        <button
          onClick={openModal}
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors"
        >
          Open Test Modal
        </button>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Test Modal"
        size="md"
      >
        <div className="py-4">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This is a test modal to demonstrate the Modal component functionality.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You can add any content here and customize it as needed.
          </p>
          <div className="flex justify-end mt-6">
            <button
              onClick={closeModal}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
            >
              Close Modal
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;

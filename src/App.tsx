import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';
import type { Technology } from './types/tech.ts';

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies data:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'top-right',
        autoClose: 2500,
      });
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleRemoveFromStack = (techId: string) => {
    const itemToRemove = stack.find((item) => item.id === techId);
    setStack(stack.filter((item) => item.id !== techId));
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack.`, {
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('All technologies removed from your stack.', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 text-gray-800 font-sans antialiased">
      <ToastContainer />
      <Navbar />
      <HeroBanner />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Select Technologies
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Browse through tools to assemble your custom stack.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-sm font-semibold text-gray-500">Loading Technologies Data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = stack.some((item) => item.id === tech.id);
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={isAdded}
                    onAdd={handleAddToStack}
                  />
                );
              })}
            </div>

            <div className="lg:col-span-1">
              <StackSidebar
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
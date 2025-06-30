import React from 'react';
import BacktrackVisualization from './components/BacktrackVisualization';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            FreeCodeCamp Algorithm Visualizations
          </h1>
          <p className="text-gray-600 mt-1">
            Interactive demonstrations of algorithm implementations
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BacktrackVisualization />
      </main>
      
      <footer className="mt-16 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            Part of the FreeCodeCamp Exercises Demo Repository
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
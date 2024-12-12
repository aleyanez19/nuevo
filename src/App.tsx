import React from 'react';
import { Magazine } from './components/Magazine';
import { BookHeart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#e5e0d5]">
      <header className="fixed top-0 left-0 right-0 z-10 bg-[#e5e0d5]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookHeart className="w-8 h-8 text-gray-800" />
            <h1 className="text-2xl magazine-title text-gray-800">Poetry Collection</h1>
          </div>
          <p className="text-sm text-gray-600 magazine-italic tracking-wider">
            Swipe or use arrows to navigate
          </p>
        </div>
      </header>
      
      <main className="pt-20 h-screen">
        <Magazine />
      </main>
    </div>
  );
}

export default App;
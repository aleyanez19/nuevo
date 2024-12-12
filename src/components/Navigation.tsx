import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentIndex: number;
  totalPages: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentIndex,
  totalPages,
  onNavigate,
}) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-12">
      <button
        onClick={() => onNavigate('prev')}
        disabled={currentIndex === 0}
        className={`p-5 rounded-full bg-black/20 backdrop-blur-md shadow-lg transform transition-all duration-300
          ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 hover:bg-black/30'}`}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      
      <div className="text-black/80 magazine-text font-bold text-lg tracking-wider">
        {Math.floor(currentIndex / 2) + 1} / {Math.ceil(totalPages / 2)}
      </div>
      
      <button
        onClick={() => onNavigate('next')}
        disabled={currentIndex >= totalPages - 2}
        className={`p-5 rounded-full bg-black/20 backdrop-blur-md shadow-lg transform transition-all duration-300
          ${currentIndex >= totalPages - 2 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 hover:bg-black/30'}`}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};
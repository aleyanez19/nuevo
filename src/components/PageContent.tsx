import React from 'react';
import { BookOpen, User } from 'lucide-react';
import { Poem } from '../types/Poem';

interface PageContentProps {
  poem: Poem | null;
}

export const PageContent: React.FC<PageContentProps> = ({ poem }) => {
  if (!poem) {
    return (
      <div className="relative h-full paper-texture flex items-center justify-center">
        <p className="text-gray-600 text-2xl magazine-italic">End of Collection</p>
      </div>
    );
  }

  return (
    <div className="relative h-full paper-texture">
      <div className="absolute inset-0">
        <img
          src={poem.image}
          alt={poem.title}
          className="w-full h-[45%] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-transparent via-transparent to-[#f8f5f0]" />
      </div>
      
      <div className="absolute inset-0 flex flex-col p-12">
        <div className="flex-1 flex justify-between items-start">
          <div className="inline-block bg-black/5 backdrop-blur-sm px-4 py-2 rounded-lg">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-gray-700" />
              <span className="text-sm text-gray-700 magazine-text">{poem.date}</span>
            </div>
          </div>
          
          {poem.author && (
            <div className="inline-block bg-black/5 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-700" />
                <span className="text-sm text-gray-700 magazine-italic">{poem.author}</span>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-8 relative">
          <h2 className="text-6xl magazine-title text-gray-900 leading-tight tracking-tight">
            {poem.title}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-800 magazine-text leading-relaxed whitespace-pre-line">
              {poem.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
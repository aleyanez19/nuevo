import React from 'react';
import { animated } from '@react-spring/web';
import { Poem } from '../types/Poem';
import { BookOpen } from 'lucide-react';

interface PageProps {
  poem: Poem;
  style: any;
}

export const Page: React.FC<PageProps> = ({ poem, style }) => {
  return (
    <animated.div
      style={style}
      className="absolute w-full h-full bg-white shadow-2xl rounded-lg overflow-hidden"
    >
      <div className="relative h-full">
        <div className="absolute inset-0">
          <img
            src={poem.image}
            alt={poem.title}
            className="w-full h-1/2 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white h-1/2" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-gray-600" />
            <span className="text-sm text-gray-600">{poem.date}</span>
          </div>
          
          <h2 className="text-4xl font-serif mb-4 text-gray-900">{poem.title}</h2>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <p className="whitespace-pre-line text-lg text-gray-800 leading-relaxed">
              {poem.content}
            </p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
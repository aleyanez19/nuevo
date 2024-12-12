import React, { useState } from 'react';
import { PageSpread } from './PageSpread';
import { Navigation } from './Navigation';
import { poems } from '../data/poems';
import { usePageTransition } from '../hooks/usePageTransition';

export const Magazine: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { bind, rotateY } = usePageTransition(index, setIndex, poems.length);

  const navigatePage = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && index > 0) {
      setIndex(index - 2);
    } else if (direction === 'next' && index < poems.length - 2) {
      setIndex(index + 2);
    }
  };

  const leftPoem = poems[index] || null;
  const rightPoem = index + 1 < poems.length ? poems[index + 1] : null;

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#e5e0d5]">
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        <div
          {...bind()}
          className="relative w-[95%] max-w-7xl h-[85vh] touch-none transform translate-y-8"
        >
          <PageSpread
            leftPoem={leftPoem}
            rightPoem={rightPoem}
            style={{
              transform: rotateY.to(r => `rotateY(${r}deg)`),
              transformOrigin: 'center',
            }}
          />
        </div>
      </div>

      <Navigation
        currentIndex={index}
        totalPages={poems.length}
        onNavigate={navigatePage}
      />
    </div>
  );
};
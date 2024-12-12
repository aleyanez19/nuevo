import React from 'react';
import { animated } from '@react-spring/web';
import { Poem } from '../types/Poem';
import { PageContent } from './PageContent';

interface PageSpreadProps {
  leftPoem: Poem | null;
  rightPoem: Poem | null;
  style: any;
}

export const PageSpread: React.FC<PageSpreadProps> = ({ leftPoem, rightPoem, style }) => {
  return (
    <animated.div
      style={{
        ...style,
        transformStyle: 'preserve-3d',
      }}
      className="absolute w-full h-full flex book-shadow rounded-lg overflow-hidden"
    >
      <div className="w-1/2 h-full overflow-hidden border-r border-gray-300 page-shadow">
        <PageContent poem={leftPoem} />
      </div>
      <div className="w-1/2 h-full overflow-hidden page-shadow">
        <PageContent poem={rightPoem} />
      </div>
    </animated.div>
  );
};
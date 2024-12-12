import { useSpring } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

export const usePageTransition = (
  index: number,
  setIndex: (index: number) => void,
  totalPages: number
) => {
  const [{ rotateY }, api] = useSpring(() => ({
    rotateY: 0,
    config: { mass: 1, tension: 280, friction: 60 }, // Smoother animation config
  }));

  const bind = useDrag(
    ({ movement: [mx], direction: [xDir], down, distance, velocity }) => {
      const rotation = (mx / window.innerWidth) * 180;
      const shouldSwipe = !down && (distance > 50 || velocity > 0.5);
      
      if (shouldSwipe) {
        const newIndex = xDir > 0 
          ? Math.max(0, index - 2)
          : Math.min(totalPages - 1, index + 2);
          
        setIndex(newIndex);
        api.start({ 
          rotateY: 0,
          config: { mass: 1, tension: 280, friction: 60 }
        });
      } else {
        api.start({
          rotateY: down ? rotation : 0,
          immediate: down,
        });
      }
    }
  );

  return { bind, rotateY };
};
import { motion, useScroll, useTransform } from 'framer-motion';

interface FloatingBallProps {
    color: string;
    top: string;
    left: string;
    size: string;
    direction: string;
  }
  

function FloatingBallScroll({ color, top, left, size, direction }: FloatingBallProps) {
    const { scrollY } = useScroll();
    // Create transformations based on scroll.
    const transformValue = (direction == "true") ? -500 : 800;
    const xShift = useTransform(scrollY, [0, 800], [0, transformValue]);
    const yShift = useTransform(scrollY, [0, 800], [0, transformValue]);

    return (
        <motion.div
            className="absolute rounded-full"
            style={{
                x: xShift,
                y: yShift,
                backgroundImage: `radial-gradient(circle, ${color} 0%, transparent 60%)`,
                width: size,
                height: size,
                top: top,
                left: left,
            }} />
    );
}
  
export default FloatingBallScroll;
  
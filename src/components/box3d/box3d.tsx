import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import "./style.css";

export default function Box3d() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (ref.current) {
      const rotate = Math.sin(t / 5000) * 200;
      const y = (1 + Math.sin(t / 1000)) * -50;
      ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    }
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front dark:border-zinc-300" />
        <div className="side left dark:border-zinc-300" />
        <div className="side right dark:border-zinc-300" />
        <div className="side top dark:border-zinc-300" />
        <div className="side bottom dark:border-zinc-300" />
        <div className="side back  dark:border-zinc-300" />
      </div>
    </div>
  );
}

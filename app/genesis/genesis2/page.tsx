"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const Genesis2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext("2d");
    if (!context) return;

    let width: number, height: number, scale: number = 1;
    let pointerX: number | null = null;
    let pointerY: number | null = null;
    const STAR_COLOR = "#fff";
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
    let stars: { x: number; y: number; z: number }[] = [];

    function resize() {
      scale = window.devicePixelRatio || 1;
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;
      canvas.width = width;
      canvas.height = height;
      stars.forEach(placeStar);
    }

    function generateStars() {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      }));
    }

    function placeStar(star: { x: number; y: number; z: number }) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star: { x: number; y: number; z: number }) {
      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function updateStars() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;
      velocity.x += (velocity.tx - velocity.x) * 0.8;
      velocity.y += (velocity.ty - velocity.y) * 0.8;

      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }

    function renderStars() {
      if (!context) return;
      context.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = "round";
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;

        context.moveTo(star.x, star.y);
        context.lineTo(star.x + velocity.x * 2, star.y + velocity.y * 2);

        context.stroke();
      });
    }

    function animate() {
      updateStars();
      renderStars();
      requestAnimationFrame(animate);
    }

    function handlePointerMove(x: number, y: number) {
      if (pointerX !== null && pointerY !== null) {
        velocity.tx += (x - pointerX) / (8 * scale);
        velocity.ty += (y - pointerY) / (8 * scale);
      }
      pointerX = x;
      pointerY = y;
    }

    function handleMouseMove(event: MouseEvent) {
      handlePointerMove(event.clientX, event.clientY);
    }

    function handleTouchMove(event: TouchEvent) {
      handlePointerMove(event.touches[0].clientX, event.touches[0].clientY);
      event.preventDefault();
    }

    function handleMouseLeave() {
      pointerX = null;
      pointerY = null;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    resize();
    generateStars();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="text-center py-10 shadow-md text-white">
          <h1 className="text-5xl font-bold text-white">IEEE HKN Nu Eta Chapter</h1>
          <h5 className="text-lg mt-2">presents</h5>
          </div>
      <h1 className="relative z-10 text-8xl font-bold text-white">
        Genesis 2.0
      </h1>
      <h1 className="text-4xl md:text-4xl font-bold text-white neon-glow">
        Loading...
      </h1>
    </div>
  );
};

export default Genesis2;

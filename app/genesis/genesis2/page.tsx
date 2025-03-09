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
    const STAR_COLOR = "#fff";
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

    let stars: { x: number; y: number; z: number; velocityY: number; velocityX: number }[] = [];

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
        velocityY: 1 + Math.random() * 3, // Random falling speed
        velocityX: (Math.random() - 0.5) * 0.5, // Small random horizontal movement
      }));
    }

    function placeStar(star: { x: number; y: number; z: number }) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star: { x: number; y: number; z: number }) {
      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
      star.x = Math.random() * width;
      star.y = -10; // Reset to the top of the screen
    }

    function updateStars() {
      stars.forEach((star) => {
        // Update the position of the star to simulate falling
        star.y += star.velocityY; // Vertical movement due to gravity
        star.x += star.velocityX; // Slight random horizontal movement

        // Recycle the star if it moves out of the canvas
        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
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
        context.lineTo(star.x + star.velocityX * 2, star.y + star.velocityY * 2);

        context.stroke();
      });
    }

    function animate() {
      updateStars();
      renderStars();
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);

    resize();
    generateStars();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
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

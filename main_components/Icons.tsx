// main_components/Icons.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ImageProps } from "@/types";

const images: ImageProps[] = [
  { src: "/icons/figma.png", alt: "figma" },
  { src: "/icons/gcp.png", alt: "gcp" },
  { src: "/icons/android.png", alt: "android" },
  { src: "/icons/github.png", alt: "github" },
  { src: "/icons/php.png", alt: "php" },
  { src: "/icons/python.png", alt: "python" },
  { src: "/icons/react.png", alt: "react" },
  { src: "/icons/typescript.png", alt: "typescript" },
  { src: "/icons/js.png", alt: "js" },
];

const safeDistance = 100; // Define a safe distance from the mouse

const getRandomPosition = (mouseX: number, mouseY: number) => {
  const viewportWidth = window.innerWidth - 64; // Subtracting the width of the div (16 * 4)
  const viewportHeight = window.innerHeight - 64; // Subtracting the height of the div (16 * 4)

  let randomX, randomY;

  do {
    randomX = Math.floor(Math.random() * viewportWidth);
    randomY = Math.floor(Math.random() * viewportHeight);
  } while (
    Math.abs(randomX - mouseX) < safeDistance &&
    Math.abs(randomY - mouseY) < safeDistance
  );

  return { x: randomX, y: randomY };
};

const FloatingElement: React.FC<{
  image: ImageProps;
  mouseX: number;
  mouseY: number;
}> = ({ image, mouseX, mouseY }) => {
  const floatingDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveElement = () => {
      const { x, y } = getRandomPosition(mouseX, mouseY);
      if (floatingDivRef.current) {
        floatingDivRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    // Move the element every 2 seconds
    const intervalId = setInterval(moveElement, 2000);

    // Initial move
    moveElement();

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={floatingDivRef}
      className="fixed w-16 h-16 border-4 bg-white rounded-full flex justify-center items-center cursor-pointer transition-transform"
      style={{ transform: `translate(0, 0)` }}
    >
      <Image
        src={image.src || "/icons/default.png"} // Add a fallback image
        alt={image.alt || "icon"}
        width={30}
        height={30}
      />
    </div>
  );
};

const Icons: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hidden lg:block w-52 h-54 bg-slate-600 lg:absolute">
      {images.map((image, index) => (
        <FloatingElement
          key={index}
          image={image}
          mouseX={mousePosition.x}
          mouseY={mousePosition.y}
        />
      ))}
    </div>
  );
};

export default Icons;

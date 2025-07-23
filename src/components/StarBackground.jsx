import React, { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberofStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    );

    const newStars = [];
    for (let i = 0; i <= numberofStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: `${Math.random() * 4 + 2}s`,
      });
    }
    setStars(newStars);
  };
  const generateMeteors = () => {
    const numberofMeteors = 4;

    const newMeteors = [];
    for (let i = 0; i <= numberofMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: `${Math.random() * 3 + 3}s`,
      });
    }
    setMeteors(newMeteors);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: star.animationDuration,
            left: `${star.x}px`,
            top: `${star.y}px`,
            opacity: star.opacity,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor absolute rounded-full bg-white"
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;

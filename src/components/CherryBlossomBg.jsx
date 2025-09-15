import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CherryBlossomBg = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate random petals
    const generatePetals = () => {
      const newPetals = [];
      for (let i = 0; i < 25; i++) {
        newPetals.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 15,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50" />
      
      {/* Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-200/20 via-transparent to-transparent" />
      
      {/* Falling Cherry Blossom Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `-10%`,
            opacity: petal.opacity,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(petal.id) * 50, Math.cos(petal.id) * 30, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-sm"
          >
            {/* Cherry Blossom Petal Shape */}
            <path
              d="M12 2C12 2 8 6 8 10C8 14 10 16 12 16C14 16 16 14 16 10C16 6 12 2 12 2Z"
              fill="url(#petalGradient)"
              opacity="0.8"
            />
            <path
              d="M12 16C12 16 16 12 20 12C24 12 22 14 22 16C22 18 20 20 16 16C12 12 12 16 12 16Z"
              fill="url(#petalGradient)"
              opacity="0.6"
            />
            <path
              d="M12 16C12 16 8 12 4 12C0 12 2 14 2 16C2 18 4 20 8 16C12 12 12 16 12 16Z"
              fill="url(#petalGradient)"
              opacity="0.6"
            />
            <path
              d="M12 16C12 16 16 20 12 24C8 20 12 16 12 16Z"
              fill="url(#petalGradient)"
              opacity="0.7"
            />
            <defs>
              <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fce7f3" />
                <stop offset="50%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#f9a8d4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      {/* Floating Light Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-300/20 to-amber-300/20 rounded-full blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Mandala Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="#f59e0b" strokeWidth="0.5" />
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2={100 + 80 * Math.cos((i * Math.PI) / 4)}
                  y2={100 + 80 * Math.sin((i * Math.PI) / 4)}
                  stroke="#f59e0b"
                  strokeWidth="0.3"
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mandala)" />
        </svg>
      </div>
    </div>
  );
};

export default CherryBlossomBg;
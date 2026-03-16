import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Scissors } from 'lucide-react';

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/language');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520] flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* 3D Floating Background Elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />




        {/* Logo Container with 3D Effect */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Golden Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary/30"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))",
            }}
          />

          {/* Scissors Icon with Glow */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-full blur-2xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              animate={{
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Scissors className="w-16 h-16 text-primary relative z-10" strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>




        {/* Brand Name */}
        <motion.div
          className="text-center mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-wider mb-2">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              A & M 💈✂️
            </span>
          </h1>
          <motion.p
            className="text-muted-foreground text-sm tracking-widest uppercase"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Book Smart, Look Sharp.
          </motion.p>
        </motion.div>





        {/* Loading Animation */}
        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
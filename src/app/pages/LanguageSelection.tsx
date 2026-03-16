 
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../translation/LanguageContex'; // استدعاء الـ context

export function LanguageSelection() {
  const navigate = useNavigate();
  const { changeLanguage } = useLanguage(); // دالة تغيير اللغة من الـ context

  const selectLanguage = (lang: "en" | "ar") => {
    changeLanguage(lang); // تغير اللغة في التطبيق كله فورًا
    navigate('/entry'); // تروح للصفحة التالية
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520] flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-md w-full relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-6 relative"
            animate={{
              boxShadow: [
                "0 0 20px rgba(212, 175, 55, 0.3)",
                "0 0 40px rgba(212, 175, 55, 0.5)",
                "0 0 20px rgba(212, 175, 55, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Globe className="w-10 h-10 text-primary" />
          </motion.div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Choose Language
            </span>
          </h1>
          <p className="text-muted-foreground">Select your preferred language</p>
        </motion.div>

        {/* Language Options */}
        <div className="space-y-4">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={() => selectLanguage('en')}
              className="w-full h-20 bg-gradient-to-br from-card to-secondary border-2 border-primary/30 hover:border-primary/60 text-foreground group relative overflow-hidden"
              style={{
                transform: "perspective(1000px)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative z-10 flex items-center justify-between w-full px-4">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-xl font-semibold tracking-wide">English</span>
                <div className="w-8" />
              </div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={() => selectLanguage('ar')}
              className="w-full h-20 bg-gradient-to-br from-card to-secondary border-2 border-primary/30 hover:border-primary/60 text-foreground group relative overflow-hidden"
              style={{
                transform: "perspective(1000px)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative z-10 flex items-center justify-between w-full px-4">
                <span className="text-2xl">🇸🇦</span>
                <span className="text-xl font-semibold tracking-wide">العربية</span>
                <div className="w-8" />
              </div>
            </Button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="mt-12 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
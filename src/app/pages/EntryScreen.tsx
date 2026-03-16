
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { UserPlus, LogIn, UserCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function EntryScreen() {
  const navigate = useNavigate();

  const options = [
    {
      icon: UserCircle,
      title: 'Continue as Guest',
      description: 'Browse without signing in',
      action: () => navigate('/home'),
      gradient: 'from-accent/20 to-accent/10',
    },
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your account',
      action: () => navigate('/signup'),
      gradient: 'from-primary/20 to-primary/10',
    },
    {
      icon: LogIn,
      title: 'Log In',
      description: 'Access your account',
      action: () => navigate('/login'),
      gradient: 'from-secondary/40 to-secondary/20',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520] flex items-center justify-center p-4 overflow-hidden">
      {/* 3D Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center center',
          }}
        />
      </div>

      <motion.div
        className="max-w-md w-full relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Brand */}
        <motion.div
          className="text-center mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              A & M
            </span>
          </h1>
          <p className="text-muted-foreground text-sm tracking-wider uppercase">
            Advanced Service... For a Distinguished Look 💈✂️ .
          </p>
        </motion.div>

        {/* Options */}
        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                className={`p-6 bg-gradient-to-br ${option.gradient} border-2 border-primary/20 hover:border-primary/40 cursor-pointer transition-all duration-300 relative overflow-hidden group`}
                onClick={option.action}
                style={{
                  transform: "perspective(1000px)",
                }}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                      <option.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs text-muted-foreground">
            By continuing, you agree to our Terms & Privacy Policy
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
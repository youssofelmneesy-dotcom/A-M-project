
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Lock, User, Chrome } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { useLanguage } from '../translation/LanguageContex';
import { useAuth } from '../auth';



export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { t } = useLanguage();
  const { login } = useAuth();

  const handleEmailLogin = async () => {
    try {
      await login({ email, password });
      navigate('/home'); // بعد تسجيل الدخول بنجاح
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleGoogleLogin = async () => {
    setError(t('auth.googleUnavailable'));
  };

  const handleResetPassword = async () => {
    setError(t('auth.resetNotAvailable'));
  };




  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520] flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 className="text-3xl font-bold mb-2" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('auth.welcome')}
            </span>
          </motion.h1>
          <p className="text-muted-foreground">{t('auth.signIn')}</p>
        </div>


        {/* Social Login */}
        <div className="space-y-3 mb-6">
          <Button
            className="w-full bg-white text-black hover:bg-gray-100 relative overflow-hidden group"
            onClick={handleGoogleLogin}
          >
            <Chrome className="w-5 h-5 mr-2 relative z-10" />
            <span className="relative z-10">{t('auth.continueWithGoogle')}</span>
          </Button>
          
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary/20" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">{t('auth.continueWithEmail')}</span>
          </div>
        </div>

        {/* Login Form */}
        <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur-sm">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-foreground">{t('auth.email')}</Label>
              <div className="relative mt-1.5">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10 bg-input-background border-primary/20 focus:border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="text-foreground">{t('auth.password')}</Label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                <Input
                  id="password"
                  type="password"
                  className="pl-10 bg-input-background border-primary/20 focus:border-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* for forgting password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-primary/30" />
                <span className="text-muted-foreground">{t('auth.rememberMe')}</span>
              </label>
              <button type="button" className="text-primary hover:underline" onClick={handleResetPassword}>
                {t('auth.forgotPassword')}
              </button>
            </div>

            <Button
              type="button"
              onClick={handleEmailLogin}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground mt-6"
            >
              {t('auth.logIn')}
            </Button>
          </form>
        </Card>


        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            {t('auth.noAccount')}{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-primary hover:underline font-medium"
            >
              {t('auth.signUp')}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
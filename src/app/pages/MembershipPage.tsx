
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Award, Check, Crown, Gem } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useLanguage } from '../translation/LanguageContex';

export function MembershipPage() {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const memberships = lang === 'ar'
    ? [
        {
          name: 'فضية',
          icon: Award,
          price: '$29',
          period: '/شهريًا',
          color: 'from-gray-400 to-gray-600',
          benefits: ['خصم 10% على كل الخدمات', 'أولوية في الحجز', 'قصّة مجانية شهريًا', 'هدية عيد ميلاد'],
        },
        {
          name: 'ذهبية',
          icon: Crown,
          price: '$49',
          period: '/شهريًا',
          color: 'from-primary to-yellow-600',
          popular: true,
          benefits: ['خصم 20% على كل الخدمات', 'أولوية VIP', 'خدمتان مجانيتان شهريًا', 'عروض حصرية', 'تهذيب لحية مجاني'],
        },
        {
          name: 'بلاتينيوم',
          icon: Gem,
          price: '$99',
          period: '/شهريًا',
          color: 'from-accent to-white',
          benefits: ['خصم 30% على كل الخدمات', 'أولوية قصوى', 'قصات أساسية غير محدودة', 'حلاق شخصي', 'كل الخدمات المميزة', 'منتجات مجانية'],
        },
      ]
    : [
        {
          name: 'Silver',
          icon: Award,
          price: '$29',
          period: '/month',
          color: 'from-gray-400 to-gray-600',
          benefits: ['10% off all services', 'Priority booking', '1 free haircut/month', 'Birthday special'],
        },
        {
          name: 'Gold',
          icon: Crown,
          price: '$49',
          period: '/month',
          color: 'from-primary to-yellow-600',
          popular: true,
          benefits: ['20% off all services', 'VIP priority booking', '2 free services/month', 'Exclusive offers', 'Free beard trim'],
        },
        {
          name: 'Platinum',
          icon: Gem,
          price: '$99',
          period: '/month',
          color: 'from-accent to-white',
          benefits: ['30% off all services', 'Ultimate priority', 'Unlimited basic cuts', 'Personal barber', 'All premium services', 'Complimentary products'],
        },
      ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520]">
      <motion.header
        className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-primary/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/home')}>
            <ArrowLeft className="w-6 h-6 text-primary" />
          </Button>
          <h1 className="text-xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('membership.title')}
            </span>
          </h1>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('membership.choose')}</h2>
          <p className="text-muted-foreground">{t('membership.benefits')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memberships.map((membership, index) => (
            <motion.div
              key={membership.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {membership.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold z-10">
                  {t('membership.popular')}
                </div>
              )}
              <Card className={`p-8 border-2 transition-all ${
                membership.popular ? 'border-primary bg-primary/5' : 'border-primary/20 hover:border-primary/40'
              }`}>
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${membership.color} flex items-center justify-center mx-auto mb-4`}>
                    <membership.icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{membership.name}</h3>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">{membership.price}</span>
                    <span className="text-muted-foreground mb-1">{membership.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {membership.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    membership.popular
                      ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-black'
                      : 'bg-card border border-primary/30 hover:bg-primary/10'
                  }`}
                >
                  {t('membership.getStarted')}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/30">
            <h3 className="text-xl font-bold mb-2">{t('membership.includeTitle')}</h3>
            <p className="text-muted-foreground mb-6">{t('membership.includeDesc')}</p>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              {t('common.learnMore')}
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
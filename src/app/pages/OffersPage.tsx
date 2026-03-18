import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Gift, Percent, Calendar, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../translation/LanguageContex';

export function OffersPage() {
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const offers = lang === 'ar'
    ? [
        {
          title: 'باقة شعر + لحية',
          discount: 'خصم 25%',
          description: 'احصل على الخدمتين مع توفير أكبر',
          validUntil: '31 مارس 2026',
          code: 'COMBO25',
          type: 'باقة مزدوجة',
        },
        {
          title: 'علاج بروتين الشعر',
          discount: 'خصم $20',
          description: 'جدّد شعرك بعلاج احترافي مميز',
          validUntil: '25 مارس 2026',
          code: 'PROTEIN20',
          type: 'علاج',
        },
        {
          title: 'باقة تنظيف الربيع',
          discount: 'خصم 30%',
          description: 'باقة عناية متكاملة لهذا الموسم',
          validUntil: '15 أبريل 2026',
          code: 'SPRING30',
          type: 'موسمي',
        },
        {
          title: 'عرض الطلاب',
          discount: 'خصم 15%',
          description: 'يشترط وجود بطاقة طالب سارية',
          validUntil: 'مستمر',
          code: 'STUDENT15',
          type: 'خاص',
        },
        {
          title: 'ادعُ صديقًا',
          discount: 'خصم $15',
          description: 'أنت وصديقك تحصلان على خصم',
          validUntil: 'مستمر',
          code: 'REFER15',
          type: 'إحالة',
        },
        {
          title: 'عرض VIP لعطلة نهاية الأسبوع',
          discount: 'خصم 20%',
          description: 'الحجز أيام السبت والأحد فقط',
          validUntil: 'كل عطلة أسبوعية',
          code: 'WEEKEND20',
          type: 'VIP',
        },
      ]
    : [
        {
          title: 'Hair + Beard Combo',
          discount: '25% OFF',
          description: 'Get both services and save big',
          validUntil: 'March 31, 2026',
          code: 'COMBO25',
          type: 'Combo Deal',
        },
        {
          title: 'Hair Protein Treatment',
          discount: '$20 OFF',
          description: 'Revitalize your hair with premium treatment',
          validUntil: 'March 25, 2026',
          code: 'PROTEIN20',
          type: 'Treatment',
        },
        {
          title: 'Spring Cleaning Package',
          discount: '30% OFF',
          description: 'Complete grooming package for the season',
          validUntil: 'April 15, 2026',
          code: 'SPRING30',
          type: 'Seasonal',
        },
        {
          title: 'Student Special',
          discount: '15% OFF',
          description: 'Valid student ID required',
          validUntil: 'Ongoing',
          code: 'STUDENT15',
          type: 'Special',
        },
        {
          title: 'Refer a Friend',
          discount: '$15 OFF',
          description: 'Both you and your friend get discount',
          validUntil: 'Ongoing',
          code: 'REFER15',
          type: 'Referral',
        },
        {
          title: 'VIP Weekend Deal',
          discount: '20% OFF',
          description: 'Saturday & Sunday bookings only',
          validUntil: 'Every Weekend',
          code: 'WEEKEND20',
          type: 'VIP',
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
              {t('offers.title')}
            </span>
          </h1>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{t('offers.deals')}</h2>
          <p className="text-muted-foreground">{t('offers.save')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 border-primary/20 hover:border-primary/40 transition-all bg-gradient-to-br from-card/80 to-secondary/20 backdrop-blur-sm relative overflow-hidden group">
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                        {offer.type}
                      </Badge>
                      <h3 className="text-xl font-bold mb-1">{offer.title}</h3>
                      <p className="text-sm text-muted-foreground">{offer.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{offer.discount}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{t('offers.valid')} {offer.validUntil}</span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 bg-black/30 border border-primary/30 rounded-lg px-4 py-2">
                      <div className="text-xs text-muted-foreground mb-1">{t('offers.promoCode')}</div>
                      <div className="font-bold text-primary">{offer.code}</div>
                    </div>
                    <Button
                      onClick={() => navigate('/booking')}
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-black"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      {t('offers.claim')}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/40 text-center">
            <Percent className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t('offers.wantMore')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('offers.joinVip')}
            </p>
            <Button
              onClick={() => navigate('/membership')}
              className="bg-primary hover:bg-primary/90 text-black"
            >
              {t('offers.exploreMemberships')}
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
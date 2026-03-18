import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Users, Calendar, DollarSign, TrendingUp, Scissors, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useLanguage } from '../translation/LanguageContex';

export function AdminDashboard() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const stats = [
    { icon: Users, label: 'Total Clients', value: '2,547', change: '+12%', color: 'text-primary' },
    { icon: Calendar, label: "Today's Bookings", value: '24', change: '+8%', color: 'text-accent' },
    { icon: DollarSign, label: 'Revenue', value: '$12,450', change: '+15%', color: 'text-primary' },
    { icon: TrendingUp, label: 'Growth', value: '98%', change: '+5%', color: 'text-accent' },
  ];

  const recentBookings = [
    { name: 'John Doe', service: 'Haircut', time: '10:00 AM', barber: 'Michael Stone' },
    { name: 'Mike Smith', service: 'Beard Trim', time: '11:30 AM', barber: 'David Crown' },
    { name: 'Alex Johnson', service: 'Hair + Beard', time: '2:00 PM', barber: 'Alex Knight' },
  ];

  const popularServices = [
    { name: 'Haircut', count: 156, revenue: '$5,460' },
    { name: 'Hair + Beard Combo', count: 98, revenue: '$5,390' },
    { name: 'Beard Trim', count: 87, revenue: '$2,175' },
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
              {t('admin.title')}
            </span>
          </h1>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-sm text-green-400">{stat.change}</div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-primary/20">
            <TabsTrigger value="bookings">{t('admin.bookings')}</TabsTrigger>
            <TabsTrigger value="services">{t('admin.services')}</TabsTrigger>
            <TabsTrigger value="analytics">{t('admin.analytics')}</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings">
            <Card className="p-6 border-primary/20">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                {t('admin.recentBookings')}
              </h3>
              <div className="space-y-3">
                {recentBookings.map((booking, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-card to-secondary/20 border border-primary/10"
                  >
                    <div>
                      <p className="font-semibold">{booking.name}</p>
                      <p className="text-sm text-muted-foreground">{booking.service}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{booking.time}</p>
                      <p className="text-xs text-muted-foreground">{booking.barber}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card className="p-6 border-primary/20">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Scissors className="w-5 h-5 text-primary" />
                {t('admin.popularServices')}
              </h3>
              <div className="space-y-4">
                {popularServices.map((service, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{service.name}</span>
                      <span className="text-primary font-semibold">{service.revenue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          animate={{ width: `${(service.count / 156) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{service.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="p-6 border-primary/20 text-center">
              <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('admin.analyticsTitle')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('admin.analyticsDesc')}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                  <p className="text-3xl font-bold text-primary">156</p>
                  <p className="text-sm text-muted-foreground">Services This Week</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10">
                  <p className="text-3xl font-bold text-accent">$8.2k</p>
                  <p className="text-sm text-muted-foreground">Weekly Revenue</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
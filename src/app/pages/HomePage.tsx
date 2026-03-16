
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { 
  Menu, User, MessageCircle, Calendar, Sparkles, Scissors, 
  Award, Gift, Clock, TrendingUp, Star, ChevronRight,
  Settings, Shield, HelpCircle, Phone, LogOut, Users
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';



export function HomePage() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const quickServices = [
    { icon: Calendar, title: 'Quick Booking', color: 'from-primary/20 to-primary/10', action: () => navigate('/booking') },
    { icon: Star, title: 'VIP Offers', color: 'from-accent/20 to-accent/10', action: () => navigate('/offers') },
    { icon: Sparkles, title: 'Skin Care', color: 'from-secondary/40 to-secondary/20', action: () => navigate('/services') },
    { icon: Scissors, title: 'Beard Grooming', color: 'from-primary/20 to-primary/10', action: () => navigate('/services') },
    { icon: TrendingUp, title: 'Hair Treatment', color: 'from-accent/20 to-accent/10', action: () => navigate('/services') },
  ];

  const mainSections = [
    { icon: Calendar, title: 'Instant Booking', description: 'Book your appointment now', image: 'https://images.unsplash.com/photo-1768363446104-b8a0c1716600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NzMxNTUwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080', action: () => navigate('/booking') },
    { icon: Scissors, title: 'Available Services', description: 'Explore our premium services', image: 'https://images.unsplash.com/photo-1625038032200-648fbcd800d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjB0b29scyUyMHNjaXNzb3JzfGVufDF8fHx8MTc3MzI1NTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080', action: () => navigate('/services') },
    { icon: Users, title: 'Customer Gallery', description: 'View transformations', image: 'https://images.unsplash.com/photo-1721697989507-fed0b42bb453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyY3V0JTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NzMyNTUzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', action: () => navigate('/gallery') },
    { icon: Gift, title: 'Current Offers', description: 'Special deals for you', image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMjQ1ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080', action: () => navigate('/offers') },
    { icon: Award, title: 'VIP Membership', description: 'Exclusive benefits', image: 'https://images.unsplash.com/photo-1767796704750-d685fb2a2143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWFyZCUyMGdyb29taW5nfGVufDF8fHx8MTc3MzE3NTE2OHww&ixlib=rb-4.1.0&q=80&w=1080', action: () => navigate('/membership') },
  ];

  const menuItems = [

    //{ icon: Settings, title: 'Settings' },

    { icon: Shield, title: 'Privacy Policy' },
    { icon: HelpCircle, title: 'Help Center' },
    { icon: Phone, title: 'Contact Support' },
    { icon: LogOut, title: 'Log Out' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520]">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-primary/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Menu Button */}
          <Sheet open={showMenu} onOpenChange={setShowMenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Menu className="w-6 h-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-card border-primary/20">
              <div className="space-y-6 mt-8">
                <h2 className="text-xl font-bold text-primary">Menu</h2>
                <div className="space-y-2">
                  {menuItems.map((item) => (
                    <Button
                      key={item.title}
                      variant="ghost"
                      className="w-full justify-start hover:bg-primary/10"
                      onClick={() => item.title === 'Log Out' && navigate('/entry')}
                    >
                      <item.icon className="w-5 h-5 mr-3 text-primary" />
                      {item.title}
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <motion.h1
            className="text-2xl font-bold absolute left-1/2 -translate-x-1/2"
            animate={{
              textShadow: [
                "0 0 10px rgba(212, 175, 55, 0.5)",
                "0 0 20px rgba(212, 175, 55, 0.8)",
                "0 0 10px rgba(212, 175, 55, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              A & M 💈✂️
            </span>
          </motion.h1>





          {/* Profile Button */}
          <Sheet open={showProfile} onOpenChange={setShowProfile}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border-2 border-primary/50 hover:border-primary"
              >
                <User className="w-5 h-5 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-primary/20">
              <div className="space-y-6 mt-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold">Guest User</h3>
                  <p className="text-sm text-muted-foreground">Premium Member</p>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-primary/10"
                    onClick={() => navigate('/profile')}
                  >
                    <User className="w-5 h-5 mr-3 text-primary" />
                    Edit Profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-primary/10"
                  >
                    <Award className="w-5 h-5 mr-3 text-primary" />
                    Rewards: 250 pts
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-primary/10"
                    onClick={() => navigate('/offers')}
                  >
                    <Gift className="w-5 h-5 mr-3 text-primary" />
                    Special Offers
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-primary/10"
                  >
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    Invite Friends
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">



        


        {/* AI Chat Assistant */}
      {/*
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card
            className="p-6 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/40 cursor-pointer hover:border-primary/60 transition-all group relative overflow-hidden"
            onClick={() => {}}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-black" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">AI Assistant</h3>
                <p className="text-sm text-muted-foreground">How can I help you today?</p>
              </div>

              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </Card>
        </motion.div>  }






        {/* Quick Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Quick Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  className={`p-4 bg-gradient-to-br ${service.color} border-primary/20 hover:border-primary/40 cursor-pointer transition-all text-center group`}
                  onClick={service.action}
                  style={{ transform: "perspective(1000px)" }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-3"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <p className="text-sm font-medium">{service.title}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>




        {/* Main Sections */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mainSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="overflow-hidden border-primary/20 hover:border-primary/40 cursor-pointer transition-all group bg-card/50 backdrop-blur-sm"
                  onClick={section.action}
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center">
                          <section.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{section.title}</h3>
                          <p className="text-xs text-muted-foreground">{section.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>





        {/* Stats Banner */}
        {/*
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-6 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border-primary/30">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">2.5k+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Expert Barbers</p>
              </div>
            </div>
          </Card>
        </motion.div>
          */}



      </div>
    </div>
  );
}
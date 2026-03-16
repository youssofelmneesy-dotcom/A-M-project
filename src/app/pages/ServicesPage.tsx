import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Scissors, Clock, DollarSign, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      category: 'Haircuts',
      items: [
        {
          name: 'Classic Haircut',
          price: '$35',
          duration: '30 min',
          description: 'Professional haircut with styling',
          image: 'https://images.unsplash.com/photo-1768363446104-b8a0c1716600?w=400',
        },
        {
          name: 'Premium Fade',
          price: '$45',
          duration: '40 min',
          description: 'Modern fade with precision detailing',
          image: 'https://images.unsplash.com/photo-1768363446104-b8a0c1716600?w=400',
        },
        {
          name: 'mullet',
          price: '$70',
          duration: '50 min',
          description: 'Professional haircut with styling',
          image: 'https://images.unsplash.com/photo-1768363446104-b8a0c1716600?w=400',
        },
      ],
    },
    {
      category: 'Beard',
      items: [
        {
          name: 'Beard Trim',
          price: '$25',
          duration: '20 min',
          description: 'Precision beard shaping and trim',
          image: 'https://images.unsplash.com/photo-1767796704750-d685fb2a2143?w=400',
        },
        {
          name: 'Beard Grooming',
          price: '$35',
          duration: '30 min',
          description: 'Complete beard care with hot towel',
          image: 'https://images.unsplash.com/photo-1767796704750-d685fb2a2143?w=400',
        },
      ],
    },
    {
      category: 'Treatments',
      items: [
        {
          name: 'Hair Protein Treatment',
          price: '$80',
          duration: '60 min',
          description: 'Deep conditioning and strengthening',
          image: 'https://images.unsplash.com/photo-1625038032200-648fbcd800d0?w=400',
        },
        {
          name: 'Hair Coloring',
          price: '$120',
          duration: '90 min',
          description: 'Professional hair coloring service',
          image: 'https://images.unsplash.com/photo-1625038032200-648fbcd800d0?w=400',
        },
      ],
    },
    {
      category: 'Skincare',
      items: [
        {
          name: 'Skin Cleaning',
          price: '$60',
          duration: '45 min',
          description: 'Deep facial cleansing and care',
          image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?w=400',
        },
        {
          name: 'Face Care Package',
          price: '$90',
          duration: '60 min',
          description: 'Complete facial treatment',
          image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?w=400',
        },
      ],
    },
    {
      category: 'VIP',
      items: [
        {
          name: 'VIP Grooming Package',
          price: '$150',
          duration: '120 min',
          description: 'Complete grooming experience',
          image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?w=400',
        },
        {
          name: 'Platinum Package',
          price: '$200',
          duration: '150 min',
          description: 'Ultimate luxury grooming',
          image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?w=400',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520]">
      {/* Header */}
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
              Our Services
            </span>
          </h1>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs defaultValue="Haircuts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-card/50 border border-primary/20 p-1">
            {services.map((category) => (
              <TabsTrigger
                key={category.category}
                value={category.category}
                className="data-[state=active]:bg-primary data-[state=active]:text-black"
              >
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all bg-card/50 backdrop-blur-sm group">
                      <div className="relative h-48 overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <ImageWithFallback
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        
                        {/* Floating Badge */}
                        <motion.div
                          className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-semibold"
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {service.price}
                        </motion.div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <DollarSign className="w-4 h-4" />
                            <span>{service.price.slice(1)}</span>
                          </div>
                        </div>

                        <Button
                          onClick={() => navigate('/booking')}
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-black"
                        >
                          <Scissors className="w-4 h-4 mr-2" />
                          Book Now
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Special Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/40 text-center">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">First Time Customer?</h3>
            <p className="text-muted-foreground mb-4">
              Get 20% off on your first service
            </p>
            <Button
              onClick={() => navigate('/booking')}
              className="bg-primary hover:bg-primary/90 text-black"
            >
              Claim Offer
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
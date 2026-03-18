
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../translation/LanguageContex';

export function GalleryPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const galleryTitles = t('gallery.items') as string[];

  const gallery = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: `https://images.unsplash.com/photo-${['1768363446104-b8a0c1716600', '1767796704750-d685fb2a2143', '1721697989507-fed0b42bb453'][i % 3]}?w=400`,
    likes: Math.floor(Math.random() * 100) + 50,
    title: galleryTitles[i % 3],
  }));

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
              {t('gallery.title')}
            </span>
          </h1>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all group">
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-semibold mb-2">{item.title}</p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-sm">
                          <Heart className="w-4 h-4 text-primary" />
                          <span>{item.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm">
                          <Share2 className="w-4 h-4 text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
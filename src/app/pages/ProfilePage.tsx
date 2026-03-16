import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { ArrowLeft, User, Mail, Phone, MapPin, Edit, Award, Calendar, Gift } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export function ProfilePage() {
  const navigate = useNavigate();

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
              Profile
            </span>
          </h1>
        </div>
      </motion.header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Card className="p-6 border-primary/20 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-1">Guest User</h2>
            <p className="text-muted-foreground">Premium Member</p>
            <Button className="mt-4 bg-primary hover:bg-primary/90 text-black">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </Card>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Calendar, label: 'Bookings', value: '24' },
            { icon: Award, label: 'Points', value: '250' },
            { icon: Gift, label: 'Rewards', value: '5' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 border-primary/20 text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Profile Info */}
        <Card className="p-6 border-primary/20">
          <h3 className="font-semibold text-lg mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <div className="relative mt-1.5">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                <Input className="pl-10 bg-input-background border-primary/20" defaultValue="Guest User" />
              </div>
            </div>
            <div>
              <Label>Email</Label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                <Input className="pl-10 bg-input-background border-primary/20" defaultValue="guest@example.com" />
              </div>
            </div>
            <div>
              <Label>Phone</Label>
              <div className="relative mt-1.5">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                <Input className="pl-10 bg-input-background border-primary/20" defaultValue="+1 234 567 8900" />
              </div>
            </div>
            <div>
              <Label>Location</Label>
              <div className="relative mt-1.5">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                <Input className="pl-10 bg-input-background border-primary/20" defaultValue="New York, NY" />
              </div>
            </div>
          </div>
          <Button className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-black">
            Save Changes
          </Button>
        </Card>
      </div>
    </div>
  );
}
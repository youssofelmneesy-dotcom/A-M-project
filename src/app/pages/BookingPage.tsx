
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { ArrowLeft, Scissors, Users, Calendar as CalendarIcon, Clock, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Calendar } from '../components/ui/calendar';
import { toast } from 'sonner';
import { useAuth } from '../auth';
import { useLanguage } from '../translation/LanguageContex';
import { apiGet, apiPost } from '../api/client';
import { Barber, Service } from '../api/types';

export function BookingPage() {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const { lang, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [services, setServices] = useState<Service[]>([]);
  const [barbers, setBarbers] = useState<Barber[]>([]);

  useEffect(() => {
    async function loadBookingData() {
      try {
        const [barbersData, servicesData] = await Promise.all([
          apiGet<Barber[]>('/barbers'),
          apiGet<Service[]>('/services'),
        ]);
        setBarbers(barbersData);
        setServices(servicesData);
      } catch {
        toast.error(t('booking.loadDataFailed'));
      }
    }

    loadBookingData();
  }, [t]);



  const timeSlots = [
    '12:00', '12:30', '1:00', '1:30', '2:00', '2:30',
    '3:00', '3:30', '4:00', '4:30', '5:00', '5:30',
    '6:00', '6:30', '7:00', '7:30', '8:00', '8:30',
    '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '1:00', '1:30', '2:00', '2:30',
  ];



  const confirmBooking = async () => {
    if (!user) {
      toast.error(t('booking.loginToConfirm'));
      navigate('/login');
      return;
    }

    if (!selectedService || !selectedBarber || !selectedDate || !selectedTime) {
      toast.error(t('booking.completeSteps'));
      return;
    }

    const selectedServiceData = services.find((service) => service._id === selectedService);
    const selectedBarberData = barbers.find((barber) => barber._id === selectedBarber);

    try {
      await apiPost('/bookings', {
        serviceId: selectedService,
        barberId: selectedBarber,
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
        notes: `${selectedServiceData?.name ?? ''} / ${selectedBarberData?.name ?? ''}`.trim(),
      }, token || undefined);

      toast.success(t('booking.confirmed'), {
        description: t('booking.saved'),
      });
      setTimeout(() => navigate('/home'), 2000);
    } catch {
      toast.error(t('booking.saveFailed'));
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1410] to-[#2a2520] pb-20">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-primary/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => step > 1 ? setStep(step - 1) : navigate('/home')}>
            <ArrowLeft className="w-6 h-6 text-primary" />
          </Button>
          <h1 className="text-xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('booking.appointment')}
            </span>
          </h1>
        </div>
      </motion.header>



      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  step >= s ? 'border-primary bg-primary text-black' : 'border-primary/30 text-muted-foreground'
                }`}>
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 4 && <div className={`flex-1 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-primary/20'}`} />}
              </div>
            ))}
          </div>


          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{t('booking.service')}</span>
            <span>{t('booking.barber')}</span>
            <span>{t('booking.date')}</span>
            <span>{t('booking.time')}</span>
          </div>
        </div>



        {/* Step 1: Select Service */}
        {step === 1 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scissors className="w-6 h-6 text-primary" />
              {t('booking.selectService')}
            </h2>
            <div className="grid gap-3">
              {services.map((service) => (
                <motion.div
                  key={service._id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`p-4 cursor-pointer transition-all ${
                      selectedService === service._id
                        ? 'border-primary bg-primary/10'
                        : 'border-primary/20 hover:border-primary/40'
                    }`}
                    onClick={() => {
                      setSelectedService(service._id);
                      setStep(2);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {service.durationMinutes} {lang === 'ar' ? 'دقيقة' : 'min'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">${service.price}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}



        {/* Step 2: Select Barber */}
        {step === 2 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              {t('booking.chooseBarber')}
            </h2>
            <div className="grid gap-3">
              {barbers.map((barber) => (
                <motion.div
                  key={barber._id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`p-4 cursor-pointer transition-all ${
                      selectedBarber === barber._id
                        ? 'border-primary bg-primary/10'
                        : 'border-primary/20 hover:border-primary/40'
                    }`}
                    onClick={() => {
                      setSelectedBarber(barber._id);
                      setStep(3);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                        <Users className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{barber.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {barber.experienceYears} {lang === 'ar' ? 'سنة' : 'years'}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-primary">★</span>
                          <span className="font-semibold">{barber.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}



        {/* Step 3: Select Date */}
        {step === 3 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CalendarIcon className="w-6 h-6 text-primary" />
              {t('booking.selectDate')}
            </h2>
            <Card className="p-6 border-primary/20">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  if (date) setStep(4);
                }}
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today;
                }}
                className="rounded-md mx-auto"
              />
            </Card>
          </motion.div>
        )}

        {/* Step 4: Select Time */}
        {step === 4 && (
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              {t('booking.chooseTime')}
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time, index) => (
                <motion.div
                  key={`${time}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={selectedTime === time ? "default" : "outline"}
                    className={`w-full ${
                      selectedTime === time
                        ? 'bg-primary text-black'
                        : 'border-primary/30 hover:border-primary'
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                </motion.div>
              ))}
            </div>

            {selectedTime && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-6"
              >
                <Button
                  onClick={confirmBooking}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-black py-6 text-lg"
                >
                  {t('booking.confirm')}
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}


import { useState, useEffect } from 'react';
import NewYearHeader from '@/components/NewYearHeader';
import NewYearContent from '@/components/NewYearContent';
import NewYearBooking from '@/components/NewYearBooking';
import NewYearFooter from '@/components/NewYearFooter';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <NewYearHeader scrollToBooking={scrollToBooking} />
      <NewYearContent />
      <NewYearBooking timeLeft={timeLeft} />
      <NewYearFooter />
    </div>
  );
};

export default Index;

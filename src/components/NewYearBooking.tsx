import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface NewYearBookingProps {
  timeLeft: TimeLeft;
}

const NewYearBooking = ({ timeLeft }: NewYearBookingProps) => {
  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-primary">До Нового года осталось</h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-16" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: 'Дней' },
              { value: timeLeft.hours, label: 'Часов' },
              { value: timeLeft.minutes, label: 'Минут' },
              { value: timeLeft.seconds, label: 'Секунд' },
            ].map((item, idx) => (
              <Card key={idx} className="bg-primary text-white">
                <CardContent className="p-6 md:p-8">
                  <p className="text-4xl md:text-6xl font-bold mb-2">{item.value}</p>
                  <p className="text-lg md:text-xl">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-primary text-white winter-pattern">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">Бронирование</h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-12" />
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white text-lg">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white text-lg">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white text-lg">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="guests" className="text-white text-lg">Количество гостей</Label>
                  <Input
                    id="guests"
                    type="number"
                    placeholder="2"
                    min="1"
                    className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div>
                  <Label htmlFor="package" className="text-white text-lg">Выберите пакет</Label>
                  <select
                    id="package"
                    className="mt-2 w-full bg-white/20 border-white/30 text-white rounded-md p-3"
                  >
                    <option value="" className="text-primary">Выберите пакет</option>
                    <option value="vip" className="text-primary">VIP - 24 000 ₽</option>
                    <option value="lux" className="text-primary">Люкс - 12 000 ₽</option>
                    <option value="standard" className="text-primary">Стандарт - 7 000 ₽</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-primary text-lg py-6"
                >
                  Забронировать место
                </Button>

                <p className="text-center text-white/70 text-sm">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default NewYearBooking;

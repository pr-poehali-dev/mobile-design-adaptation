import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm text-white py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">❄️ НОВОГОДНЯЯ НОЧЬ</div>
          <nav className="hidden md:flex gap-6">
            <a href="#program" className="hover:text-secondary transition-colors">Программа</a>
            <a href="#prices" className="hover:text-secondary transition-colors">Цены</a>
            <a href="#menu" className="hover:text-secondary transition-colors">Меню</a>
            <a href="#gallery" className="hover:text-secondary transition-colors">Галерея</a>
          </nav>
          <Button onClick={scrollToBooking} className="bg-secondary hover:bg-secondary/90 text-primary">
            Забронировать
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 58, 82, 0.5), rgba(26, 58, 82, 0.7)), url('https://cdn.poehali.dev/files/86e0e811-de7c-4cd4-9358-079ca8bcb2cb.jpg')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl">
            НОВЫЙ ГОД — В СЕРДЦЕ ГОР
          </h1>
          <p className="text-xl md:text-3xl mb-4 drop-shadow-lg">31 ДЕКАБРЯ ОТ ЗАКАТА ДО РАССВЕТА</p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Встретьте самую волшебную ночь года в атмосфере роскоши и заснеженных вершин
          </p>
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-primary text-lg px-8 py-6 shadow-2xl"
          >
            Забронировать место
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-white" />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-primary">Новогодняя ночь</h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-8" />
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            В эту особенную ночь мы откроем для вас мир изысканной кухни, живой музыки и незабываемых впечатлений.
            Наш ресторан, расположенный в самом сердце горного курорта, создаст для вас атмосферу настоящего праздника.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Профессиональные артисты, великолепное меню от шеф-повара и панорамный вид на заснеженные вершины
            сделают эту ночь по-настоящему волшебной.
          </p>
          <Button onClick={scrollToBooking} className="bg-secondary hover:bg-secondary/90 text-primary">
            Забронировать столик
          </Button>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-primary text-white winter-pattern">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">Программа вечера</h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-16" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Clock" size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">18:00 - 19:00</h3>
                    <p className="text-white/80">Встреча гостей, приветственное шампанское</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Music" size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">19:00 - 21:00</h3>
                    <p className="text-white/80">Живая музыка, праздничный ужин</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Sparkles" size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">21:00 - 23:30</h3>
                    <p className="text-white/80">Шоу-программа, выступление артистов</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="PartyPopper" size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">00:00</h3>
                    <p className="text-white/80">Новогодний тост, салют, дискотека до утра</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Gift" size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">01:00 - 03:00</h3>
                    <p className="text-white/80">Розыгрыш призов, фотозона</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Coffee" size={32} className="text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">05:00 - 07:00</h3>
                    <p className="text-white/80">Утренний кофе, встреча рассвета</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-primary">Стоимость билетов</h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-16" />

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Пакеты для активного отдыха</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { price: '24 000 ₽', icon: '🏂', name: 'Премиум' },
                { price: '12 000 ₽', icon: '🎿', name: 'Стандарт' },
                { price: '7 000 ₽', icon: '⛷️', name: 'Базовый' },
              ].map((item, idx) => (
                <Card key={idx} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="text-8xl mb-4">{item.icon}</div>
                    <h4 className="text-2xl font-bold mb-4 text-primary">{item.name}</h4>
                    <div className="inline-block bg-primary text-white rounded-full px-6 py-3">
                      <p className="text-3xl font-bold">{item.price}</p>
                    </div>
                    <ul className="mt-6 space-y-2 text-left text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-secondary" />
                        <span>Новогодний ужин</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-secondary" />
                        <span>Безлимитный бар</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-secondary" />
                        <span>Развлекательная программа</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Классические пакеты</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { price: '24 000 ₽', name: 'VIP' },
                { price: '12 000 ₽', name: 'Люкс' },
                { price: '7 000 ₽', name: 'Стандарт' },
              ].map((item, idx) => (
                <Card key={idx} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="text-8xl mb-4">🪆</div>
                    <h4 className="text-2xl font-bold mb-4 text-primary">{item.name}</h4>
                    <div className="inline-block bg-primary text-white rounded-full px-6 py-3">
                      <p className="text-3xl font-bold">{item.price}</p>
                    </div>
                    <ul className="mt-6 space-y-2 text-left text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-secondary" />
                        <span>Праздничное меню</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-secondary" />
                        <span>Напитки премиум-класса</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-secondary" />
                        <span>Шоу-программа</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 px-4 bg-primary text-white winter-pattern">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">Новогоднее меню</h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-16" />

          <Tabs defaultValue="salads" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-white/10">
              <TabsTrigger value="salads" className="text-white data-[state=active]:bg-secondary data-[state=active]:text-primary">
                Закуски
              </TabsTrigger>
              <TabsTrigger value="hot" className="text-white data-[state=active]:bg-secondary data-[state=active]:text-primary">
                Горячее
              </TabsTrigger>
              <TabsTrigger value="desserts" className="text-white data-[state=active]:bg-secondary data-[state=active]:text-primary">
                Десерты
              </TabsTrigger>
              <TabsTrigger value="drinks" className="text-white data-[state=active]:bg-secondary data-[state=active]:text-primary">
                Напитки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="salads" className="space-y-4">
              {[
                { name: 'Оливье по-царски', desc: 'С камчатским крабом и икрой', price: 'В составе меню' },
                { name: 'Мясное ассорти', desc: 'Буженина, язык, карпаччо', price: 'В составе меню' },
                { name: 'Рыбная тарелка', desc: 'Слабосоленая семга, форель, осетрина', price: 'В составе меню' },
                { name: 'Сырная тарелка', desc: 'Премиальные европейские сыры', price: 'В составе меню' },
              ].map((item, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                    <p className="text-secondary font-bold">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="hot" className="space-y-4">
              {[
                { name: 'Филе-миньон', desc: 'С трюфельным соусом', price: 'В составе меню' },
                { name: 'Утиная грудка', desc: 'С ягодным конфи', price: 'В составе меню' },
                { name: 'Дорадо на гриле', desc: 'С овощами и средиземноморскими травами', price: 'В составе меню' },
                { name: 'Стерлядь', desc: 'Запеченная с лимоном и розмарином', price: 'В составе меню' },
              ].map((item, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                    <p className="text-secondary font-bold">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="desserts" className="space-y-4">
              {[
                { name: 'Торт "Новогодняя сказка"', desc: 'Авторский десерт от шеф-кондитера', price: 'В составе меню' },
                { name: 'Крем-брюле', desc: 'С ванилью Мадагаскара', price: 'В составе меню' },
                { name: 'Фруктовое ассорти', desc: 'Экзотические фрукты', price: 'В составе меню' },
                { name: 'Шоколадный фондан', desc: 'С ванильным мороженым', price: 'В составе меню' },
              ].map((item, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                    <p className="text-secondary font-bold">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="drinks" className="space-y-4">
              {[
                { name: 'Шампанское', desc: 'Dom Pérignon, Moët & Chandon', price: 'Безлимитно' },
                { name: 'Вина', desc: 'Премиальная коллекция', price: 'Безлимитно' },
                { name: 'Крепкие напитки', desc: 'Виски, коньяк, водка премиум', price: 'Безлимитно' },
                { name: 'Безалкогольные напитки', desc: 'Соки, морсы, лимонады', price: 'Безлимитно' },
              ].map((item, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                    <p className="text-secondary font-bold">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

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

      <section id="gallery" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-primary">Наш ресторан</h2>
          <div className="h-1 w-32 bg-secondary mx-auto mb-16" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Главный зал', desc: 'Панорамный вид на горы' },
              { title: 'Интерьер', desc: 'Элегантная обстановка' },
              { title: 'Терраса', desc: 'Открытая площадка' },
            ].map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <Icon name="Image" size={64} className="text-white/50 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
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

      <footer className="bg-primary/95 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={20} className="text-secondary" />
                  +7 (800) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={20} className="text-secondary" />
                  info@newyear.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-secondary" />
                  Горный курорт, здание №1
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Время работы</h3>
              <div className="space-y-2">
                <p>31 декабря: 18:00 - 07:00</p>
                <p>Бронирование: 24/7</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-secondary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/70">
              © 2025 Новогодняя ночь в горах. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

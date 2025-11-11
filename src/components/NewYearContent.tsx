import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const NewYearContent = () => {
  return (
    <>
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
    </>
  );
};

export default NewYearContent;

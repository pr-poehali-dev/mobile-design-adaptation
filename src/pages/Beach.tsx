import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Beach = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="beach-gradient text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Icon name="Waves" size={40} className="text-white" />
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-white/20 text-white border-white/40">
              Самый южный пляж России
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Пляж города-отеля<br />«Бархатные сезоны»
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Побережье Черного моря с кристально чистой водой и захватывающим видом на Кавказские горы
          </p>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Добро пожаловать на пляж города-отеля «Бархатные сезоны» – самый южный пляж России на побережье Черного моря! 
              Здесь вы найдете то, что так давно искали: кристально чистая вода, захватывающий вид на Кавказские горы, 
              хорошо развитая инфраструктура, учитывающая потребности гостей с ограниченными возможностями.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-8">
              Наше стремление к качеству, безопасности и охране окружающей среды принесло нам не одну, 
              а сразу две престижные награды:
            </p>

            <Card className="mb-8 border-secondary/30 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-4 rounded-full">
                    <Icon name="Award" size={32} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-primary">Синий флаг</h3>
                    <p className="text-foreground/80 mb-3">
                      Международная награда за соответствие высоким экологическим стандартам
                    </p>
                    <a 
                      href="https://bh-s.ru/upload/documents/svideteltvo_plyazh.jpeg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold transition-colors"
                    >
                      <Icon name="FileText" size={20} />
                      Свидетельство о присвоении 1 категории пляжа
                      <Icon name="ExternalLink" size={16} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed text-foreground/90 mb-12">
              Благодаря современному оборудованию и комфортной атмосфере у нас вы получите тот пляжный отдых, 
              который так долго ждали.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-xl transition-shadow border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Droplets" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Чистая вода</h3>
                <p className="text-muted-foreground">
                  Кристально чистое побережье Черного моря
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mountain" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Горный вид</h3>
                <p className="text-muted-foreground">
                  Захватывающая панорама Кавказских гор
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Для всех</h3>
                <p className="text-muted-foreground">
                  Инфраструктура для гостей с ограниченными возможностями
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="banner-style border-l-4 border-secondary mb-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={28} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    <strong>Если вы забронировали номер на нашем официальном сайте</strong> или напрямую через отдел бронирования 
                    города-отеля, то для Вас предусмотрено пользование пляжным инвентарем (свободный шезлонг и зонт) 
                    <strong> без дополнительной оплаты</strong>.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Если бронирование было осуществлено на стороннем ресурсе, то информацию о дополнительных услугах, 
                    которые предоставляются без доплаты, Вы можете уточнить у продавца услуг.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">Прайс на пляжные услуги</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/upload/medialibrary/7ef/f7utzlj7m9ybwamw82x1yo8q3hc7cxhj/Prays-na-uslugi-na-plyazhnoy-territorii.jpg" 
                alt="Прайс на пляжные услуги"
                className="w-full h-auto"
              />
            </div>
          </div>

          <Card className="bg-destructive/5 border-destructive/30">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Icon name="AlertCircle" size={32} className="text-destructive" />
                <h3 className="text-2xl font-bold text-destructive">Важная информация</h3>
              </div>
              <p className="text-xl text-destructive/90 font-semibold">
                Пляж закрыт для купания до начала летнего сезона 2025 года
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="beach-gradient text-white py-12 px-4 mt-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Phone" size={24} />
                Контакты
              </h3>
              <p className="text-white/80">
                Свяжитесь с администрацией<br />
                города-отеля для получения<br />
                дополнительной информации
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={24} />
                Расположение
              </h3>
              <p className="text-white/80">
                Город-отель<br />
                «Бархатные сезоны»<br />
                Черноморское побережье
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Award" size={24} />
                Награды
              </h3>
              <p className="text-white/80">
                Синий флаг<br />
                Пляж 1 категории<br />
                Экологический стандарт
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/70">
              © 2025 Город-отель «Бархатные сезоны». Самый южный пляж России.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Beach;

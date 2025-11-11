import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NewYearHeaderProps {
  scrollToBooking: () => void;
}

const NewYearHeader = ({ scrollToBooking }: NewYearHeaderProps) => {
  return (
    <>
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
    </>
  );
};

export default NewYearHeader;

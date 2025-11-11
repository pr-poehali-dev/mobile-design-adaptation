import Icon from '@/components/ui/icon';

const NewYearFooter = () => {
  return (
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
  );
};

export default NewYearFooter;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Укладка керамической плитки",
      description: "Профессиональная укладка в ванных комнатах и кухнях",
      price: "от 1200 ₽/м²",
      icon: "Home"
    },
    {
      title: "Укладка керамогранита",
      description: "Долговечные полы для жилых и коммерческих помещений",
      price: "от 1500 ₽/м²",
      icon: "Building"
    },
    {
      title: "Мозаичные работы",
      description: "Декоративные элементы и художественная отделка",
      price: "от 2500 ₽/м²",
      icon: "Palette"
    },
    {
      title: "Гидроизоляция",
      description: "Надежная защита от влаги под плиткой",
      price: "от 800 ₽/м²",
      icon: "Shield"
    },
    {
      title: "Затирка швов",
      description: "Качественная обработка швов современными материалами",
      price: "от 300 ₽/м²",
      icon: "Brush"
    },
    {
      title: "Демонтаж старой плитки",
      description: "Аккуратный демонтаж с подготовкой поверхности",
      price: "от 400 ₽/м²",
      icon: "Hammer"
    }
  ];

  const portfolio = [
    {
      image: "/img/23308b91-b510-47d6-abde-cff233d85140.jpg",
      title: "Современная ванная комната",
      description: "Керамическая плитка премиум класса"
    },
    {
      image: "/img/836d9865-c032-4d0a-9ee7-cc51afe86a36.jpg",
      title: "Кухонный фартук",
      description: "Геометрическая мозаика"
    },
    {
      image: "/img/7be5e8bb-0568-4a48-b67d-3b1fffd9ccc9.jpg",
      title: "Напольное покрытие",
      description: "Керамогранит под дерево"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Home" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ТайлМастер</h1>
              <p className="text-sm text-gray-500">Анапа</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Phone" size={16} />
              <span>+7 (918) 123-45-67</span>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Работаем в Анапе и окрестностях
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Профессиональные
            <span className="text-primary block">плиточные работы</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Качественная укладка плитки любой сложности. Гарантия 3 года. 
            Более 500 выполненных проектов в Анапе.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Image" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-gray-600">Выполненных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3 года</div>
              <div className="text-sm text-gray-600">Гарантия на работы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-gray-600">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Полный спектр плиточных работ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От простой укладки до сложных дизайнерских решений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Портфолио
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Примеры наших работ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждый проект выполнен с особым вниманием к деталям
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ лет опыта</h3>
              <p className="text-gray-600">Профессиональная команда с многолетним опытом</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия 3 года</h3>
              <p className="text-gray-600">Уверены в качестве - даем длительную гарантию</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Точные сроки</h3>
              <p className="text-gray-600">Выполняем работы строго в установленные сроки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Премиум материалы</h3>
              <p className="text-gray-600">Работаем только с проверенными брендами</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Готовы начать ваш проект?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Получите бесплатную консультацию и расчет стоимости прямо сейчас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Home" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">ТайлМастер</h3>
                  <p className="text-sm opacity-70">Анапа</p>
                </div>
              </div>
              <p className="text-sm opacity-70 mb-4">
                Профессиональные плиточные работы любой сложности в Анапе и окрестностях
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (918) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@tilemaster-anapa.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Анапа, ул. Крымская, 100</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <div className="text-sm space-y-1">
                <p>Пн-Пт: 8:00 - 18:00</p>
                <p>Сб: 9:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-70">
            <p>&copy; 2024 ТайлМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
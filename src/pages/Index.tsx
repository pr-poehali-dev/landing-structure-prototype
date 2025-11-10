import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Trophy" size={32} />
            <span className="text-2xl font-bold">SportPro</span>
          </div>
          <ul className="hidden md:flex gap-8 items-center">
            <li><a href="#programs" className="hover:text-accent transition-colors">Программы</a></li>
            <li><a href="#benefits" className="hover:text-accent transition-colors">Преимущества</a></li>
            <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            <li><Button variant="secondary" className="bg-accent hover:bg-accent/90">Начать тренировки</Button></li>
          </ul>
          <button className="md:hidden">
            <Icon name="Menu" size={28} />
          </button>
        </nav>
      </header>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/27a93d32-bbe1-4f45-baf0-1298da6e1155/files/37481f53-56e1-4f9f-9f16-f308cd5778f3.jpg" 
            alt="Fitness gym" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Достигай своих <span className="text-accent">спортивных целей</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Профессиональные тренировки, персональный подход и результаты уже через месяц
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 shadow-xl">
                <Icon name="Zap" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Почему выбирают нас
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Мы предлагаем комплексный подход к вашему спортивному развитию
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Users", title: "Опытные тренеры", description: "Сертифицированные специалисты с опытом работы более 10 лет" },
              { icon: "Target", title: "Персональный подход", description: "Программы адаптированы под ваши цели и уровень подготовки" },
              { icon: "TrendingUp", title: "Видимый результат", description: "Первые изменения уже через 2-3 недели занятий" },
              { icon: "Award", title: "Современное оборудование", description: "Оснащение по последним мировым стандартам" }
            ].map((benefit, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mb-4 shadow-md">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/27a93d32-bbe1-4f45-baf0-1298da6e1155/files/e7d6bdab-0a2c-4f66-941b-bfce005cfc43.jpg" 
            alt="Running" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Программы тренировок
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Выберите направление, которое подходит именно вам
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Dumbbell",
                title: "Силовые тренировки",
                description: "Набор массы, работа с весами, функциональный тренинг",
                features: ["3-5 раз в неделю", "Индивидуальный план", "Контроль питания"],
                price: "от 3 000 ₽/мес",
                image: "https://cdn.poehali.dev/projects/27a93d32-bbe1-4f45-baf0-1298da6e1155/files/37481f53-56e1-4f9f-9f16-f308cd5778f3.jpg"
              },
              {
                icon: "Heart",
                title: "Кардио и выносливость",
                description: "Бег, плавание, велотренировки для улучшения здоровья",
                features: ["4-6 раз в неделю", "Групповые занятия", "Трекинг прогресса"],
                price: "от 2 500 ₽/мес",
                popular: true,
                image: "https://cdn.poehali.dev/projects/27a93d32-bbe1-4f45-baf0-1298da6e1155/files/e7d6bdab-0a2c-4f66-941b-bfce005cfc43.jpg"
              },
              {
                icon: "Sparkles",
                title: "Йога и растяжка",
                description: "Гибкость, баланс, ментальное здоровье",
                features: ["2-3 раза в неделю", "Медитации", "Онлайн доступ"],
                price: "от 2 000 ₽/мес",
                image: "https://cdn.poehali.dev/projects/27a93d32-bbe1-4f45-baf0-1298da6e1155/files/c6fbe0fc-e375-4d98-acb1-af2eadc6be8f.jpg"
              }
            ].map((program, idx) => (
              <Card key={idx} className={`relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all ${program.popular ? 'border-accent border-2 scale-105' : 'border-0'}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {program.popular && (
                    <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Популярно
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Icon name={program.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{program.title}</CardTitle>
                  <CardDescription className="text-center text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle" size={20} className="text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center pt-4 border-t">
                    <p className="text-2xl font-bold text-foreground mb-4">{program.price}</p>
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о тренировках
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Нужна ли специальная подготовка для начала занятий?",
                  answer: "Нет, наши программы подходят для любого уровня подготовки. Тренер подберет нагрузку индивидуально под ваши возможности."
                },
                {
                  question: "Как быстро я увижу результаты?",
                  answer: "При регулярных тренировках 3-4 раза в неделю первые изменения заметны через 2-3 недели. Значительные результаты появляются через 2-3 месяца."
                },
                {
                  question: "Можно ли совмещать несколько программ?",
                  answer: "Да! Многие клиенты комбинируют силовые тренировки с кардио или йогой. Тренер поможет составить оптимальное расписание."
                },
                {
                  question: "Что входит в стоимость программы?",
                  answer: "В стоимость включены: персональный план тренировок, консультации тренера, доступ к залу и оборудованию, трекинг прогресса в приложении."
                },
                {
                  question: "Есть ли пробное занятие?",
                  answer: "Да, мы предлагаем бесплатное первое занятие, чтобы вы могли познакомиться с тренером и попробовать наш подход."
                }
              ].map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-0 rounded-lg px-6 bg-white shadow-md hover:shadow-lg transition-shadow">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Trophy" size={28} />
                <span className="text-xl font-bold">SportPro</span>
              </div>
              <p className="text-sm opacity-90">
                Профессиональный подход к вашему здоровью и спортивному развитию
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Программы</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">Силовые тренировки</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Кардио</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Йога</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Персональные занятия</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Тренеры</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@sportpro.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Спортивная 10</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">© 2024 SportPro. Все права защищены</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
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

      <section className="relative bg-gradient-to-br from-primary/10 via-white to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Достигай своих <span className="text-accent">спортивных целей</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Профессиональные тренировки, персональный подход и результаты уже через месяц
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
                <Icon name="Zap" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
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
              <Card key={idx} className="border-2 hover:border-accent transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={32} className="text-accent" />
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

      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
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
                price: "от 3 000 ₽/мес"
              },
              {
                icon: "Heart",
                title: "Кардио и выносливость",
                description: "Бег, плавание, велотренировки для улучшения здоровья",
                features: ["4-6 раз в неделю", "Групповые занятия", "Трекинг прогресса"],
                price: "от 2 500 ₽/мес",
                popular: true
              },
              {
                icon: "Sparkles",
                title: "Йога и растяжка",
                description: "Гибкость, баланс, ментальное здоровье",
                features: ["2-3 раза в неделю", "Медитации", "Онлайн доступ"],
                price: "от 2 000 ₽/мес"
              }
            ].map((program, idx) => (
              <Card key={idx} className={`relative ${program.popular ? 'border-accent border-2 shadow-xl scale-105' : 'border'}`}>
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                    Популярно
                  </div>
                )}
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={program.icon} size={40} className="text-primary" />
                  </div>
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

      <section id="faq" className="py-20 bg-white">
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
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-white shadow-sm">
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

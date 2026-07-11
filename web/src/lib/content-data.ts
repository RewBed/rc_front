export type ServiceItem = {
  id?: string;
  slug: string;
  title: string;
  shortText: string;
  iconName: string;
  detailPath: string;
  isActive?: boolean;
};

export type WorkArea = {
  id?: string;
  slug: string;
  title: string;
  category: string;
  shortText: string;
  imageUrl: string | null;
  shapeImageUrl: string | null;
  detailPath: string;
  isActive?: boolean;
};

export type ExpertiseItem = {
  id?: string;
  slug: string;
  title: string;
  category: string;
  tags?: string[];
  publishedLabel: string;
  shortText: string;
  content?: string[];
  imageUrl: string;
  detailPath: string;
  isActive?: boolean;
};

export type Project = {
  id?: string;
  slug: string;
  title: string;
  shortName?: string;
  category: "web" | "app" | "enterprise";
  shortDescription: string;
  intro: string | null;
  goals: string[];
  features: string[];
  works: string[];
  technologies: string[];
  imageUrls: string[];
  sourceUrl?: string | null;
  isActive?: boolean;
};

export type Setting = {
  id?: string;
  category: string;
  key: string;
  value: string | number | null;
};

export type ContactSettings = {
  shortName: string;
  fullName: string;
  inn: string;
  kpp: string;
  ogrn: string;
  legalAddress: string;
  phone: string;
  email: string;
};

export const fallbackServices: ServiceItem[] = [
  {
    slug: "software-development",
    title: "Разработка ПО под ключ",
    shortText:
      "Проектируем и разрабатываем веб-сервисы, личные кабинеты, внутренние системы, порталы и интеграционные решения под конкретные бизнес-процессы.",
    iconName: "pe-7s-display2 bg-13c4a1",
    detailPath: "/services/software-development/",
  },
  {
    slug: "government-projects",
    title: "Решения для госсектора",
    shortText:
      "Готовим и реализуем проектную разработку для государственных и муниципальных задач, включая требования закупочной документации и приемку результата.",
    iconName: "pe-7s-portfolio bg-6610f2",
    detailPath: "/services/government-projects/",
  },
  {
    slug: "bitrix24-integration",
    title: "Интеграция Bitrix24",
    shortText:
      "Настраиваем воронки, карточки сделок, роботов, бизнес-процессы, права доступа, аналитику и обмен данными с сайтом, телефонией и учетными системами.",
    iconName: "pe-7s-config bg-ffb700",
    detailPath: "/services/bitrix24-integration/",
  },
  {
    slug: "amocrm-integration",
    title: "Интеграция amoCRM",
    shortText:
      "Связываем amoCRM с сайтом, формами, мессенджерами, телефонией и внешними сервисами, чтобы заявки не терялись, а менеджеры работали в едином контуре.",
    iconName: "pe-7s-network bg-fc3549",
    detailPath: "/services/amocrm-integration/",
  },
  {
    slug: "sip-telephony-integration",
    title: "Интеграция SIP-телефонии",
    shortText:
      "Подключаем виртуальную АТС, запись разговоров, коллтрекинг, маршрутизацию звонков и передачу событий в CRM для контроля продаж и поддержки.",
    iconName: "pe-7s-call bg-00d280",
    detailPath: "/services/sip-telephony-integration/",
  },
  {
    slug: "marketing",
    title: "Маркетинговые услуги",
    shortText:
      "Помогаем упаковать предложение, настроить рекламные каналы, подготовить посадочные страницы и связать маркетинг с CRM-аналитикой.",
    iconName: "pe-7s-graph1 bg-ff612f",
    detailPath: "/services/marketing/",
  },
  {
    slug: "design",
    title: "Дизайн",
    shortText:
      "Разрабатываем интерфейсы, визуальные концепции, дизайн лендингов, корпоративных сайтов и продуктовых экранов с учетом будущей разработки.",
    iconName: "pe-7s-paint bg-13c4a1",
    detailPath: "/services/design/",
  },
];

export const fallbackWorkAreas: WorkArea[] = [
  {
    slug: "corporate-portals",
    title: "Корпоративные сайты и порталы с личными кабинетами",
    category: "Разработка",
    shortText:
      "Проектируем пользовательские сценарии, роли, кабинеты и административные панели для рабочих процессов компании.",
    imageUrl: "/images/case-studies/studie1.jpg",
    shapeImageUrl: "/images/case-studies/studie-shape1.png",
    detailPath: "/work-areas/corporate-portals/",
  },
  {
    slug: "crm-automation",
    title: "CRM-контур для продаж, заявок и клиентского сервиса",
    category: "CRM",
    shortText:
      "Связываем заявки, звонки, сделки, задачи и отчеты в единую управляемую систему.",
    imageUrl: "/images/case-studies/studie2.jpg",
    shapeImageUrl: "/images/case-studies/studie-shape2.png",
    detailPath: "/work-areas/crm-automation/",
  },
  {
    slug: "integrations",
    title: "Интеграции Bitrix24, amoCRM, телефонии и внешних сервисов",
    category: "Интеграции",
    shortText:
      "Настраиваем обмен данными между сайтом, CRM, телефонией, платежами, уведомлениями и внутренними системами.",
    imageUrl: "/images/case-studies/studie3.jpg",
    shapeImageUrl: "/images/case-studies/studie-shape3.png",
    detailPath: "/work-areas/integrations/",
  },
  {
    slug: "government-delivery",
    title: "Проектная документация и разработка под требования закупок",
    category: "Госсектор",
    shortText:
      "Работаем с формальными требованиями, этапами приемки, документацией и понятной фиксацией результата.",
    imageUrl: "/images/case-studies/studie4.jpg",
    shapeImageUrl: "/images/case-studies/studie-shape4.png",
    detailPath: "/work-areas/government-delivery/",
  },
  {
    slug: "marketing-analytics",
    title: "Посадочные страницы, аналитика и связка рекламы с CRM",
    category: "Маркетинг",
    shortText:
      "Настраиваем путь от рекламного контакта до сделки, чтобы заявки можно было измерять и улучшать.",
    imageUrl: "/images/case-studies/studie5.jpg",
    shapeImageUrl: "/images/case-studies/studie-shape5.png",
    detailPath: "/work-areas/marketing-analytics/",
  },
  {
    slug: "product-design",
    title: "Дизайн интерфейсов и визуальная упаковка цифровых продуктов",
    category: "Дизайн",
    shortText:
      "Готовим макеты и визуальные системы, которые учитывают реальные данные, адаптивность и дальнейшую разработку.",
    imageUrl: "/images/case-studies/studie6.jpg",
    shapeImageUrl: "/images/case-studies/studie-shape6.png",
    detailPath: "/work-areas/product-design/",
  },
];

export const fallbackExpertise: ExpertiseItem[] = [
  {
    slug: "crm-integration",
    title: "Как понять, что бизнесу уже нужна CRM-интеграция",
    category: "CRM",
    tags: ["CRM", "Интеграции", "Автоматизация"],
    publishedLabel: "Разбор",
    shortText:
      "Если заявки живут в таблицах, звонки не связаны со сделками, а руководитель собирает отчеты вручную, интеграция быстро окупает себя.",
    content: [
      "CRM-интеграция становится необходимой, когда заявки приходят из нескольких каналов, а менеджеры вручную переносят данные между формами, таблицами, телефонией и мессенджерами.",
      "На старте важно описать путь заявки: источник, ответственный, этап сделки, правила уведомлений, фиксацию звонков и контроль сроков. Это снижает риск потерянных обращений и делает управленческую отчетность ежедневной, а не разовой ручной задачей.",
      "Отдельно стоит проверять качество данных. Интеграция не исправит хаос в справочниках, но поможет закрепить единые поля, обязательные статусы и понятную ответственность за каждый контакт.",
    ],
    imageUrl: "/images/blog/blog1.jpg",
    detailPath: "/expertise/crm-integration/",
  },
  {
    slug: "government-projects",
    title: "Что важно заложить в разработку проекта для госсектора",
    category: "Госсектор",
    tags: ["Госсектор", "Документация", "Приемка"],
    publishedLabel: "Подход",
    shortText:
      "Требования, документация, контрольные точки и приемка должны быть понятны до начала разработки, иначе сроки и бюджет быстро становятся риском.",
    content: [
      "Проекты для госсектора требуют ранней фиксации требований, состава документов, регламентов приемки и границ ответственности подрядчика. Чем точнее описан результат, тем меньше спорных трактовок на этапе сдачи.",
      "Полезно заранее выделять контрольные точки: обследование, прототип, интеграции, тестирование, передача документации и опытная эксплуатация. Для каждой точки должны быть понятны критерии готовности.",
      "Если проект связан с существующими информационными системами, интеграционные протоколы и доступы нужно проверять до активной разработки, а не в конце работ.",
    ],
    imageUrl: "/images/blog/blog2.jpg",
    detailPath: "/expertise/government-projects/",
  },
  {
    slug: "bitrix24-or-amocrm",
    title: "Bitrix24 или amoCRM: как выбирать систему под отдел продаж",
    category: "Автоматизация",
    tags: ["Bitrix24", "amoCRM", "Продажи"],
    publishedLabel: "Сравнение",
    shortText:
      "Выбор зависит не от популярности платформы, а от сценариев продаж, роли телефонии, отчетности, прав доступа и будущих интеграций.",
    content: [
      "Выбор CRM начинается со сценариев отдела продаж: сколько воронок нужно вести, кто отвечает за первичную обработку, как фиксируются звонки, какие отчеты нужны руководителю и какие права доступа критичны.",
      "Bitrix24 чаще выбирают, когда нужен широкий корпоративный контур с задачами, порталами и внутренними процессами. amoCRM удобна для команд, где основной фокус на продаже, коммуникациях и скорости работы с лидами.",
      "Перед внедрением стоит собрать короткую карту интеграций: сайт, телефония, почта, мессенджеры, платежи, учетная система и аналитика. Она быстро показывает, какая платформа лучше подходит под реальные ограничения.",
    ],
    imageUrl: "/images/blog/blog3.jpg",
    detailPath: "/expertise/bitrix24-or-amocrm/",
  },
  {
    slug: "design-and-development",
    title: "Почему дизайн лучше делать вместе с разработкой",
    category: "Дизайн",
    tags: ["Дизайн", "Разработка", "Интерфейсы"],
    publishedLabel: "Практика",
    shortText:
      "Интерфейс проще запускать, когда макеты учитывают реальные данные, состояния, адаптивность, ограничения CMS и будущую поддержку продукта.",
    content: [
      "Дизайн, сделанный отдельно от разработки, часто выглядит хорошо на статичных экранах, но ломается на длинных заголовках, пустых состояниях, ошибках форм и реальных правах доступа.",
      "Совместная работа дизайнера и разработчика помогает раньше проверить компоненты, сетки, адаптивность, состояния загрузки и ограничения выбранной CMS или API.",
      "Такой подход сокращает переделки: команда быстрее понимает, какие решения останутся удобными после запуска, когда появятся новые данные, роли пользователей и требования поддержки.",
    ],
    imageUrl: "/images/blog/blog4.jpg",
    detailPath: "/expertise/design-and-development/",
  },
];

const donor = "https://russoft-it.ru";

export const fallbackProjects: Project[] = [
  {
    slug: "blood-center",
    title: 'ГБУЗ "ЦЕНТР КРОВИ ИМЕНИ О.К. ГАВРИЛОВА ДЗМ"',
    category: "enterprise",
    shortDescription:
      "ПО для подготовки и передачи данных о донорах и донациях крови.",
    intro:
      "Создание ПО для подготовки и передачи данных о донорах и донациях крови и её компонентов из АИСТ-М в ГИС ЕИБД.",
    goals: [
      "Интеграция контуров АИСТ-М и ГИС ЕИБД",
      "Автоматизированная передача данных на ЕПГУ",
      "Получение справки по выполненной донации через ЕПГУ",
    ],
    features: [],
    works: [
      "Проектирование системы",
      "Разработка конвертера и валидатора данных",
      "Интеграция с единой информационной системой",
    ],
    technologies: ["Laravel", "Vue.js + Electron", "C#"],
    imageUrls: [],
  },
  {
    slug: "mntk-cheboksary",
    title: "МНТК «Микрохирургия глаза» имени академика С.Н. Федорова",
    category: "enterprise",
    shortDescription:
      'Разработка и внедрение программного продукта "Личный кабинет пациента".',
    intro:
      "Личный кабинет пациента для доступа к медицинской информации, записи на приемы, истории и результатам анализов.",
    goals: [],
    features: [],
    works: [
      "Проектирование системы",
      "Проектирование дизайна",
      "Разработка системы",
      "Разработка интеграционных шлюзов",
    ],
    technologies: ["NEST JS", "Vue.js", "Docker"],
    imageUrls: [`${donor}/images/mntk-cheboksary/1.png`],
  },
  {
    slug: "patriot48-map",
    title: 'ОБУ "РЦВПИВПВ ЛИПЕЦКОЙ ОБЛАСТИ"',
    category: "enterprise",
    shortDescription:
      "Интерактивная карта Боевой Славы на базе сайта «Патриот 48» с более 400 объектами.",
    intro:
      "Цифровая платформа объединяет данные о воинских захоронениях, мемориалах и местах боевых действий региона.",
    goals: [],
    features: [
      "Интерактивная карта с фильтрацией по категориям",
      "Административная панель для управления контентом",
      "Новостная лента и календарь мероприятий",
    ],
    works: [
      "Проектирование системы",
      "Проектирование дизайна",
      "Разработка системы",
    ],
    technologies: ["Node.js", "React.js", "Docker"],
    imageUrls: [`${donor}/images/patriot48-map/1.png`],
  },
  {
    slug: "post-crimea",
    title: 'ФГУП "ПОЧТА КРЫМА"',
    category: "enterprise",
    shortDescription:
      "Комплекс информационных систем для полного цикла обработки почтовых отправлений.",
    intro:
      "Интегрированная платформа для полного цикла обработки почтовых отправлений.",
    goals: [],
    features: [],
    works: [
      "Проектирование системы",
      "Проектирование дизайна",
      "Разработка системы",
      "Разработка интеграционных шлюзов",
    ],
    technologies: ["Yii2", "Nuxt + Vue.js", "Docker"],
    imageUrls: [`${donor}/images/post-crimea/1.png`],
  },
  {
    slug: "voice-assistant",
    title: "ГБОУ ШКОЛА № 469 ВЫБОРГСКОГО РАЙОНА САНКТ-ПЕТЕРБУРГА",
    category: "app",
    shortDescription:
      "Голосовой помощник для получения информации и навигации по зданиям школы.",
    intro: 'ПО "Привет, школа!" для гостей, учеников и учителей.',
    goals: [],
    features: [
      "Информация о школе, расписании и событиях",
      "Интерактивные карты и схемы здания",
      "Интуитивно понятный интерфейс",
    ],
    works: [
      "Разработка голосового помощника",
      "Проектирование дизайна",
      "Настройка и установка оборудования",
    ],
    technologies: ["Yii2", "Vue.js", "Docker"],
    imageUrls: [`${donor}/images/voice-assistant/1.png`],
  },
  {
    slug: "molodezh39",
    title: 'ГАУ КО "ЦЕНТР МОЛОДЕЖИ"',
    category: "app",
    shortDescription:
      "Мобильное приложение на базе VK mini apps для управления мероприятиями.",
    intro: "Приложение для управления и участия в мероприятиях сообщества.",
    goals: [],
    features: [
      "Просмотр и запись на мероприятия",
      "Бронирование молодежных пространств",
      "Сбор статистики по мероприятиям",
    ],
    works: [
      "Разработка приложения",
      "Проектирование дизайна",
      "Интеграция с VK API",
    ],
    technologies: ["Yii2", "Vue.js", "React + VK UI", "Docker"],
    imageUrls: [`${donor}/images/molodezh39/1.png`],
  },
  {
    slug: "teorema",
    title: "УК «Теорема»",
    category: "web",
    shortDescription:
      "Известный петербургский девелопер, 12 бизнес-центров класса А и B+.",
    intro:
      "Обновление сайта и функциональности для девелопера коммерческой недвижимости.",
    goals: [],
    features: [],
    works: [
      "Обновление дизайна сайта и его функционала",
      "Интеграция с Битрикс 24",
    ],
    technologies: ["1C-Битрикс", "Битрикс24"],
    imageUrls: [`${donor}/images/teorema/1.png`],
  },
  {
    slug: "ritoris",
    title: "Тренинг-центр Риторики",
    category: "web",
    shortDescription:
      "Тренинг-центр по повышению навыков риторики и ораторского искусства.",
    intro: "Новая версия сайта для образовательного проекта.",
    goals: [],
    features: [],
    works: ["Разработка новой версии сайта", "Продвижение в топ 3"],
    technologies: ["MODX CMS"],
    imageUrls: [`${donor}/images/ritoris/1.png`],
  },
  {
    slug: "cbonds",
    title: "Cbonds",
    category: "enterprise",
    shortDescription:
      "Информационная среда для профессионалов финансового рынка и инвесторов.",
    intro: "Личный кабинет клиентов для финансовой информационной платформы.",
    goals: [],
    features: [
      "Покрытие мировых рынков облигаций и акций",
      "Индексы, рейтинги и отчетность эмитентов",
      "Доступ через сайт, приложение и MS Excel",
    ],
    works: ["Разработка личного кабинета клиентов"],
    technologies: ["Vue.js", "Laravel", "Docker"],
    imageUrls: [`${donor}/images/cbonds/1.png`],
  },
  {
    slug: "kurkrylo",
    title: "КурКрыло",
    category: "web",
    shortDescription:
      "Сервис доставки еды по Санкт-Петербургу с разработкой API и CRM.",
    intro: "Цифровая инфраструктура сервиса доставки еды.",
    goals: [],
    features: [],
    works: [
      "Разработка программного интерфейса (API)",
      "Интеграция с платежными сервисами",
      "Разработка CRM системы",
    ],
    technologies: ["Vue.js", "Nuxt", "Yii2", "Docker"],
    imageUrls: [`${donor}/images/kurkrylo/1.png`],
  },
  {
    slug: "company-bk",
    title: "Компания БК",
    category: "web",
    shortDescription: "Лидер среди производителей картонной упаковки.",
    intro:
      "Сайт производственной компании с собственным конструкторским бюро и дизайн-студией.",
    goals: [],
    features: [],
    works: ["Разработка дизайна сайта", "Верстка", "Интеграция с CMS"],
    technologies: ["Zend Framework"],
    imageUrls: [`${donor}/images/company-bk/1.png`],
  },
  {
    slug: "beton-standart",
    title: "Бетон стандарт",
    category: "web",
    shortDescription:
      "Лидер по объёмам продаж готовых бетонных смесей в СПб и центральных регионах РФ.",
    intro: "Сайт и CRM-интеграции для поставщика бетонных смесей.",
    goals: [],
    features: [],
    works: ["Разработка сайта", "Продвижение", "Интеграция с CRM"],
    technologies: ["MODX CMS"],
    imageUrls: [`${donor}/images/beton-standart/1.png`],
  },
];

export const fallbackSettings: Setting[] = [
  { category: "details", key: "shortName", value: 'ООО "Артель"' },
  {
    category: "details",
    key: "fullName",
    value: 'Общество с ограниченной ответственностью "Артель"',
  },
  { category: "details", key: "inn", value: "7840128707" },
  { category: "details", key: "kpp", value: "784001001" },
  { category: "details", key: "ogrn", value: "1267800048713" },
  {
    category: "address",
    key: "legalAddress",
    value:
      "191015, город Санкт-Петербург, Кавалергардская ул., д. 12 литера Б, помещ. 11-н",
  },
  {
    category: "address",
    key: "address",
    value:
      "191015, город Санкт-Петербург, Кавалергардская ул., д. 12 литера Б, помещ. 11-н",
  },
  { category: "contacts", key: "phone", value: null },
  { category: "contacts", key: "email", value: null },
];

export function settingValue(
  settings: Setting[],
  category: string,
  key: string,
): string {
  const value = settings.find(
    (setting) => setting.category === category && setting.key === key,
  )?.value;
  return typeof value === "string" || typeof value === "number"
    ? String(value)
    : "";
}

export function contactSettings(settings: Setting[]): ContactSettings {
  const legalAddress =
    settingValue(settings, "address", "legalAddress") ||
    settingValue(settings, "address", "address");
  return {
    shortName: settingValue(settings, "details", "shortName") || 'ООО "Артель"',
    fullName:
      settingValue(settings, "details", "fullName") ||
      'Общество с ограниченной ответственностью "Артель"',
    inn: settingValue(settings, "details", "inn"),
    kpp: settingValue(settings, "details", "kpp"),
    ogrn: settingValue(settings, "details", "ogrn"),
    legalAddress,
    phone: settingValue(settings, "contacts", "phone"),
    email: settingValue(settings, "contacts", "email"),
  };
}

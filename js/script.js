// ===== ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА =====
const translations = {
  kz: {
    header: {
      logo: 'ALASH <span>ENGINEERING</span>',
      home: 'Басты бет',
      about: 'Компания туралы',
      catalog: 'Каталог',
      configurator: 'Конфигуратор',
      contacts: 'Байланыс',
      searchPlaceholder: 'Тауарларды іздеу...',
      cart: 'Себет',
      cartEmpty: 'Себет бос',
      cartTotal: 'Барлығы',
      themeLight: 'Жарық',
      themeDark: 'Қараңғы'
    },
    footer: {
      desc: 'Компьютерлер мен перифериялық жабдықтар өндірісі. Сенімді сапа.',
      navTitle: 'Навигация',
      contactTitle: 'Байланыс',
      home: 'Басты бет',
      about: 'Компания туралы',
      catalog: 'Каталог',
      configurator: 'Конфигуратор',
      contacts: 'Байланыс',
      address: 'Алматы қ., Технология көш., 42',
      phone: '+7 (727) 123-45-67',
      email: 'info@alash-engineering.kz',
      copyright: '© 2026 ALASH ENGINEERING CORPORATION. Барлық құқықтар қорғалған.'
    },
    common: {
      addToCart: 'Себетке салу',
      quickView: 'Жылдам қарау',
      clearCart: 'Себетті тазалау',
      checkout: 'Тапсырыс беру',
      catalog: 'Каталог',
      close: 'Жабу',
      buyNow: 'Сатып алу'
    },
    breadcrumb: {
      home: 'Басты бет',
      catalog: 'Каталог',
      computers: 'Компьютерлер',
      peripherals: 'Периферия',
      about: 'Компания туралы',
      contacts: 'Байланыс',
      configurator: 'Конфигуратор'
    },
    filter: {
      title: 'Сүзгі',
      all: 'Барлығы',
      priceFrom: 'Бағадан',
      priceTo: 'Бағаға дейін',
      apply: 'Қолдану',
      type: 'Түрі',
      gaming: 'Ойын',
      office: 'Кеңсе',
      workstation: 'Жұмыс станциясы',
      keyboard: 'Пернетақта',
      mouse: 'Тышқан',
      headphones: 'Құлаққап',
      webcam: 'Веб-камера',
      accessory: 'Аксессуар'
    },
    configurator: {
      title: 'ПК конфигураторы',
      desc: 'Өз компьютеріңді жина',
      cpu: 'Процессор',
      gpu: 'Бейнекарта',
      ram: 'Жедел жады',
      storage: 'Сақтау құрылғысы',
      total: 'Жалпы баға',
      build: 'Жинау',
      summary: 'Құрастыру нәтижесі',
      selectOption: 'Таңдаңыз'
    },
    carousel: {
      slide1Title: 'Өз болашағыңды <span>ALASH</span>-пен құра',
      slide1Desc: 'Біз сенімді компьютерлер мен перифериялық жабдықтарды шығарамыз.',
      slide2Title: '<span>Сапа</span> — біздің басымдық',
      slide2Desc: 'Әрбір құрылғы 48 сағаттық сынақтан өтеді. 5 жылға дейін кепілдік.',
      slide3Title: 'Кез келген тапсырмаға арналған <span>шешімдер</span>',
      slide3Desc: 'Кеңседен ойынға дейін — бізде бәрі бар.',
      btn: 'Толығырақ'
    },
    index: {
      aboutTitle: 'ALASH ENGINEERING компаниясы туралы',
      aboutText1: 'ALASH ENGINEERING — заманауи компьютерлік техника мен перифериялық құрылғылар өндірісі.',
      aboutText2: 'Әрбір құрылғы көп сатылы сапа бақылауынан өтеді.',
      aboutBtn: 'Толығырақ',
      advantagesTitle: 'Неліктен ALASH-ты таңдайды',
      advantagesSubtitle: 'Біздің артықшылықтарымыз өздері үшін сөйлейді',
      advReliabilityTitle: 'Сенімділік',
      advReliabilityDesc: 'Әрбір құрылғы жөнелту алдында жүктеме астында 48 сағаттық сынақтан өтеді.',
      advPerformanceTitle: 'Өнімділік',
      advPerformanceDesc: 'Заманауи компоненттер кез келген тапсырмада максималды жылдамдықты қамтамасыз етеді.',
      advQualityTitle: 'Сапа кепілдігі',
      advQualityDesc: 'Барлық құрылғыларға 5 жылға дейін кепілдік және тегін техникалық қолдау.',
      advIndividualTitle: 'Жеке көзқарас',
      advIndividualDesc: 'Кез келген тапсырмаға арналған конфигурациялар: кеңседен ойынға дейін.',
      popularTitle: 'Танымал тауарлар',
      popularSubtitle: 'Осы айдың үздік ұсыныстары',
      counterComputers: 'компьютер жиналды',
      counterDevices: 'құрылғы шығарылды',
      counterEmployees: 'қызметкер',
      counterYears: 'жыл кепілдік'
    },
    about: {
      heroTitle: 'ALASH ENGINEERING <span>компаниясы туралы</span>',
      heroDesc: 'Біздің тарихымызбен, миссиямызбен және өндіріс философиямызбен танысыңыз',
      historyTitle: 'Біздің тарих',
      historyText1: 'ALASH ENGINEERING 2015 жылы компьютерлік технологияларға құмар инженер-энтузиастар тобымен құрылды.',
      historyText2: '50 000-нан астам компьютер жинадық және 200 000-нан астам перифериялық құрылғылар шығардық.',
      historyText3: 'Бүгінде ALASH ENGINEERING — 200-ден астам маман, 5000 м² өндірістік кешен және сервистік орталықтар желісі.',
      missionTitle: 'Біздің миссия және құндылықтар',
      missionSubtitle: 'Бізді күн сайын алға жылжытатын нәрсе',
      missionMissionTitle: 'Миссия',
      missionMissionDesc: 'Заманауи технологияларды әркімге қолжетімді ету.',
      missionQualityTitle: 'Сапа',
      missionQualityDesc: 'Біз күмәнді компоненттерді қолданбаймыз.',
      missionClientTitle: 'Клиентке бағдар',
      missionClientDesc: 'Біз әрбір клиентті бағалаймыз.',
      missionInnovationTitle: 'Инновация',
      missionInnovationDesc: 'Біз трендтерді қадағалаймыз және жаңа технологияларды енгіземіз.',
      productionTitle: 'Біздің өндіріс',
      productionText1: 'Өндірістік кешен заманауи жабдықтармен жабдықталған.',
      productionList: 'Кешен аумағында орналасқан:',
      productionItem1: 'Құрастыру цехы — 8 желі',
      productionItem2: 'Сынақ зертханасы — 40 стенд',
      productionItem3: '10 000 бірлікке арналған қойма',
      productionItem4: 'Сервистік орталық',
      productionText2: 'Қуаттылық: айына 2000 компьютер және 5000 периферия.'
    },
    catalog: {
      heroTitle: 'Өнімдер <span>каталогы</span>',
      heroDesc: 'Өзіңізді қызықтыратын санатты таңдаңыз',
      computersTitle: 'Компьютерлер',
      computersDesc: 'Кеңсе станцияларынан ойын ПК-ге дейін.',
      computersBtn: 'Компьютерлерді көру',
      peripheralsTitle: 'Периферия',
      peripheralsDesc: 'Пернетақталар, тышқандар, құлаққаптар және басқа да құрылғылар.',
      peripheralsBtn: 'Периферияны көру',
      configuratorTitle: 'ПК конфигураторы',
      configuratorDesc: 'Өз компьютеріңді жина. Компоненттерді таңдап, бағаны есепте.',
      configuratorBtn: 'Конфигуратор'
    },
    computers: {
      heroTitle: 'Біздің <span>компьютерлер</span>',
      heroDesc: 'Кез келген тапсырмаға арналған сенімді шешімдер'
    },
    peripherals: {
      heroTitle: 'Перифериялық <span>құрылғылар</span>',
      heroDesc: 'Пернетақталар, тышқандар, құлаққаптар және аксессуарлар'
    },
    contacts: {
      heroTitle: 'Бізбен <span>байланысыңыз</span>',
      heroDesc: 'Сұрақтарыңызға жауап беруге әрқашан дайынбыз',
      infoTitle: 'Біздің байланыстар',
      infoDesc: 'Бізге кез келген тәсілмен хабарласыңыз.',
      addressLabel: 'Мекенжай',
      addressValue: 'Алматы қ., Технология көш., 42, «Технопарк» БО',
      phoneLabel: 'Телефон',
      phoneValue: '+7 (727) 123-45-67',
      emailLabel: 'Email',
      emailValue: 'info@alash-engineering.kz',
      hoursLabel: 'Жұмыс уақыты',
      hoursValue: 'Дс–Жм: 9:00 – 19:00<br>Сб: 10:00 – 16:00<br>Жк: демалыс',
      formTitle: 'Кері байланыс формасы',
      formDesc: 'Форманы толтырыңыз, біз сізге жақын арада хабарласамыз.',
      formName: 'Аты *',
      formEmail: 'Email *',
      formPhone: 'Телефон *',
      formSubject: 'Тақырып *',
      formMessage: 'Хабарлама *',
      formPlaceholderName: 'Атыңызды енгізіңіз',
      formPlaceholderEmail: 'example@mail.kz',
      formPlaceholderPhone: '+7 (777) 123-45-67',
      formPlaceholderMessage: 'Сұрағыңызды сипаттаңыз...',
      formSubjectDefault: 'Тақырыпты таңдаңыз',
      formSubjectConsultation: 'Тауар бойынша кеңес',
      formSubjectOrder: 'Тапсырыс бойынша сұрақ',
      formSubjectSupport: 'Техникалық қолдау',
      formSubjectCooperation: 'Ынтымақтастық',
      formSubjectOther: 'Басқа',
      formSubmit: 'Хабарламаны жіберу',
      formSuccessTitle: 'Рахмет!',
      formSuccess: 'Хабарламаңыз жіберілді. Біз сізге жақын арада хабарласамыз.'
    },
    formErrors: {
      required: 'Өрісті толтырыңыз',
      nameMin: 'Аты кемінде 2 символ',
      emailInvalid: 'Дұрыс email енгізіңіз',
      phoneInvalid: 'Дұрыс телефон енгізіңіз',
      subjectRequired: 'Тақырыпты таңдаңыз',
      messageMin: 'Хабарлама кемінде 10 символ'
    }
  },

  ru: {
    header: {
      logo: 'ALASH <span>ENGINEERING</span>',
      home: 'Главная',
      about: 'О компании',
      catalog: 'Каталог',
      configurator: 'Конфигуратор',
      contacts: 'Контакты',
      searchPlaceholder: 'Поиск товаров...',
      cart: 'Корзина',
      cartEmpty: 'Корзина пуста',
      cartTotal: 'Итого',
      themeLight: 'Светлая',
      themeDark: 'Тёмная'
    },
    footer: {
      desc: 'Производство компьютеров и периферийного оборудования. Качество, которому доверяют.',
      navTitle: 'Навигация',
      contactTitle: 'Контакты',
      home: 'Главная',
      about: 'О компании',
      catalog: 'Каталог',
      configurator: 'Конфигуратор',
      contacts: 'Контакты',
      address: 'г. Алматы, ул. Технологическая, 42',
      phone: '+7 (727) 123-45-67',
      email: 'info@alash-engineering.kz',
      copyright: '© 2026 ALASH ENGINEERING CORPORATION. Все права защищены.'
    },
    common: {
      addToCart: 'В корзину',
      quickView: 'Быстрый просмотр',
      clearCart: 'Очистить корзину',
      checkout: 'Оформить заказ',
      catalog: 'Каталог',
      close: 'Закрыть',
      buyNow: 'Купить'
    },
    breadcrumb: {
      home: 'Главная',
      catalog: 'Каталог',
      computers: 'Компьютеры',
      peripherals: 'Периферия',
      about: 'О компании',
      contacts: 'Контакты',
      configurator: 'Конфигуратор'
    },
    filter: {
      title: 'Фильтр',
      all: 'Все',
      priceFrom: 'От',
      priceTo: 'До',
      apply: 'Применить',
      type: 'Тип',
      gaming: 'Игровой',
      office: 'Офисный',
      workstation: 'Рабочая станция',
      keyboard: 'Клавиатура',
      mouse: 'Мышь',
      headphones: 'Наушники',
      webcam: 'Веб-камера',
      accessory: 'Аксессуар'
    },
    configurator: {
      title: 'Конфигуратор ПК',
      desc: 'Собери свой компьютер',
      cpu: 'Процессор',
      gpu: 'Видеокарта',
      ram: 'Оперативная память',
      storage: 'Накопитель',
      total: 'Общая цена',
      build: 'Собрать',
      summary: 'Результат сборки',
      selectOption: 'Выберите'
    },
    carousel: {
      slide1Title: 'Собери своё <span>будущее</span> вместе с ALASH',
      slide1Desc: 'Мы производим надёжные компьютеры и периферийное оборудование.',
      slide2Title: '<span>Качество</span> — наш приоритет',
      slide2Desc: 'Каждое устройство проходит 48-часовое тестирование. Гарантия до 5 лет.',
      slide3Title: 'Решения для <span>любых задач</span>',
      slide3Desc: 'От офиса до гейминга — у нас есть всё.',
      btn: 'Подробнее'
    },
    index: {
      aboutTitle: 'О компании ALASH ENGINEERING',
      aboutText1: 'ALASH ENGINEERING — современное производство компьютерной техники и периферийных устройств.',
      aboutText2: 'Каждое устройство проходит многоступенчатый контроль качества.',
      aboutBtn: 'Подробнее о нас',
      advantagesTitle: 'Почему выбирают ALASH',
      advantagesSubtitle: 'Наши преимущества, которые говорят сами за себя',
      advReliabilityTitle: 'Надёжность',
      advReliabilityDesc: '48-часовое тестирование под нагрузкой перед отгрузкой.',
      advPerformanceTitle: 'Производительность',
      advPerformanceDesc: 'Современные комплектующие для максимальной скорости.',
      advQualityTitle: 'Гарантия качества',
      advQualityDesc: 'Гарантия до 5 лет и бесплатная техподдержка.',
      advIndividualTitle: 'Индивидуальный подход',
      advIndividualDesc: 'Конфигурации под любые задачи.',
      popularTitle: 'Популярные товары',
      popularSubtitle: 'Лучшие предложения этого месяца',
      counterComputers: 'компьютеров собрано',
      counterDevices: 'устройств выпущено',
      counterEmployees: 'сотрудников',
      counterYears: 'лет гарантии'
    },
    about: {
      heroTitle: 'О компании <span>ALASH ENGINEERING</span>',
      heroDesc: 'Узнайте нашу историю, миссию и философию производства',
      historyTitle: 'Наша история',
      historyText1: 'Компания ALASH ENGINEERING основана в 2015 году группой инженеров-энтузиастов.',
      historyText2: 'Более 50 000 компьютеров и 200 000 периферийных устройств выпущено.',
      historyText3: 'Сегодня это 200+ специалистов, 5000 м² производства и сеть сервисных центров.',
      missionTitle: 'Наша миссия и ценности',
      missionSubtitle: 'То, что движет нами каждый день',
      missionMissionTitle: 'Миссия',
      missionMissionDesc: 'Делать современные технологии доступными каждому.',
      missionQualityTitle: 'Качество',
      missionQualityDesc: 'Мы не используем компоненты сомнительного происхождения.',
      missionClientTitle: 'Клиентоориентированность',
      missionClientDesc: 'Индивидуальный подход и оперативная техподдержка.',
      missionInnovationTitle: 'Инновации',
      missionInnovationDesc: 'Внедряем новейшие технологии и совершенствуем устройства.',
      productionTitle: 'Наше производство',
      productionText1: 'Комплекс оснащён оборудованием для сборки, пайки и тестирования.',
      productionList: 'На территории комплекса:',
      productionItem1: 'Сборочный цех — 8 линий',
      productionItem2: 'Лаборатория — 40 стендов',
      productionItem3: 'Склад на 10 000 единиц',
      productionItem4: 'Сервисный центр',
      productionText2: 'Мощность: до 2000 ПК и 5000 периферии в месяц.'
    },
    catalog: {
      heroTitle: 'Каталог <span>продукции</span>',
      heroDesc: 'Выберите интересующую вас категорию',
      computersTitle: 'Компьютеры',
      computersDesc: 'От офисных станций до игровых ПК.',
      computersBtn: 'Смотреть компьютеры',
      peripheralsTitle: 'Периферия',
      peripheralsDesc: 'Клавиатуры, мыши, наушники и другие устройства.',
      peripheralsBtn: 'Смотреть периферию',
      configuratorTitle: 'Конфигуратор ПК',
      configuratorDesc: 'Собери свой компьютер. Выбери компоненты и рассчитай цену.',
      configuratorBtn: 'Перейти в конфигуратор'
    },
    computers: {
      heroTitle: 'Наши <span>компьютеры</span>',
      heroDesc: 'Надёжные решения для любых задач'
    },
    peripherals: {
      heroTitle: 'Периферийные <span>устройства</span>',
      heroDesc: 'Клавиатуры, мыши, наушники и аксессуары от ALASH'
    },
    contacts: {
      heroTitle: 'Свяжитесь с <span>нами</span>',
      heroDesc: 'Мы всегда готовы ответить на ваши вопросы',
      infoTitle: 'Наши контакты',
      infoDesc: 'Свяжитесь с нами любым удобным способом.',
      addressLabel: 'Адрес',
      addressValue: 'г. Алматы, ул. Технологическая, 42, БЦ «Технопарк»',
      phoneLabel: 'Телефон',
      phoneValue: '+7 (727) 123-45-67',
      emailLabel: 'Email',
      emailValue: 'info@alash-engineering.kz',
      hoursLabel: 'Режим работы',
      hoursValue: 'Пн–Пт: 9:00 – 19:00<br>Сб: 10:00 – 16:00<br>Вс: выходной',
      formTitle: 'Форма обратной связи',
      formDesc: 'Заполните форму, и мы свяжемся с вами.',
      formName: 'Имя *',
      formEmail: 'Email *',
      formPhone: 'Телефон *',
      formSubject: 'Тема *',
      formMessage: 'Сообщение *',
      formPlaceholderName: 'Введите ваше имя',
      formPlaceholderEmail: 'example@mail.kz',
      formPlaceholderPhone: '+7 (777) 123-45-67',
      formPlaceholderMessage: 'Опишите ваш вопрос...',
      formSubjectDefault: 'Выберите тему',
      formSubjectConsultation: 'Консультация',
      formSubjectOrder: 'Вопрос по заказу',
      formSubjectSupport: 'Техподдержка',
      formSubjectCooperation: 'Сотрудничество',
      formSubjectOther: 'Другое',
      formSubmit: 'Отправить сообщение',
      formSuccessTitle: 'Спасибо!',
      formSuccess: 'Сообщение отправлено. Мы свяжемся с вами в ближайшее время.'
    },
    formErrors: {
      required: 'Заполните поле',
      nameMin: 'Минимум 2 символа',
      emailInvalid: 'Некорректный email',
      phoneInvalid: 'Некорректный телефон',
      subjectRequired: 'Выберите тему',
      messageMin: 'Минимум 10 символов'
    }
  },

  en: {
    header: {
      logo: 'ALASH <span>ENGINEERING</span>',
      home: 'Home',
      about: 'About',
      catalog: 'Catalog',
      configurator: 'Configurator',
      contacts: 'Contact',
      searchPlaceholder: 'Search products...',
      cart: 'Cart',
      cartEmpty: 'Cart is empty',
      cartTotal: 'Total',
      themeLight: 'Light',
      themeDark: 'Dark'
    },
    footer: {
      desc: 'Manufacturing of computers and peripheral equipment. Quality you can trust.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      home: 'Home',
      about: 'About',
      catalog: 'Catalog',
      configurator: 'Configurator',
      contacts: 'Contact',
      address: '42 Technology St., Almaty, Kazakhstan',
      phone: '+7 (727) 123-45-67',
      email: 'info@alash-engineering.kz',
      copyright: '© 2026 ALASH ENGINEERING CORPORATION. All rights reserved.'
    },
    common: {
      addToCart: 'Add to cart',
      quickView: 'Quick view',
      clearCart: 'Clear cart',
      checkout: 'Checkout',
      catalog: 'Catalog',
      close: 'Close',
      buyNow: 'Buy now'
    },
    breadcrumb: {
      home: 'Home',
      catalog: 'Catalog',
      computers: 'Computers',
      peripherals: 'Peripherals',
      about: 'About',
      contacts: 'Contact',
      configurator: 'Configurator'
    },
    filter: {
      title: 'Filter',
      all: 'All',
      priceFrom: 'From',
      priceTo: 'To',
      apply: 'Apply',
      type: 'Type',
      gaming: 'Gaming',
      office: 'Office',
      workstation: 'Workstation',
      keyboard: 'Keyboard',
      mouse: 'Mouse',
      headphones: 'Headphones',
      webcam: 'Webcam',
      accessory: 'Accessory'
    },
    configurator: {
      title: 'PC Configurator',
      desc: 'Build your own PC',
      cpu: 'CPU',
      gpu: 'GPU',
      ram: 'RAM',
      storage: 'Storage',
      total: 'Total price',
      build: 'Build',
      summary: 'Build Summary',
      selectOption: 'Select'
    },
    carousel: {
      slide1Title: 'Build your <span>future</span> with ALASH',
      slide1Desc: 'We manufacture reliable computers and peripheral equipment.',
      slide2Title: '<span>Quality</span> is our priority',
      slide2Desc: 'Each device undergoes 48-hour testing. Warranty up to 5 years.',
      slide3Title: 'Solutions for <span>any task</span>',
      slide3Desc: 'From office to gaming — we have it all.',
      btn: 'Learn more'
    },
    index: {
      aboutTitle: 'About ALASH ENGINEERING',
      aboutText1: 'ALASH ENGINEERING is a modern manufacturer of computer equipment and peripheral devices.',
      aboutText2: 'Each device undergoes multi-stage quality control.',
      aboutBtn: 'Learn more',
      advantagesTitle: 'Why choose ALASH',
      advantagesSubtitle: 'Our advantages speak for themselves',
      advReliabilityTitle: 'Reliability',
      advReliabilityDesc: '48-hour load testing before shipment.',
      advPerformanceTitle: 'Performance',
      advPerformanceDesc: 'Modern components for maximum speed.',
      advQualityTitle: 'Quality Guarantee',
      advQualityDesc: 'Up to 5 years warranty and free support.',
      advIndividualTitle: 'Individual Approach',
      advIndividualDesc: 'Configurations for any task.',
      popularTitle: 'Popular Products',
      popularSubtitle: 'Best offers of this month',
      counterComputers: 'computers assembled',
      counterDevices: 'devices produced',
      counterEmployees: 'employees',
      counterYears: 'years warranty'
    },
    about: {
      heroTitle: 'About <span>ALASH ENGINEERING</span>',
      heroDesc: 'Learn our history, mission and production philosophy',
      historyTitle: 'Our History',
      historyText1: 'ALASH ENGINEERING was founded in 2015 by a group of engineer enthusiasts.',
      historyText2: 'Over 50,000 computers and 200,000 peripheral devices produced.',
      historyText3: 'Today: 200+ specialists, 5000 m² complex, service centers network.',
      missionTitle: 'Our Mission & Values',
      missionSubtitle: 'What drives us every day',
      missionMissionTitle: 'Mission',
      missionMissionDesc: 'Making modern technology accessible to everyone.',
      missionQualityTitle: 'Quality',
      missionQualityDesc: 'We do not use components of questionable origin.',
      missionClientTitle: 'Customer Focus',
      missionClientDesc: 'Individual approach and prompt technical support.',
      missionInnovationTitle: 'Innovation',
      missionInnovationDesc: 'Implementing latest technologies and improving devices.',
      productionTitle: 'Our Production',
      productionText1: 'Complex equipped for assembly, soldering and testing.',
      productionList: 'Located within the complex:',
      productionItem1: 'Assembly shop — 8 lines',
      productionItem2: 'Testing lab — 40 benches',
      productionItem3: 'Warehouse for 10,000 units',
      productionItem4: 'Service center',
      productionText2: 'Capacity: up to 2,000 PCs and 5,000 peripherals monthly.'
    },
    catalog: {
      heroTitle: 'Product <span>catalog</span>',
      heroDesc: 'Select a category that interests you',
      computersTitle: 'Computers',
      computersDesc: 'From office stations to gaming PCs.',
      computersBtn: 'View computers',
      peripheralsTitle: 'Peripherals',
      peripheralsDesc: 'Keyboards, mice, headphones and other devices.',
      peripheralsBtn: 'View peripherals',
      configuratorTitle: 'PC Configurator',
      configuratorDesc: 'Build your own PC. Choose components and calculate the price.',
      configuratorBtn: 'Go to configurator'
    },
    computers: {
      heroTitle: 'Our <span>computers</span>',
      heroDesc: 'Reliable solutions for any task'
    },
    peripherals: {
      heroTitle: 'Peripheral <span>devices</span>',
      heroDesc: 'Keyboards, mice, headphones and accessories from ALASH'
    },
    contacts: {
      heroTitle: 'Contact <span>us</span>',
      heroDesc: 'We are always ready to answer your questions',
      infoTitle: 'Our Contacts',
      infoDesc: 'Contact us in any convenient way.',
      addressLabel: 'Address',
      addressValue: '42 Technology St., Almaty, BC Technopark, Kazakhstan',
      phoneLabel: 'Phone',
      phoneValue: '+7 (727) 123-45-67',
      emailLabel: 'Email',
      emailValue: 'info@alash-engineering.kz',
      hoursLabel: 'Working Hours',
      hoursValue: 'Mon–Fri: 9:00 – 19:00<br>Sat: 10:00 – 16:00<br>Sun: closed',
      formTitle: 'Feedback Form',
      formDesc: 'Fill out the form and we will contact you.',
      formName: 'Name *',
      formEmail: 'Email *',
      formPhone: 'Phone *',
      formSubject: 'Subject *',
      formMessage: 'Message *',
      formPlaceholderName: 'Enter your name',
      formPlaceholderEmail: 'example@mail.kz',
      formPlaceholderPhone: '+7 (777) 123-45-67',
      formPlaceholderMessage: 'Describe your question...',
      formSubjectDefault: 'Select a subject',
      formSubjectConsultation: 'Consultation',
      formSubjectOrder: 'Order inquiry',
      formSubjectSupport: 'Technical support',
      formSubjectCooperation: 'Partnership',
      formSubjectOther: 'Other',
      formSubmit: 'Send message',
      formSuccessTitle: 'Thank you!',
      formSuccess: 'Message sent. We will contact you shortly.'
    },
    formErrors: {
      required: 'This field is required',
      nameMin: 'Minimum 2 characters',
      emailInvalid: 'Invalid email',
      phoneInvalid: 'Invalid phone',
      subjectRequired: 'Select a subject',
      messageMin: 'Minimum 10 characters'
    }
  }
};

// ===== ВАЛЮТА =====
const currencyConfig = {
  kzt: { symbol: '₸', rate: 5.3, decimals: 0 },
  usd: { symbol: '$', rate: 0.011, decimals: 2 },
  rub: { symbol: '₽', rate: 1, decimals: 0 }
};

// ===== СОСТОЯНИЕ =====
let currentLang = localStorage.getItem('alash_lang') || 'ru';
let currentCurrency = localStorage.getItem('alash_currency') || 'rub';
let currentTheme = localStorage.getItem('alash_theme') || 'dark';
let cart = JSON.parse(localStorage.getItem('alash_cart') || '[]');

// ===== ВСПОМОГАТЕЛЬНЫЕ =====
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    if (value && value[k] !== undefined) value = value[k];
    else return '';
  }
  return value;
}

function formatPrice(priceRub) {
  const cfg = currencyConfig[currentCurrency];
  const converted = priceRub * cfg.rate;
  if (cfg.decimals === 0) return Math.round(converted).toLocaleString() + ' ' + cfg.symbol;
  return cfg.symbol + converted.toFixed(cfg.decimals);
}

// ===== ТЕМА =====
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('alash_theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    const icon = btn.querySelector('i');
    if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

// ===== КОРЗИНА =====
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const count = cart.reduce((s, i) => s + i.quantity, 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function renderCartModal() {
  const modal = document.getElementById('cartModal');
  const list = document.getElementById('cartList');
  const total = document.getElementById('cartTotal');
  if (!modal || !list || !total) return;
  list.innerHTML = '';
  if (cart.length === 0) {
    list.innerHTML = `<p style="text-align:center;color:var(--text-muted);padding:40px 0;">${t('header.cartEmpty')}</p>`;
    total.textContent = '0 ' + currencyConfig[currentCurrency].symbol;
    return;
  }
  let sum = 0;
  cart.forEach((item, idx) => {
    sum += item.price * item.quantity;
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--border);';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width:60px;height:60px;border-radius:8px;object-fit:cover;background:var(--bg-secondary);">
      <div style="flex:1;">
        <div style="font-weight:600;font-size:0.95rem;">${item.name}</div>
        <div style="color:var(--text-muted);font-size:0.85rem;">${formatPrice(item.price)} × ${item.quantity}</div>
      </div>
      <button class="cart-item-remove" data-idx="${idx}" style="background:none;border:none;color:var(--danger);cursor:pointer;font-size:1.2rem;">✕</button>
    `;
    list.appendChild(div);
  });
  total.textContent = formatPrice(sum);
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.splice(parseInt(btn.dataset.idx), 1);
      localStorage.setItem('alash_cart', JSON.stringify(cart));
      updateCartBadge();
      renderCartModal();
    });
  });
}

function openCart() {
  const modal = document.getElementById('cartModal');
  if (modal) {
    renderCartModal();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const modal = document.getElementById('cartModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ===== ПОИСК =====
function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  if (overlay && input) {
    overlay.classList.add('open');
    setTimeout(() => input.focus(), 100);
    document.body.style.overflow = 'hidden';
  }
}

function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function performSearch(query) {
  const cards = document.querySelectorAll('.product-card');
  const q = query.toLowerCase().trim();
  cards.forEach(card => {
    const title = (card.querySelector('.product-title')?.textContent || '').toLowerCase();
    const specs = (card.querySelector('.product-specs')?.textContent || '').toLowerCase();
    const match = !q || title.includes(q) || specs.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

// ===== КАРУСЕЛЬ =====
let carouselIndex = 0;
let carouselInterval;

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;
  function goTo(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    carouselIndex = idx;
  }
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetCarousel(); });
  });
  carouselInterval = setInterval(() => goTo((carouselIndex + 1) % slides.length), 5000);
  window.goToSlide = goTo;
}

function resetCarousel() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(() => window.goToSlide((carouselIndex + 1) % document.querySelectorAll('.carousel-slide').length), 5000);
}

// ===== АНИМИРОВАННЫЕ СЧЁТЧИКИ =====
function initCounters() {
  document.querySelectorAll('.counter-number').forEach(el => {
    const target = parseInt(el.dataset.target);
    if (!target) return;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const update = () => {
      current += step;
      if (current >= target) { el.textContent = target; return; }
      el.textContent = current;
      requestAnimationFrame(update);
    };
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { update(); obs.unobserve(el); }
    }, { threshold: 0.5 });
    obs.observe(el);
  });
}

// ===== TOAST =====
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._hide);
  toast._hide = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== СОРТИРОВКА =====
function sortProducts(criteria) {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.product-card'));
  cards.sort((a, b) => {
    const titleA = a.querySelector('.product-title')?.textContent || '';
    const titleB = b.querySelector('.product-title')?.textContent || '';
    const priceA = parseFloat(a.querySelector('[data-price-rub]')?.dataset.priceRub) || 0;
    const priceB = parseFloat(b.querySelector('[data-price-rub]')?.dataset.priceRub) || 0;
    switch (criteria) {
      case 'price-asc': return priceA - priceB;
      case 'price-desc': return priceB - priceA;
      case 'name-asc': return titleA.localeCompare(titleB);
      case 'name-desc': return titleB.localeCompare(titleA);
      default: return 0;
    }
  });
  cards.forEach(card => grid.appendChild(card));
  cards.forEach(c => c.style.display = '');
}

// ===== МОДАЛКА ТОВАРА =====
function openProductModal(imgSrc, title, specs, price, priceRub) {
  const modal = document.getElementById('productModal');
  const overlay = document.getElementById('modalOverlay');
  if (!modal) return;
  document.getElementById('modalImg').src = imgSrc;
  document.getElementById('modalImg').alt = title;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalSpecs').textContent = specs;
  document.getElementById('modalPrice').textContent = formatPrice(priceRub);
  document.getElementById('modalPrice').dataset.priceRub = priceRub;
  modal.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModal')?.classList.remove('open');
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== ФИЛЬТР =====
function applyFilters() {
  const typeFilter = document.getElementById('filterType');
  const priceFrom = parseFloat(document.getElementById('filterPriceFrom')?.value) || 0;
  const priceTo = parseFloat(document.getElementById('filterPriceTo')?.value) || Infinity;
  const type = typeFilter?.value || 'all';
  document.querySelectorAll('.product-card').forEach(card => {
    const priceRub = parseFloat(card.querySelector('[data-price-rub]')?.dataset.priceRub) || 0;
    const title = (card.querySelector('.product-title')?.textContent || '').toLowerCase();
    let showType = type === 'all';
    if (type === 'gaming' && (title.includes('pro') || title.includes('ultra') || title.includes('rtx'))) showType = true;
    if (type === 'office' && (title.includes('office') || title.includes('home'))) showType = true;
    if (type === 'workstation' && (title.includes('workstation'))) showType = true;
    if (type === 'keyboard' && title.includes('kb')) showType = true;
    if (type === 'mouse' && (title.includes('mouse') || title.includes('ms'))) showType = true;
    if (type === 'headphones' && (title.includes('hp') || title.includes('headphones') || title.includes('наушники') || title.includes('құлақ'))) showType = true;
    if (type === 'webcam' && (title.includes('cam') || title.includes('камер') || title.includes('веб'))) showType = true;
    if (type === 'accessory' && (title.includes('pad') || title.includes('коврик') || title.includes('accessory'))) showType = true;
    const showPrice = priceRub >= priceFrom && priceRub <= priceTo;
    card.style.display = showType && showPrice ? '' : 'none';
  });
}

function resetFilters() {
  document.getElementById('filterPriceFrom').value = '';
  document.getElementById('filterPriceTo').value = '';
  document.getElementById('filterType').value = 'all';
  const sort = document.getElementById('sortSelect');
  if (sort) sort.value = 'default';
  document.querySelectorAll('.product-card').forEach(c => c.style.display = '');
}

// ===== ХЛЕБНЫЕ КРОШКИ =====
function initBreadcrumbs() {
  const container = document.getElementById('breadcrumbs');
  if (!container) return;
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const map = {
    'about.html': [{ key: 'breadcrumb.home', href: 'index.html' }, { key: 'breadcrumb.about', href: '' }],
    'catalog.html': [{ key: 'breadcrumb.home', href: 'index.html' }, { key: 'breadcrumb.catalog', href: '' }],
    'computers.html': [{ key: 'breadcrumb.home', href: 'index.html' }, { key: 'breadcrumb.catalog', href: 'catalog.html' }, { key: 'breadcrumb.computers', href: '' }],
    'peripherals.html': [{ key: 'breadcrumb.home', href: 'index.html' }, { key: 'breadcrumb.catalog', href: 'catalog.html' }, { key: 'breadcrumb.peripherals', href: '' }],
    'contacts.html': [{ key: 'breadcrumb.home', href: 'index.html' }, { key: 'breadcrumb.contacts', href: '' }],
    'configurator.html': [{ key: 'breadcrumb.home', href: 'index.html' }, { key: 'breadcrumb.catalog', href: 'catalog.html' }, { key: 'breadcrumb.configurator', href: '' }]
  };
  const crumbs = map[page] || [{ key: 'breadcrumb.home', href: 'index.html' }];
  container.innerHTML = crumbs.map((c, i) => {
    const label = t(c.key);
    if (i === crumbs.length - 1) return `<span class="breadcrumb-current">${label}</span>`;
    return `<a href="${c.href}" class="breadcrumb-link">${label}</a><span class="breadcrumb-sep">›</span>`;
  }).join('');
}
// ===== ЯЗЫК =====
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('alash_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = t(el.dataset.i18n);
    if (text) el.innerHTML = text;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const text = t(el.dataset.i18nPlaceholder);
    if (text) el.placeholder = text;
  });
  document.querySelectorAll('[data-i18n-options]').forEach(select => {
    const prefix = select.dataset.i18nOptions;
    select.querySelectorAll('option').forEach(opt => {
      if (opt.value) { const tr = t(prefix + opt.value.charAt(0).toUpperCase() + opt.value.slice(1)); if (tr) opt.textContent = tr; }
    });
  });
  document.getElementById('langSelect') && (document.getElementById('langSelect').value = lang);
  initBreadcrumbs();
  renderCartModal();
}

// ===== ВАЛЮТА =====
function applyCurrency() {
  localStorage.setItem('alash_currency', currentCurrency);
  document.querySelectorAll('[data-price-rub]').forEach(el => {
    const pr = parseFloat(el.dataset.priceRub);
    if (!isNaN(pr)) el.textContent = formatPrice(pr);
  });
  document.getElementById('currencySelect') && (document.getElementById('currencySelect').value = currentCurrency);
  renderCartModal();
}

// ===== БАЗА ТОВАРОВ =====
const productDatabase = {
  'ALASH Pro X1': { price: 119900, specs: 'Intel Core i7-13700K, 32GB DDR5, RTX 4070, 1TB NVMe', image: 'img/product-pro-x1.png', page: 'computers.html' },
  'ALASH Home 24': { price: 49900, specs: 'AMD Ryzen 5 5600G, 16GB DDR4, Radeon Vega 7, 512GB SSD', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Home+24', page: 'computers.html' },
  'ALASH Studio 32': { price: 89900, specs: 'Intel Core i5-13600K, 32GB DDR5, RTX 4060, 1TB NVMe', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Studio+32', page: 'computers.html' },
  'ALASH Ultra RTX': { price: 289900, specs: 'AMD Ryzen 9 7950X, 64GB DDR5, RTX 4090, 2TB NVMe', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Ultra+RTX', page: 'computers.html' },
  'ALASH Workstation A6': { price: 549900, specs: 'AMD Ryzen Threadripper, 128GB ECC, RTX A6000, 4TB NVMe', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Workstation+A6', page: 'computers.html' },
  'ALASH Office 15': { price: 32900, specs: 'Intel Core i3-13100, 8GB DDR4, Intel UHD 730, 256GB SSD', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Office+15', page: 'computers.html' },
  'ALASH Mechanic KB': { price: 8900, specs: 'Механическая клавиатура, Cherry MX Red, RGB, full-size', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Mechanic+KB', page: 'peripherals.html' },
  'ALASH Slim KB': { price: 3500, specs: 'Мембранная клавиатура, низкий профиль, тихая, USB-C', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Slim+KB', page: 'peripherals.html' },
  'ALASH Pro Mouse': { price: 5900, specs: 'Игровая мышь, 26000 DPI, оптический сенсор, 8 кнопок', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Pro+Mouse', page: 'peripherals.html' },
  'ALASH Ergo Mouse': { price: 4900, specs: 'Эргономичная мышь, вертикальный хват, беспроводная', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Ergo+Mouse', page: 'peripherals.html' },
  'ALASH Crystal HP': { price: 6900, specs: 'Наушники полноразмерные, студийное звучание, микрофон', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Crystal+HP', page: 'peripherals.html' },
  'ALASH Wireless HP': { price: 8900, specs: 'Беспроводные наушники, Bluetooth 5.3, ANC, 40ч работы', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Wireless+HP', page: 'peripherals.html' },
  'ALASH Ultra HD Cam': { price: 7500, specs: 'Веб-камера 4K, автофокус, встроенный микрофон, LED-подсветка', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Ultra+HD+Cam', page: 'peripherals.html' },
  'ALASH Speed Pad': { price: 1900, specs: 'Коврик для мыши, 900x400мм, прошивка шёлка, прорезиненный', image: 'https://placehold.co/400x200/1a1f2e/3b82f6?text=ALASH+Speed+Pad', page: 'peripherals.html' }
};

// ===== ИЗБРАННОЕ =====
let favorites = JSON.parse(localStorage.getItem('alash_favorites') || '[]');

function toggleFavorite(name) {
  const idx = favorites.indexOf(name);
  if (idx > -1) favorites.splice(idx, 1);
  else favorites.push(name);
  localStorage.setItem('alash_favorites', JSON.stringify(favorites));
  document.querySelectorAll(`.favorite-btn[data-product="${name}"]`).forEach(btn => {
    btn.classList.toggle('active', favorites.includes(name));
  });
}

function initFavorites() {
  document.querySelectorAll('.product-card').forEach(card => {
    const title = card.querySelector('.product-title')?.textContent;
    if (!title) return;
    const btn = document.createElement('button');
    btn.className = 'favorite-btn';
    btn.dataset.product = title;
    btn.innerHTML = '♡';
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleFavorite(title);
    });
    if (favorites.includes(title)) btn.classList.add('active');
    const img = card.querySelector('.product-image');
    if (img && img.parentElement) {
      img.parentElement.style.position = 'relative';
      img.parentElement.appendChild(btn);
    }
  });
}

function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  const empty = document.getElementById('favoritesEmpty');
  if (!grid) return;
  grid.innerHTML = '';
  const favList = favorites.filter(name => productDatabase[name]);
  if (favList.length === 0) {
    if (empty) empty.style.display = 'block';
    grid.style.display = 'none';
    return;
  }
  if (empty) empty.style.display = 'none';
  grid.style.display = 'grid';
  favList.forEach(name => {
    const p = productDatabase[name];
    const card = document.createElement('div');
    card.className = 'product-card fade-in visible';
    card.innerHTML = `
      <div style="position:relative;">
        <img class="product-image" src="${p.image}" alt="${name}" loading="lazy" style="cursor:pointer;" onclick="location.href='${p.page}'">
        <button class="favorite-btn active" data-product="${name}">♡</button>
      </div>
      <div class="product-body">
        <h3 class="product-title">${name}</h3>
        <p class="product-specs">${p.specs}</p>
        <p class="product-price" data-price-rub="${p.price}">${formatPrice(p.price)}</p>
        <button class="product-btn" onclick="addToCartFromFav('${name}')">${t('common.addToCart')}</button>
        <a href="${p.page}" class="quick-view-btn" style="display:block;text-align:center;padding:9px;border-radius:8px;border:1px solid var(--border);color:var(--text-muted);font-size:0.9rem;text-decoration:none;margin-top:6px;">${t('common.quickView')}</a>
      </div>`;
    grid.appendChild(card);
    card.querySelector('.favorite-btn').addEventListener('click', function () {
      toggleFavorite(name);
      renderFavorites();
    });
  });
}

function addToCartFromFav(name) {
  const p = productDatabase[name];
  if (!p) return;
  const existing = cart.find(i => i.name === name);
  if (existing) existing.quantity++;
  else cart.push({ name, price: p.price, image: p.image, quantity: 1 });
  localStorage.setItem('alash_cart', JSON.stringify(cart));
  updateCartBadge();
  showToast(t('common.addToCart') + ': ' + name);
}

// ===== КНОПКА НАВЕРХ =====
function initScrollTop() {
  const btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.innerHTML = '↑';
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
}

// ===== ЧАТ-ВИДЖЕТ =====
function initChat() {
  const toggle = document.createElement('button');
  toggle.className = 'chat-toggle';
  toggle.id = 'chatToggle';
  toggle.innerHTML = '💬';
  toggle.setAttribute('aria-label', 'Чат');
  document.body.appendChild(toggle);

  const popup = document.createElement('div');
  popup.className = 'chat-popup';
  popup.id = 'chatPopup';
  popup.innerHTML = `
    <div class="chat-popup-header">
      <span>Помощник ALASH</span>
      <button class="chat-popup-close" id="chatClose">✕</button>
    </div>
    <div class="chat-popup-body" id="chatBody">
      <div class="chat-msg bot">Здравствуйте! Чем могу помочь?</div>
    </div>
    <div class="chat-quick-answers" id="chatQuick">
      <button class="chat-quick-btn" data-answer="order">Как сделать заказ?</button>
      <button class="chat-quick-btn" data-answer="time">Сроки сборки?</button>
      <button class="chat-quick-btn" data-answer="warranty">Гарантия?</button>
      <button class="chat-quick-btn" data-answer="delivery">Доставка?</button>
    </div>`;
  document.body.appendChild(popup);

  const answers = {
    order: 'Для оформления заказа добавьте товар в корзину и нажмите «Оформить». Мы свяжемся с вами для подтверждения.',
    time: 'Сборка компьютера занимает от 1 до 3 рабочих дней в зависимости от сложности конфигурации.',
    warranty: 'На все устройства предоставляется гарантия до 5 лет. В течение гарантийного срока — бесплатный ремонт.',
    delivery: 'Доставка осуществляется по всему Казахстану. Сроки доставки: 2-7 дней в зависимости от региона.'
  };

  document.getElementById('chatToggle').addEventListener('click', () => popup.classList.toggle('open'));
  document.getElementById('chatClose').addEventListener('click', () => popup.classList.remove('open'));
  document.querySelectorAll('.chat-quick-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const key = this.dataset.answer;
      const body = document.getElementById('chatBody');
      if (!body) return;
      const userMsg = document.createElement('div');
      userMsg.className = 'chat-msg user';
      userMsg.textContent = this.textContent;
      body.appendChild(userMsg);
      setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-msg bot';
        botMsg.textContent = answers[key] || 'Пожалуйста, уточните ваш вопрос.';
        body.appendChild(botMsg);
        body.scrollTop = body.scrollHeight;
      }, 500);
      body.scrollTop = body.scrollHeight;
    });
  });
}

// ===== FAQ =====
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('langSelect')?.addEventListener('change', function () { applyLanguage(this.value); });
  document.getElementById('currencySelect')?.addEventListener('change', function () { currentCurrency = this.value; applyCurrency(); });
  document.getElementById('themeToggle')?.addEventListener('click', function () { applyTheme(currentTheme === 'dark' ? 'light' : 'dark'); });
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartClear')?.addEventListener('click', () => {
    if (cart.length === 0) return;
    if (!confirm('Очистить корзину?')) return;
    cart = []; localStorage.setItem('alash_cart', JSON.stringify(cart)); updateCartBadge(); renderCartModal();
    showToast('Корзина очищена');
  });
  document.getElementById('cartModal')?.addEventListener('click', (e) => { if (e.target === e.currentTarget) closeCart(); });
  document.getElementById('searchBtn')?.addEventListener('click', openSearch);
  document.getElementById('searchClose')?.addEventListener('click', closeSearch);
  document.getElementById('searchInput')?.addEventListener('input', function () { performSearch(this.value); });
  document.getElementById('searchOverlay')?.addEventListener('click', (e) => { if (e.target === e.currentTarget) closeSearch(); });
  document.getElementById('modalOverlay')?.addEventListener('click', closeProductModal);
  document.getElementById('modalClose')?.addEventListener('click', closeProductModal);
  document.getElementById('filterApply')?.addEventListener('click', applyFilters);
  document.getElementById('filterReset')?.addEventListener('click', resetFilters);
  document.getElementById('sortSelect')?.addEventListener('change', function () { sortProducts(this.value); });

  document.querySelectorAll('.cart-actions .btn:not(.btn-outline)').forEach(btn => {
    btn.addEventListener('click', () => {
      if (cart.length === 0) return;
      showToast('Спасибо! Заказ оформлен');
      cart = []; localStorage.setItem('alash_cart', JSON.stringify(cart));
      updateCartBadge(); renderCartModal(); closeCart();
    });
  });

  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = this.closest('.product-card');
      const img = card.querySelector('.product-image')?.src || '';
      const title = card.querySelector('.product-title')?.textContent || '';
      const specs = card.querySelector('.product-specs')?.textContent || '';
      const priceRub = parseFloat(card.querySelector('[data-price-rub]')?.dataset.priceRub) || 0;
      openProductModal(img, title, specs, formatPrice(priceRub), priceRub);
    });
  });

  document.querySelectorAll('.product-btn').forEach(btn => {
    if (btn.classList.contains('quick-view-btn')) return;
    btn.addEventListener('click', function () {
      const card = this.closest('.product-card');
      const title = card.querySelector('.product-title')?.textContent || '';
      const priceRub = parseFloat(card.querySelector('[data-price-rub]')?.dataset.priceRub) || 0;
      const image = card.querySelector('.product-image')?.src || '';
      const existing = cart.find(i => i.name === title);
      if (existing) { existing.quantity++; }
      else { cart.push({ name: title, price: priceRub, image, quantity: 1 }); }
      localStorage.setItem('alash_cart', JSON.stringify(cart));
      updateCartBadge();
    });
  });

  applyTheme(currentTheme);
  applyLanguage(currentLang);
  applyCurrency();
  updateCartBadge();
  initCarousel();
  initCounters();
  initBreadcrumbs();
  initFavorites();
  initScrollTop();
  initChat();
  initFAQ();
  const isFavPage = document.getElementById('favoritesGrid');
  if (isFavPage) { applyCurrency(); renderFavorites(); }

  // === Конфигуратор ===
  const configForm = document.getElementById('configForm');
  if (configForm) {
    function calcConfig() {
      const cpu = document.getElementById('configCpu');
      const gpu = document.getElementById('configGpu');
      const ram = document.getElementById('configRam');
      const storage = document.getElementById('configStorage');
      const totalEl = document.getElementById('configTotal');
      if (!cpu || !gpu || !ram || !storage || !totalEl) return;
      const total = (parseInt(cpu.value) || 0) + (parseInt(gpu.value) || 0) + (parseInt(ram.value) || 0) + (parseInt(storage.value) || 0);
      totalEl.textContent = formatPrice(total);
      const summary = document.getElementById('configSummary');
      if (summary) {
        const parts = [];
        const cpuOpt = cpu.options[cpu.selectedIndex];
        const gpuOpt = gpu.options[gpu.selectedIndex];
        const ramOpt = ram.options[ram.selectedIndex];
        const storageOpt = storage.options[storage.selectedIndex];
        if (cpuOpt && cpu.value) parts.push(cpuOpt.textContent.split(' — ')[0]);
        if (gpuOpt && gpu.value) parts.push(gpuOpt.textContent.split(' — ')[0]);
        if (ramOpt && ram.value) parts.push(ramOpt.textContent.split(' — ')[0]);
        if (storageOpt && storage.value) parts.push(storageOpt.textContent.split(' — ')[0]);
        summary.textContent = parts.length ? parts.join(' + ') : '—';
      }
    }
    document.querySelectorAll('#configForm select').forEach(s => s.addEventListener('change', calcConfig));
    calcConfig();
    document.getElementById('configBuild')?.addEventListener('click', () => {
      const total = document.getElementById('configTotal')?.textContent || '0';
      alert(`${t('configurator.summary')}: ${total}`);
    });
  }

  // === Мобильное меню ===
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navList?.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header .container')) {
        navList?.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // === Активный пункт меню ===
  const cp = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(link => {
    if (link.getAttribute('href') === cp) link.classList.add('active');
  });

  // === Анимация ===
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    const parent = el.parentElement;
    const siblings = parent ? Array.from(parent.children).filter(c => c.classList.contains('fade-in')) : [el];
    const idx = siblings.indexOf(el);
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', Math.min(idx * 80, 400));
  });
  AOS.init({ duration: 600, once: true, offset: 30 });

  // === Форма ===
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const fields = {
      name: { el: document.getElementById('name'), validate: (v) => v.trim().length >= 2 ? '' : t('formErrors.nameMin') || 'error' },
      email: { el: document.getElementById('email'), validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : t('formErrors.emailInvalid') || 'error' },
      phone: { el: document.getElementById('phone'), validate: (v) => /^[\d\s\+\-\(\)]{7,20}$/.test(v.trim()) ? '' : t('formErrors.phoneInvalid') || 'error' },
      subject: { el: document.getElementById('subject'), validate: (v) => v ? '' : t('formErrors.subjectRequired') || 'error' },
      message: { el: document.getElementById('message'), validate: (v) => v.trim().length >= 10 ? '' : t('formErrors.messageMin') || 'error' }
    };
    Object.values(fields).forEach(f => {
      f.el?.addEventListener('blur', () => {
        const err = f.validate(f.el.value);
        const grp = f.el.closest('.form-group');
        const erEl = grp?.querySelector('.form-error');
        if (err) { grp?.classList.add('error'); if (erEl) erEl.textContent = err; }
        else { grp?.classList.remove('error'); if (erEl) erEl.textContent = ''; }
      });
    });
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      Object.values(fields).forEach(f => {
        const err = f.validate(f.el.value);
        const grp = f.el.closest('.form-group');
        const erEl = grp?.querySelector('.form-error');
        if (err) { grp?.classList.add('error'); if (erEl) erEl.textContent = err; valid = false; }
        else { grp?.classList.remove('error'); if (erEl) erEl.textContent = ''; }
      });
      if (valid) {
        contactForm.reset();
        const fp = document.getElementById('formPopup');
        if (fp) fp.classList.add('show');
      }
    });
    const fp = document.getElementById('formPopup');
    document.getElementById('popupClose')?.addEventListener('click', () => fp?.classList.remove('show'));
    fp?.addEventListener('click', (ev) => { if (ev.target === fp) fp.classList.remove('show'); });
  }
});

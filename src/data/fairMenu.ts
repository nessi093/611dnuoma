export interface FairDish {
  id: string;
  name: string;
  priceText: string;
  description: string;
  badge: string;
  category: 'hot' | 'pastry' | 'drinks';
  iconType:
    | 'soup'
    | 'cupcake'
    | 'cherry-pie'
    | 'cheese-pie'
    | 'apple-puff'
    | 'fish-cookie'
    | 'kompot'
    | 'mojito'
    | 'duchesse';
}

export const FAIR_TREATS: FairDish[] = [
  {
    id: 'yushka',
    name: 'Справжня Курсантська Юшка від 611 групи',
    priceText: 'Благодійний внесок',
    description: 'Гаряча домашня юшка зі свіжої риби, наданої мережею магазинів «Дельфін», зварена у 5-літровому чавунному казані на відкритому вогні з димком. Подається з часниковим саламауром та хлібом.',
    badge: 'Казан 5 л',
    category: 'hot',
    iconType: 'soup',
  },
  {
    id: 'cupcakes',
    name: 'Кекси від 611 групи',
    priceText: '20 грн / шт',
    description: 'Ніжні та пухкі домашні кекси з шоколадними краплями та ваніллю, спечені курсантами для гостей ярмарку.',
    badge: '20 грн',
    category: 'pastry',
    iconType: 'cupcake',
  },
  {
    id: 'cherry-pies',
    name: 'Пиріжки з вишнею',
    priceText: '30 грн / шт',
    description: 'Рум\'яні домашні пиріжки з щедрою соковитою вишневою начинкою, притрушені цукровою пудрою.',
    badge: '30 грн',
    category: 'pastry',
    iconType: 'cherry-pie',
  },
  {
    id: 'cheese-pies',
    name: 'Пиріжки з сиром',
    priceText: '25 грн / шт',
    description: 'М\'які золотисті пиріжки з ніжним домашнім сиром (творогом). Традиційна улюблена випічка.',
    badge: '25 грн',
    category: 'pastry',
    iconType: 'cheese-pie',
  },
  {
    id: 'apple-puff',
    name: 'Слойки з яблуком',
    priceText: '35 грн / шт',
    description: 'Хрустке листкове тісто із запашними запеченими дунайськими яблуками та корицею.',
    badge: '35 грн',
    category: 'pastry',
    iconType: 'apple-puff',
  },
  {
    id: 'fish-cookie',
    name: 'Печиво «Рибка»',
    priceText: '5 грн / шт',
    description: 'Золотаве хрустке тематичне печиво у формі маленької рибки. Веселий та смачний символ нашого камбузу!',
    badge: '5 грн',
    category: 'pastry',
    iconType: 'fish-cookie',
  },
  {
    id: 'kompot',
    name: 'Компот',
    priceText: '15 грн / стакан',
    description: 'Охолоджуючий домашній компот зі свіжих ягід та фруктів. Натуральний, насичений та в міру солодкий.',
    badge: '15 грн',
    category: 'drinks',
    iconType: 'kompot',
  },
  {
    id: 'mojito',
    name: 'Мохіто',
    priceText: '15 грн / стакан',
    description: 'Освіжаючий напій зі свіжою м\'ятою, соковитим лаймом та льодом.',
    badge: '15 грн',
    category: 'drinks',
    iconType: 'mojito',
  },
  {
    id: 'duchesse',
    name: 'Дюшес',
    priceText: '15 грн / стакан',
    description: 'Іскристий лимонад з виразним смаком стиглої десертної груші Дюшес.',
    badge: '15 грн',
    category: 'drinks',
    iconType: 'duchesse',
  },
];

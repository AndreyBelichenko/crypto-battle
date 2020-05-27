export interface IBannerItem {
  image:string;
  title:string;
  innerImage:string;
}

export const BANNER_CONTENT: IBannerItem[] = [
  {
    image: '/static/banner/shield.svg',
    title: 'Выбери крипто-воина',
    innerImage: '/static/banner/one-warrior.svg',
  },
  {
    image: '/static/banner/shield.svg',
    title: 'Найди соперника',
    innerImage: '/static/banner/two-warriors.svg',
  },
  {
    image: '/static/banner/shield.svg',
    title: 'Покажи кто главный',
    innerImage: '/static/banner/king.svg',
  },
];

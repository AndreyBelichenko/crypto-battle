export const headerItem = [
  {
    idItem: 'requestItem',
    resourcesKey: 'requestItem',
    name: 'Request',
    path: '/',
  },
  {
    idItem: 'battlesItem',
    resourcesKey: 'battlesItem',
    name: 'Battles',
    path: '/battles',
  },
  {
    idItem: 'storyItem',
    resourcesKey: 'storyItem',
    name: 'Story',
    path: '/story',
  },
];

export const hpDropdown = [
  { key: 1, text: '50 HP', value: 50 },
  { key: 2, text: '100 HP', value: 100 },
  { key: 3, text: '150 HP', value: 150 },
  { key: 4, text: '200 HP', value: 200 },
  { key: 5, text: '300 HP', value: 300 },
  { key: 6, text: '500 HP', value: 500 },
];

export const sidebarItems = [
  {
    type: 'link',
    idItem: 'requestItem',
    resourcesKey: 'requestItem',
    image: '/static/sidebarItems/battle.svg',
    imageHover: '/static/sidebarItems/activePerson.svg',
    name: 'Request',
    path: '/',
  },
  {
    type: 'link',
    idItem: 'battlesItem',
    resourcesKey: 'battlesItem',
    image: '/static/sidebarItems/battle.svg',
    imageHover: '/static/sidebarItems/activeBattle.svg',
    name: 'Battles',
    path: '/battles',
  },
  {
    type: 'link',
    idItem: 'storyItem',
    resourcesKey: 'storyItem',
    image: '/static/sidebarItems/story.svg',
    imageHover: '/static/sidebarItems/storyActive.svg',
    name: 'Story',
    path: '/story',
  },
  {
    type: 'modal',
    idItem: 'warriors',
    resourcesKey: 'requestItem',
    image: '/static/sidebarItems/warriors.svg',
    imageHover: '/static/sidebarItems/activeWarriors.svg',
    name: 'TOP Warriors',
  },
  {
    type: 'modal',
    idItem: 'crypto',
    resourcesKey: 'battlesItem',
    image: '/static/sidebarItems/crypto.svg',
    imageHover: '/static/sidebarItems/activeCrypto.svg',
    name: 'TOP Crypto',
  },
  {
    type: 'logout',
    idItem: 'logout',
    resourcesKey: 'battlesItem',
    image: '/static/sidebarItems/logoutItem.svg',
    imageHover: '/static/sidebarItems/activeLogout.svg',
    name: 'Battles',
  },
];

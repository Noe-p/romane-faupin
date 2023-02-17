import { Project, ProjectType } from '../types';

export const dataWorks: Project[] = [
  {
    id: 'epaves-de-la-rances',
    name: 'Épaves de la rances',
    type: ProjectType.WORK,
    date: new Date('2022-02-01'),
    description: 'Description Épaves de la rance',
    backgroundImage: {
      id: 'work1-background',
      url: '/works/epaves-de-la-rances/epaves_02.jpg',
    },
    medias: [
      {
        id: 'work1-media1',
        url: '/works/epaves-de-la-rances/epaves_01.jpg',
        description:
          'Description Épaves de la rance lorem ipsum lorem cexi est une grande description de la photo',
      },
      {
        id: 'work1-media2',
        url: '/works/epaves-de-la-rances/epaves_02.jpg',
      },
      {
        id: 'work1-media3',
        url: '/works/epaves-de-la-rances/epaves_03.jpg',
      },
      {
        id: 'work1-media4',
        url: '/works/epaves-de-la-rances/epaves_04.jpg',
      },
      {
        id: 'work1-media5',

        url: '/works/epaves-de-la-rances/epaves_05.jpg',
      },
      {
        id: 'work1-media6',
        url: '/works/epaves-de-la-rances/epaves_06.jpg',
      },
    ],
  },
];

import { Project, ProjectType } from '../types';

export const dataBooks: Project[] = [
  {
    id: 'apiculture',
    type: ProjectType.BOOK,
    date: new Date('2022-01-01'),
    name: 'Apiculture',
    description: 'Description Apiculture',
    backgroundImage: {
      id: 'book1-background',
      url: '/books/reportage/apiculture/apiculture_01.jpg',
    },
    medias: [
      {
        id: 'book1-media1',
        url: '/books/reportage/apiculture/apiculture_01.jpg',
      },
      {
        id: 'book1-media2',
        url: '/books/reportage/apiculture/apiculture_02.jpg',
      },
      {
        id: 'book1-media3',
        url: '/books/reportage/apiculture/apiculture_03.jpg',
      },
      {
        id: 'book1-media4',
        url: '/books/reportage/apiculture/apiculture_04.jpg',
      },
      {
        id: 'book1-media5',
        url: '/books/reportage/apiculture/apiculture_05.jpg',
      },
      {
        id: 'book1-media6',
        url: '/books/reportage/apiculture/apiculture_06.jpg',
      },
      {
        id: 'book1-media7',
        url: '/books/reportage/apiculture/apiculture_07.jpg',
      },
      {
        id: 'book1-media8',
        url: '/books/reportage/apiculture/apiculture_08.jpg',
      },
      {
        id: 'book1-media9',
        url: '/books/reportage/apiculture/apiculture_09.jpg',
      },
      {
        id: 'book1-media10',
        url: '/books/reportage/apiculture/apiculture_10.jpg',
      },
    ],
  },
  {
    id: 'vitrine-du-XIII',
    name: 'Vitrines du XIII',
    type: ProjectType.BOOK,
    date: new Date('2022-03-01'),
    description: 'Description Vitrines du XIII',
    backgroundImage: {
      id: 'book2-background',
      url: '/books/reportage/vitrine-du-XIII/XIII_01.jpg',
    },
    medias: [
      {
        id: 'book2-media1',
        url: '/books/reportage/vitrine-du-XIII/XIII_01.jpg',
      },
      {
        id: 'book2-media2',
        url: '/books/reportage/vitrine-du-XIII/XIII_02.jpg',
      },
      {
        id: 'book2-media3',
        url: '/books/reportage/vitrine-du-XIII/XIII_03.jpg',
      },
      {
        id: 'book2-media4',
        url: '/books/reportage/vitrine-du-XIII/XIII_04.jpg',
      },
      {
        id: 'book2-media5',
        url: '/books/reportage/vitrine-du-XIII/XIII_05.jpg',
      },
      {
        id: 'book2-media6',
        url: '/books/reportage/vitrine-du-XIII/XIII_06.jpg',
      },
      {
        id: 'book2-media7',
        url: '/books/reportage/vitrine-du-XIII/XIII_07.jpg',
      },
    ],
  },
];

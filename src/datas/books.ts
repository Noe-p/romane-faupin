import { Project, ProjectType } from '../types';

export const dataBooks: Project[] = [
  {
    id: 'apiculture',
    type: ProjectType.BOOK,
    date: new Date('2022-01-01'),
    name: 'Apiculture',
    description:
      "Reportage dans l'exploitation apicole de Bruno Petit et Remy Vanbremeersch. «Un apiculteur près de chez vous ».",
    backgroundImage: {
      id: 'apiculture-background',
      url: '/books/apiculture/apiculture_01.jpg',
    },
    medias: [
      {
        id: 'apiculture-media1',
        url: '/books/apiculture/apiculture_01.jpg',
        description: 'Description Apiculture 1',
      },
      {
        id: 'apiculture-media2',
        url: '/books/apiculture/apiculture_02.jpg',
      },
      {
        id: 'apiculture-media3',
        url: '/books/apiculture/apiculture_03.jpg',
      },
      {
        id: 'apiculture-media4',
        url: '/books/apiculture/apiculture_04.jpg',
      },
      {
        id: 'apiculture-media5',
        url: '/books/apiculture/apiculture_05.jpg',
      },
      {
        id: 'apiculture-media6',
        url: '/books/apiculture/apiculture_06.jpg',
      },
      {
        id: 'apiculture-media7',
        url: '/books/apiculture/apiculture_07.jpg',
      },
      {
        id: 'apiculture-media8',
        url: '/books/apiculture/apiculture_08.jpg',
      },
      {
        id: 'apiculture-media9',
        url: '/books/apiculture/apiculture_09.jpg',
      },
      {
        id: 'apiculture-media10',
        url: '/books/apiculture/apiculture_10.jpg',
      },
    ],
  },
  {
    id: 'vitrine-du-XIII',
    name: 'Vitrines du XIII',
    type: ProjectType.BOOK,
    date: new Date('2022-03-01'),
    backgroundImage: {
      id: 'vitrine-du-XIII-background',
      url: '/books/vitrine-du-XIII/XIII_01.jpg',
    },
    medias: [
      {
        id: 'vitrine-du-XIII-media1',
        url: '/books/vitrine-du-XIII/XIII_01.jpg',
      },
      {
        id: 'vitrine-du-XIII-media2',
        url: '/books/vitrine-du-XIII/XIII_02.jpg',
      },
      {
        id: 'vitrine-du-XIII-media3',
        url: '/books/vitrine-du-XIII/XIII_03.jpg',
      },
      {
        id: 'vitrine-du-XIII-media4',
        url: '/books/vitrine-du-XIII/XIII_04.png',
      },
      {
        id: 'vitrine-du-XIII-media5',
        url: '/books/vitrine-du-XIII/XIII_05.jpg',
      },
      {
        id: 'vitrine-du-XIII-media6',
        url: '/books/vitrine-du-XIII/XIII_06.jpg',
      },
      {
        id: 'vitrine-du-XIII-media7',
        url: '/books/vitrine-du-XIII/XIII_07.jpg',
      },
    ],
  },
  {
    id: 'hippodrome',
    type: ProjectType.BOOK,
    date: new Date('2022-01-01'),
    name: 'Hippodrome',
    backgroundImage: {
      id: 'hippodrome-background',
      url: '/books/hippodrome/HIPPODROME_01.jpg',
    },
    medias: [
      {
        id: 'hippodrome-media1',
        url: '/books/hippodrome/HIPPODROME_01.jpg',
      },
      {
        id: 'hippodrome-media2',
        url: '/books/hippodrome/HIPPODROME_02.jpg',
      },
      {
        id: 'hippodrome-media3',
        url: '/books/hippodrome/HIPPODROME_03.jpg',
      },
      {
        id: 'hippodrome-media4',
        url: '/books/hippodrome/HIPPODROME_04.jpg',
      },
      {
        id: 'hippodrome-media5',
        url: '/books/hippodrome/HIPPODROME_05.jpg',
      },
      {
        id: 'hippodrome-media6',
        url: '/books/hippodrome/HIPPODROME_06.jpg',
      },
      {
        id: 'hippodrome-media7',
        url: '/books/hippodrome/HIPPODROME_07.jpg',
      },
      {
        id: 'hippodrome-media8',
        url: '/books/hippodrome/HIPPODROME_08.jpg',
      },
      {
        id: 'hippodrome-media9',
        url: '/books/hippodrome/HIPPODROME_09.jpg',
      },
    ],
  },
];

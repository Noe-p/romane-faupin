import { Project, ProjectType } from '../types';

export const dataMicroEditions: Project[] = [
  {
    id: 'micros-editions-etoiles-de-renaudie',
    name: 'Étoiles de Renaudie',
    type: ProjectType.MICRO_EDITION,
    date: new Date('2022-02-01'),
    backgroundImage: {
      id: 'micro-editions-etoiles-de-renaudie-background',
      url: '/micro-editions/etoiles-de-renaudie/FAUPIN_HDPH321_012_IVRY.jpg',
    },
    medias: [
      {
        id: 'micro-editions-etoiles-de-renaudie-media1',
        url: '/micro-editions/etoiles-de-renaudie/FAUPIN_HDPH321_012_IVRY.jpg',
      },
      {
        id: 'micro-editions-etoiles-de-renaudie-media2',
        url: '/micro-editions/etoiles-de-renaudie/FAUPIN_HDPH321_013_IVRY.jpg',
      },
      {
        id: 'micro-editions-etoiles-de-renaudie-media3',
        url: '/micro-editions/etoiles-de-renaudie/FAUPIN_HDPH321_014_IVRY.jpg',
      },
      {
        id: 'micro-editions-etoiles-de-renaudie-media4',
        url: '/micro-editions/etoiles-de-renaudie/FAUPIN_HDPH321_015_IVRY.jpg',
      },
      {
        id: 'micro-editions-etoiles-de-renaudie-media5',
        url: '/micro-editions/etoiles-de-renaudie/FAUPIN_HDPH321_016_IVRY.jpg',
      },
      {
        id: 'micro-editions-etoiles-de-renaudie-media6',
        url: '/micro-editions/etoiles-de-renaudie/FAUPIN_HDPH321_017_IVRY.jpg',
      },
      {
        id: 'micro-editions-etoiles-de-renaudie-media7',
        url: '/micro-editions/etoiles-de-renaudie/FAUPIN_HDPH321_018_IVRY.jpg',
      },
    ],
  },
  {
    id: 'micros-editions-resurgence',
    name: 'Résurgence',
    type: ProjectType.MICRO_EDITION,
    description: [
      "Des photos retrouvées, guidant la mémoire vers la nostalgie d'une époque révolue.",
      "Des livrets pour raconter les bribes d'une histoire réinventée.",
    ],
    date: new Date('2022-02-01'),
    backgroundImage: {
      id: 'micro-editions-resurgence-background',
      url: '/micro-editions/resurgence/FAUPIN_HDPH321_001_1930.jpg',
    },
    medias: [
      {
        id: 'micro-editions-resurgence-media1',
        url: '/micro-editions/resurgence/FAUPIN_HDPH321_001_1930.jpg',
      },
      {
        id: 'micro-editions-resurgence-media2',
        url: '/micro-editions/resurgence/FAUPIN_HDPH321_002_1930.jpg',
      },
      {
        id: 'micro-editions-resurgence-media3',
        url: '/micro-editions/resurgence/FAUPIN_HDPH321_003_1930.jpg',
      },
      {
        id: 'micro-editions-resurgence-media4',
        url: '/micro-editions/resurgence/FAUPIN_HDPH321_004_1930.jpg',
      },
      {
        id: 'micro-editions-resurgence-media5',
        url: '/micro-editions/resurgence/FAUPIN_HDPH321_005_1930.jpg',
      },
      {
        id: 'micro-editions-resurgence-media6',
        url: '/micro-editions/resurgence/FAUPIN_HDPH321_006_1930.jpg',
      },
      {
        id: 'micro-editions-resurgence-media7',
        url: '/micro-editions/resurgence/FAUPIN_HDPH321_007_1930.jpg',
      },
      {
        id: 'micro-editions-resurgence-media8',
        url: '/micro-editions/resurgence/FAUPIN_HDPH321_008_1930.jpg',
      },
    ],
  },
];

import { Media } from './Media';

export enum ProjectType {
  WORK = 'work',
  BOOK = 'book',
}

export interface Project {
  type: ProjectType;
  id: string;
  name: string;
  description?: string;
  medias: Media[];
  backgroundImage: Media;
  date: Date;
}

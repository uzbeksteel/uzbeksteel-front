import { TData, TImage } from './app';

export interface INews {
  id: number;
  createdAt: string;
  news_id: number;
  name: TData;
  description: TData;
  link: string;
  image: TImage;
}

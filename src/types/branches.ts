import { TData, TImage } from './app';

export interface IBranch {
  id: number;
  createdAt: string;
  name: TData;
  address: TData;
  longitude: string;
  latitude: string;
  image: TImage;
}

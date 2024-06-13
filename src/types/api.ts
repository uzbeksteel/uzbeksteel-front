import { type AxiosResponse } from 'axios';

export interface ISuccessResponse<T> {
  status: number;
  message: string;
  data: T;
}

export type ServerResponse<T> = AxiosResponse<ISuccessResponse<T>>;

export type GeneratorResponse<T> = Generator<
  Promise<ServerResponse<T>>,
  ISuccessResponse<T>,
  ServerResponse<T>
>;

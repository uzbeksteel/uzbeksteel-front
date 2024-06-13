import { TImage } from './app';

export interface IProductStore {
  label: string;
  isBack: boolean;
  categoryId: number;
  subCategoryId: number;
  setLabel: (label: string) => void;
  setIsBack: (isBack: boolean) => void;
  setCategoryId: (categoryId: number) => void;
  setSubCategoryId: (subCategoryId: number) => void;
}

export interface ISubCategory {
  id: number;
  createdAt: string;
  name: string;
  parent_id: null | number;
  isDeleted: boolean;
}

export interface IProduct {
  id: number;
  createdAt: string;
  name_uz: string;
  name_ru: string;
  description_uz: string;
  description_ru: string;
  base_price: number;
  price: number;
  seller_code: string;
  amount: number;
  new_product: boolean;
  top_product: boolean;
  isDeleted: boolean;
  images: TImage;
  category: Category;
}

export interface Category {
  id: number;
  createdAt: string;
  name: string;
  parent_id: any;
  isDeleted: boolean;
}

export type TGetProductParams = {
  categoryId: number;
  search: string;
};

export type TProductBody = {
  name_uz: string;
  name_ru: string;
  description_uz: string;
  description_ru: string;
  base_price: number;
  price: number;
  images: string;
  seller_code: string;
  amount: number;
  category_id: number;
  new_product: boolean;
  top_product: boolean;
};

export type IEditProductResponse = {
  updateProduct: IProduct;
  isUpdated: boolean;
};

export interface ISubCategoryMain {
  id: number;
  createdAt: string;
  name: string;
  parent_id: null | number;
  isMain: boolean;
  isDeleted: boolean;
  childs?: IChild[];
}

export interface IChild {
  id: number;
  createdAt: string;
  name: string;
  parent_id: number;
  isMain: boolean;
  isDeleted: boolean;
}

import { message } from '@/app';
import { dictionary } from '@/constants';
import type { TParams } from '@/types/app';
import type { IEditProductResponse, IProduct, ISubCategory, ISubCategoryMain, TGetProductParams, TProductBody } from '@/types/products';
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { Endpoints } from './endpoints';

const getSubCategoriesMain = async (): Promise<ISubCategoryMain[]> => await api.get(Endpoints.SubCategoryMain);

const getSingleProduct = async (id: TParams): Promise<IProduct> => await api.get(`${Endpoints.Products}/${id}`);

const getProductsByCategory = async ({ categoryId, search }: TGetProductParams) => {
    const res: IProduct[] = await api.get(`${Endpoints.ProductsByCategory}${categoryId}`);

    const filteredProducts = res.filter((product) => product.name_ru.toLowerCase().includes(search?.toLowerCase() || ''));

    return filteredProducts;
};

const getSubCategories = async (parentId: number): Promise<ISubCategory[]> => await api.get(`${Endpoints.SubCategoryByParentId}${parentId}`);

const addProduct = async (body: TProductBody): Promise<IProduct> => await api.post(Endpoints.Products, body);

const editProduct = async ({ id, body }: { id: TParams; body: TProductBody }): Promise<IEditProductResponse> => await api.patch(`${Endpoints.Products}/${id}`, body);

const deleteProduct = async (id: number): Promise<{ isDeleted: boolean }> => {
    const hideMessage = message.loading(dictionary.loading, 0);

    try {
        return await api.delete(`${Endpoints.Products}/${id}`);
    } finally {
        hideMessage();
    }
};

export const useGetSubCategoriesMainQuery = () =>
    useQuery<ISubCategoryMain[]>({
        queryKey: [Endpoints.SubCategoryMain],
        queryFn: getSubCategoriesMain,
        initialData: [],
    });

export const useGetSingleProductQuery = (id: TParams) =>
    useQuery<IProduct>({
        queryKey: [Endpoints.Products, id],
        queryFn: () => getSingleProduct(id),
        enabled: !!id,
    });

export const useGetSubCategoriesQuery = (parentId: number) =>
    useQuery<ISubCategory[]>({
        queryKey: [Endpoints.SubCategoryByParentId, parentId],
        queryFn: () => getSubCategories(parentId),
        initialData: [],
        enabled: !!parentId,
    });

export const useGetProductsQuery = (params: TGetProductParams) =>
    useQuery<IProduct[]>({
        queryKey: [Endpoints.Products, params.categoryId, params.search],
        queryFn: () => getProductsByCategory(params),
        initialData: [],
    });

export const useAddProductQuery = (onSuccess: (data: IProduct) => void) =>
    useMutation({
        mutationFn: addProduct,
        onSuccess,
    });

export const useEditProductQuery = (onSuccess: (data: IEditProductResponse) => void) =>
    useMutation({
        mutationFn: editProduct,
        onSuccess,
    });

export const useDeleteProductQuery = (onSuccess: (data: { isDeleted: boolean }) => void) =>
    useMutation({
        mutationFn: deleteProduct,
        onSuccess,
    });

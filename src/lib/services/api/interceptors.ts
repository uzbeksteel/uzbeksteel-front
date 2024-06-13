import { TOKEN, getLocalStorage } from '@/lib/utils';
// import { initializeAuthStore } from '@/store/auth';
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// const { logout } = initializeAuthStore();

export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = getLocalStorage(TOKEN);

    if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
};

export const successInterceptor = (response: AxiosResponse): Promise<AxiosResponse> => {
    return Promise.resolve(response.data);
};

export const errorInterceptor = (error: AxiosError): Promise<never> => {
    //error.response?.status === 400 ||
    if (error.response?.status === 401) {
        // logout();
    }

    return Promise.reject(error?.response?.data);
};

import { SelectProps } from 'antd';

export const generateSelectOptions = <T extends Record<string, any>>(data: T[] = [], labelKey: keyof T, valueKey: keyof T): SelectProps['options'] => data.map((el) => ({ value: el[valueKey], label: el[labelKey] }));

export const createQueryString = (params: any = {}) => {
    const urlParts: string[] = [];

    Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            urlParts.push(`${key}=${value.join(',')}`);
        } else if (value !== undefined && value !== null) {
            urlParts.push(`${key}=${value}`);
        }
    });

    const queryString = urlParts.length > 0 ? `?${urlParts.join('&')}` : '';

    return queryString;
};

export function buildQueryString(params: any) {
    const queryString = Object.keys(params)
        .map((key) => {
            if (typeof params[key] === 'object') {
                return Object.keys(params[key])
                    .map((subKey) => `?${encodeURIComponent(key)}.${encodeURIComponent(subKey)}=${encodeURIComponent(params[key][subKey])}`)
                    .join('&');
            }
            return `?${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
        })
        .join('&');

    return queryString;
}

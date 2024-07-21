import { SelectProps } from 'antd';

export const generateSelectOptions = <T extends Record<string, any>>(data: T[], labelKey: keyof T, valueKey: keyof T): SelectProps['options'] => data.map((el) => ({ value: el[valueKey], label: el[labelKey] }));

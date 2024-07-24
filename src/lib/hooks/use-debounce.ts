// import { useAppStore } from '@/store';
import { useAppStore } from '@/store';
import { SearchProps } from 'antd/es/input';
import { useEffect, useState } from 'react';

export const useDebounce = () => {
    const [value, setValue] = useState('');
    const { setSearch } = useAppStore();

    const onSearch: SearchProps['onChange'] = (e) => setValue(e.target.value);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setSearch(value);
        }, 1000);

        return () => clearTimeout(debounce);
    }, [value]);

    return { onSearch };
};

import { startTransition, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

export const useBootstrap = () => {
    const { i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultLanguage = useMemo(() => (i18n.language || i18n.options.fallbackLng || 'уз') as string, [i18n.language, i18n.options.fallbackLng]);

    useEffect(() => {
        const lngParam = searchParams.get('lng') || defaultLanguage;

        if (!searchParams.get('lng')) {
            const updatedParams = new URLSearchParams(searchParams);
            updatedParams.set('lng', lngParam);
            setSearchParams(updatedParams, { replace: true });
        }

        if (i18n.language !== lngParam) {
            startTransition(() => {
                i18n.changeLanguage(lngParam);
            });
        }
    }, [searchParams, i18n, defaultLanguage]);
};

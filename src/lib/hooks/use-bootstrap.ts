import { startTransition, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

export const useBootstrap = () => {
    const { i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultLanguage = useMemo(() => (i18n.language || i18n.options.fallbackLng || 'уз') as string, [i18n.language, i18n.options.fallbackLng]);

    useEffect(() => {
        let lngParam = searchParams.get('lng') || defaultLanguage;

        if (!searchParams.get('lng')) {
            searchParams.set('lng', lngParam);
            setSearchParams(searchParams);
        }

        if (i18n.language !== lngParam) {
            startTransition(() => {
                i18n.changeLanguage(lngParam);
            });
        }
    }, [searchParams, i18n, defaultLanguage]);
};

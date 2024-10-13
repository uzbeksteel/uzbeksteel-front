export const API_URL = (import.meta.env.APP_API_URL as string) || 'https://uzbekstell-back.codetech.uz/api/v1/';

// export const API_URL = (import.meta.env.APP_API_URL as string) || 'http://localhost:3000/api/v1/';

export const IMAGE_URL = `${API_URL}/files/upload`;

export const IMAGE_PREVIEW_URL = 'http://localhost:3000';

export const StatusOptions = [
    {
        label: '«ХОРОШО»',
        value: 'GOOD',
    },
    {
        label: '«ХОРОШО»',
        value: 'SATISFIED',
    },
    {
        label: '«НЕУДОВЛЕТВОРЕН»',
        value: 'DISSATISFIED',
    },
];

export const InspectionOptions = [
    { label: 'ПЕРВИЧНЫЙ', value: 'BIRLAMCHI' },
    {
        label: 'ОЖИДАНИЕ',
        value: 'NAVBATDAGI',
    },
    {
        label: 'ВНЕ ОЧЕРЕДИ',
        value: 'NAVBATDAN_TASHQARI',
    },
];

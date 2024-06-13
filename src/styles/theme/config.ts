import { ThemeConfig } from 'antd/es/config-provider/context';
import { colors } from './colors';

const controlHeightLG = 40;

export const token: ThemeConfig['token'] = {
    colorPrimary: colors.primary,
    fontFamily: 'Montserrat, sans-serif',
    colorBorderSecondary: '#B6B6B4',
    borderRadius: 8,
};

export const components: ThemeConfig['components'] = {
    Button: {
        controlHeightLG,
    },

    Card: {
        headerFontSize: 20,
    },

    Layout: {
        headerPadding: '8px',
    },

    Form: {
        labelFontSize: 16,
        controlHeightLG: 8,
        fontWeightStrong: 500,
        itemMarginBottom: 16,
    },

    FloatButton: {
        fontSizeIcon: 16,
        controlHeightLG: 48,
        fontSizeSM: 16,
    },

    Input: {
        padding: 12,
        paddingBlock: 12,
        controlHeightLG,
    },

    Select: {
        controlHeightLG,
        padding: 12,
    },

    Tabs: {
        fontSize: 16,
        padding: 4,
    },

    Typography: {
        titleMarginBottom: 0,
        titleMarginTop: 0,
    },

    Checkbox: {
        controlInteractiveSize: 20,
    },

    Radio: {
        radioSize: 20,
        dotSize: 12,
    },

    Skeleton: {
        borderRadiusSM: 8,
    },

    Switch: {
        handleSize: 27,
        trackHeight: 31,
        trackMinWidth: 51,
    },
};

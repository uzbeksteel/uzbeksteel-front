export const BORDER_RADIUS = '7px';

export const FONT_SIZE = {
    xxs: '0.75rem',
    xs: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '1.625rem',
    xxxxl: '2rem',
};

export const FONT_WEIGHT = {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '800',
    bold: '700',
    extraBold: '800',
    black: '900',
};

export const BREAKPOINTS = {
    xs: 360,
    sm: 568,
    md: 768,
    lg: 992,
    xl: 1280,
    xxl: 1920,
} as const;

const getMedia = <T extends number>(breakpoint: T): `(min-width: ${T}px)` => `(min-width: ${breakpoint}px)`;

export const media = {
    xs: getMedia(BREAKPOINTS.xs),
    sm: getMedia(BREAKPOINTS.sm),
    md: getMedia(BREAKPOINTS.md),
    lg: getMedia(BREAKPOINTS.lg),
    xl: getMedia(BREAKPOINTS.xl),
    xxl: getMedia(BREAKPOINTS.xxl),
};

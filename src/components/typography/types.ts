export interface TypographyProps {
    type?: 'title' | 'text' | 'paragraph';
    color?: string;
    marginBottom?: string;
    fontWeight?: string;
    level?: 1 | 2 | 3 | 4 | 5;
    children: React.ReactNode;
}

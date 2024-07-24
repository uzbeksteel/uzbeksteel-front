import { FC } from 'react';
import { StyledParagraph, StyledText, StyledTitle } from './style';
import { TypographyProps } from './types';

export const Typography: FC<TypographyProps> = ({ type, children, marginBottom, ...props }) => {
    switch (type) {
        case 'title':
            return (
                <StyledTitle {...props} level={props.level}>
                    {children}
                </StyledTitle>
            );
        case 'text':
            return <StyledText {...props}>{children}</StyledText>;
        case 'paragraph':
            return <StyledParagraph {...props}>{children}</StyledParagraph>;
        default:
            return <StyledText {...props}>{children}</StyledText>;
    }
};

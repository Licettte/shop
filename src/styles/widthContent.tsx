import { ReactNode } from 'react';
import styled from 'styled-components';
import { dekstop, tablet } from './variables';

const WidthContentWrapper = styled.div`
    @media (max-width: ${tablet}) {
        max-width: 633px;
        margin: auto;
    }

    @media (min-width: ${tablet}) {
        max-width: 726px;
        margin: auto;
    }

    @media (min-width: ${dekstop}) {
        max-width: 1110px;
        margin: auto;
    }
`;

interface ContentWrapperProps {
    children: ReactNode;
}

export const WidthContent = ({ children }: ContentWrapperProps) => {
    return <WidthContentWrapper>{children}</WidthContentWrapper>;
};

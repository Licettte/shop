import { ReactNode } from 'react';
import styled from 'styled-components';

const ContentFlex = styled.section`
    min-height: calc(100vh - 180px);
`;

interface ContentWrapperProps {
    children: ReactNode;
}

export const Content = ({ children }: ContentWrapperProps) => {
    return <ContentFlex>{children}</ContentFlex>;
};

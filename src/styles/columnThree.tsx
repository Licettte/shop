import styled from 'styled-components';
import { dekstop, tablet } from './variables';
const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    justify-items: center;

    @media (min-width: ${tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        justify-items: center;
    }

    @media (min-width: ${dekstop}) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2.4rem;
        grid-row-gap: 1.2rem;
        margin-bottom: 3rem;
    }
`;

export const ColumnThree = ({ children }: any) => {
    return <Wrapper>{children}</Wrapper>;
};

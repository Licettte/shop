import styled from 'styled-components';
import error from './error.gif';
import { useNavigate } from 'react-router-dom';
import { PRIMARY_COLOR } from '../../styles/colors';
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;
`;

const WrapperLeft = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

const Img = styled.img`
    width: 300px;
    height: 345px;
    border-radius: 100%;
`;

const ButtonBack = styled.button`
    font-size: 24px;
    cursor: pointer;
    margin-top: 25px;
    &:hover {
        color: ${PRIMARY_COLOR};
    }
`;

export function Error() {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <WrapperLeft>
                <h1>Нет у нас такого..</h1>
                <ButtonBack onClick={() => navigate(-1)}>назад</ButtonBack>
            </WrapperLeft>
            <Img src={error} alt='error ' />
        </Wrapper>
    );
}

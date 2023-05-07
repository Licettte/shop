import { selectOrder } from '../slice/basketSlice';
import { useAppSelector } from '../store/hooks';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heart from '../img/heart.svg';
import { ReactComponent as Basket } from '../img/basket.svg';
import { PRIMARY_COLOR, DARK_2XL_COLOR } from '../styles';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Title = styled.h1`
    &:hover {
        color: ${PRIMARY_COLOR};
    }
`;

const NavigationHeader = styled.a`
    margin-right: -20px;
`;
const NavigationButton = styled.a`
    margin: 22px;
    position: relative;
    cursor: pointer;
`;

const Counter = styled.span`
    border-radius: 10px;
    background-color: ${PRIMARY_COLOR};
    /* primary */
    border-radius: 10px;
    background-color: ${PRIMARY_COLOR};
    width: 18px;
    height: 18px;
    position: absolute;
    top: -15px;
    left: 15px;
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 15px;
`;

const BasketImg = styled(Basket)`
    fill: #838383;
    ${NavigationButton}:hover & {
        fill: ${DARK_2XL_COLOR};
    }
`;

export function Header() {
    const order = useAppSelector(selectOrder); //извлекаем state из store

    return (
        <Wrapper>
            <Title>
                <Link to='/'>QPICK</Link>{' '}
            </Title>

            <NavigationHeader>
                <NavigationButton>
                    <Link to='/favorite'>
                        <img src={heart} alt='heart' />
                        <Counter>2</Counter>
                    </Link>
                </NavigationButton>

                <NavigationButton>
                    <Link to='/basket'>
                        <BasketImg />
                        <Counter>{order.length}</Counter>
                    </Link>
                </NavigationButton>
            </NavigationHeader>
        </Wrapper>
    );
}

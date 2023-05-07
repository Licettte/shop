import { useAppSelector } from '../store/hooks';
import { selectOrder } from '../slice/basketSlice';
import { ListBasket } from './ListBasket';
import { BasketItem } from '../types';
import { DARK_M_COLOR, DARK_XL_COLOR } from '../styles/colors';
import { dekstop } from '../styles/variables';

import styled from 'styled-components';

const BasketWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    @media (max-width: ${dekstop}) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 60x;
    }
`;

const Title = styled.h2`
    color: ${DARK_M_COLOR};
    margin-top: 3.5rem;
`;

const TotalCard = styled.div`
    width: 348.98px;
    height: 114px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    @media (max-width: ${dekstop}) {
        margin: 4.2rem;
    }
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 15px;
    padding: 22px 18px 0px 22px;
`;

const TotalTitle = styled.h6`
    color: #000000;
`;

const TotalPriceItem = styled.h6`
    color: #000000;
    width: 74px;
`;

const ListBasketWrapper = styled.div``;

const Order = styled.button`
    margin-top: 14px;
    width: 350px;
    height: 65px;
    background: ${DARK_XL_COLOR};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-weight: 600;
    font-size: 17px;
    color: #ffffff;
    cursor: pointer;
`;

export function Basket() {
    const order = useAppSelector(selectOrder);

    const totalPrice = order.length
        ? order.reduce(
              (sum: number, itemOrder: BasketItem) =>
                  sum + itemOrder.price * itemOrder.quantity,
              0
          )
        : 0;

    return (
        <>
            <Title> Корзина </Title>
            <BasketWrapper>
                <ListBasketWrapper>
                    <ListBasket />
                </ListBasketWrapper>
                <TotalCard>
                    <Total>
                        <TotalTitle> ИТОГО </TotalTitle>
                        <TotalPriceItem> ₽ {totalPrice} </TotalPriceItem>
                    </Total>
                    <Order> Перейти к оформлению </Order>
                </TotalCard>
            </BasketWrapper>
        </>
    );
}

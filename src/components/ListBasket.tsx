import { BasketItem } from '../types';
import { ReactComponent as DeleteBtn } from '../img/delete.svg';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
    deleteItem,
    incrementItem,
    decrementItem,
    selectOrder,
} from '../slice/basketSlice';
import styled from 'styled-components';
import {
    PRIMARY_COLOR,
    LIGHT_PRIMARY_COLOR,
    DARK_L_COLOR,
    DARK_2XL_COLOR,
} from '../styles';

const CardWrapper = styled.div`
    padding: 14px 28px 18px 20px;
    margin-bottom: 2.2rem;
    display: flex;
    justify-content: space-between;
    width: 633px;
    height: 218px;
    left: 165px;
    top: 126px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
`;
const CardLeft = styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: flex-start;
`;

const CardCount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CardImg = styled.img`
    width: 146.53px;
    height: 136px;
`;

const Counter = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonMinus = styled.button`
    display: inline-block;
    width: 30px;
    height: 30px;
    background: linear-gradient(#fff, #fff), ${LIGHT_PRIMARY_COLOR};
    background-position: center;
    background-size: 50% 2px, 2px 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin: 0px 25px 0px 0px;
    &:hover:enabled {
        background-color: ${PRIMARY_COLOR};
        cursor: pointer;
    }
`;
const QuantityItem = styled.h3`
    width: 10px;
    color: ${DARK_2XL_COLOR};
`;
const ButtonPlus = styled.button`
    display: inline-block;
    width: 30px;
    height: 30px;
    background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
        ${LIGHT_PRIMARY_COLOR};
    background-position: center;
    background-size: 50% 2px, 2px 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin: 0px 0px 0px 25px;
    &:hover {
        background-color: ${PRIMARY_COLOR};
    }
    cursor: pointer;
`;

const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 25px;
`;

const CardTitle = styled.h4`
    margin-bottom: 12px;
`;
const CardPrice = styled.h6`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CardRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-between;
    align-items: flex-end;
`;
const ButtonDelete = styled.button`
    cursor: pointer;
    border-radius: 20px;
`;

const DeleteImg = styled(DeleteBtn)`
    fill: #df6464;
    ${ButtonDelete}:hover & {
        fill: #df2222;
    }
`;

const TotalPriceItem = styled.h3`
    color: ${DARK_L_COLOR};
`;

export function ListBasket() {
    const dispatch = useAppDispatch(); 
    const order = useAppSelector(selectOrder);

    return order.length ? (
        order.map((item: BasketItem) => (
            <>
                <CardWrapper key={item.id}>
                    <CardLeft>
                        <CardCount>
                            <CardImg src={item.img} alt={item.title} />
                            <Counter>
                                <ButtonMinus
                                    disabled={item.quantity === 1}
                                    aria-label='button to decrease the amount of goods in the cart'
                                    onClick={() =>
                                        dispatch(decrementItem(item))
                                    }
                                ></ButtonMinus>
                                <QuantityItem> {item.quantity}</QuantityItem>
                                <ButtonPlus
                                    aria-label='button to increase the amount of goods in the cart'
                                    onClick={() =>
                                        dispatch(incrementItem(item))
                                    }
                                ></ButtonPlus>
                            </Counter>
                        </CardCount>
                        <CardDescription>
                            <CardTitle> {item.title}</CardTitle>
                            <CardPrice> {item.price} ₽ </CardPrice>
                        </CardDescription>
                    </CardLeft>

                    <CardRight>
                        <ButtonDelete
                            aria-label='button to delete goods in the cart'
                            onClick={() => dispatch(deleteItem(item))}
                        >
                            <DeleteImg />
                        </ButtonDelete>
                        <TotalPriceItem>
                            {item.quantity * item.price} ₽{' '}
                        </TotalPriceItem>
                    </CardRight>
                </CardWrapper>
            </>
        ))
    ) : (
        <h3> нет добавленных товаров</h3>
    );
}

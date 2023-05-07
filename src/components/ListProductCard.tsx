import styled from 'styled-components';
import { ColumnThree } from '../styles/columnThree';
import { ProductCard } from './ProductCard';
import { useEffect } from 'react';
import { CardItem } from '../types';
import { Preloader } from './preloader/Preloader';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
    selectWiredHeadphones,
    selectWirelessHeadphones,
    selectStatus,
    fetchProductCards,
} from '../slice/asyncCardsSlice';

const Main = styled.main`
    margin-top: 4.8rem;
`;

export const ListProductCard = () => {
    const dispatch = useAppDispatch(); 
    const wiredHeadphones = useAppSelector(selectWiredHeadphones);
    const wirelessHeadphones = useAppSelector(selectWirelessHeadphones);

    const status = useAppSelector(selectStatus);
    
    useEffect(() => {
        dispatch(fetchProductCards());
    }, []);

    function iterateGoods(arrayItem: CardItem[]) {
        return arrayItem.length
            ? arrayItem.map((item) => {
                  return <ProductCard key={item.id} {...item} />;
              })
            : console.log('array is empty');
    }

    return (
        <Main>
            <h2>Наушники</h2>
            {status === 'loading' ? (
                <Preloader />
            ) : (
                <>
                    <ColumnThree>{iterateGoods(wiredHeadphones)}</ColumnThree>
                    <h2>Беспроводные наушники</h2>
                    <ColumnThree>
                        {iterateGoods(wirelessHeadphones)}
                    </ColumnThree>
                </>
            )}
        </Main>
    );
};

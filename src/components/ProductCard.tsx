import styled from 'styled-components';
import { addItem } from '../slice/basketSlice';
import { useAppDispatch } from '../store/hooks';
import { ReactComponent as Star } from '../img/star.svg';
import { CardItem } from '../types';
import {
    PRIMARY_COLOR,
    LIGHT_PRIMARY_COLOR,
    DARK_M_COLOR,
    DARK_L_COLOR,
    DARK_2XL_COLOR,
} from '../styles';
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { onEnter, onLeave } from '../animation/scale';

const Wrapper = styled.article`
    width: 350px;
    height: 407px;
    padding: 15px 22px 32px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    margin-top: 20px;
    overflow: hidden;
`;

const CardImage = styled.img`
    width: 22rem;
    height: 23.8rem;
    display: block;
    margin: auto;
`;

const CardBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 6rem;
    margin-top: 4rem;
`;

const CardPrice = styled.h3`
    color: ${PRIMARY_COLOR};
    position: relative;
    display: flex;
`;

const Discont = styled.span`
    font-size: 13px;
    color: ${LIGHT_PRIMARY_COLOR};
    text-decoration: line-through;
    text-decoration-thickness: 0.5px;
    position: absolute;
    top: 20px;
    right: 8px;
`;

const StyledSVG = styled(Star)`
    fill: ${LIGHT_PRIMARY_COLOR};
    margin-right: 10px;
`;

const Rating = styled.h3`
    color: ${DARK_M_COLOR};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 8px;
    width: 84px;
    &:hover ${StyledSVG} {
        fill: ${PRIMARY_COLOR};
    }
    &:hover {
        color: ${DARK_L_COLOR};
    }
`;

const ButtonBuy = styled.button`
    border: 0;
    background: none;
    color: ${DARK_2XL_COLOR};
    font-size: 1.7rem;
    font-weight: 600;
    padding: 0;
    text-align: left;
    cursor: pointer;
    &:hover {
        color: ${PRIMARY_COLOR};
    }
`;

export const ProductCard = ({
    img,
    title,
    price,
    discont,
    rate,
    id,
}: CardItem) => {
    const dispatch = useAppDispatch();
    const item = { img, title, price, discont, rate, id };

    const cardImg = useRef<HTMLImageElement>(null);
    const cardBody = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        let tl = gsap.timeline();
      
        tl.fromTo(cardImg.current, { y: -400 }, { y: 0, duration: 1 });
        tl.fromTo(
            cardBody.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    }, []);

    return (
        <Wrapper onMouseEnter={onEnter} onMouseLeave={onLeave} >
            <CardImage ref={cardImg} src={img} alt={title} />
            <CardBody ref={cardBody}>
                <h3>{title}</h3>
                <CardPrice>
                    {price} ₽
                    {discont === null ? null : <Discont> {discont} ₽</Discont>}
                </CardPrice>
                <Rating>
                    <StyledSVG /> {rate}
                </Rating>
                <ButtonBuy onClick={() => dispatch(addItem(item))}>
                    Купить
                </ButtonBuy>
            </CardBody>
        </Wrapper>
    );
};

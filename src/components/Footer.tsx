import { selectOrder } from '../slice/basketSlice';
import { useAppSelector } from '../store/hooks';
import styled from 'styled-components';

import { ReactComponent as Basket } from '../img/basket.svg';
import circle from '../img/circle.svg';
import vk from '../img/vk.svg';
import telegram from '../img/telegram.svg';
import whatsApp from '../img/whatsApp.svg';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PRIMARY_COLOR, DARK_XL_COLOR } from '../styles';
import { dekstop } from '../styles/variables';

const FooterWrapper = styled.footer`
    padding: 30px 30px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px 30px 0px 0px;
    height: 150px;
    @media (max-width: ${dekstop}) {
        margin-top: 20px;
    }
`;

const FooterItem = styled.nav`
    cursor: pointer;
    width: 165px;
`;

const NavigationItem = styled.li`
    margin-bottom: 10px;
`;

const Language = styled.h5`
    padding-left: 34px;
    margin-top: 36px;
    display: flex;
    background-image: url(${circle});
    background-position: left center;
    background-repeat: no-repeat;
    font-weight: 400;
    color: #101010;
`;

const H7 = styled.p`
    font-weight: 500;
    font-size: 15px;
    margin-right: 14px;
    cursor: pointer;
    width: 32px;
    color: ${DARK_XL_COLOR};
`;

const Rus = styled(H7)`
    font-weight: 700;
    font-size: 15px;
    color: ${PRIMARY_COLOR};
`;

const VK = styled.img`
    margin-right: 18px;
    width: 30px;
`;
const Telegram = styled.img`
    margin-right: 18px;
    width: 30px;
    height: 30px;
`;

const WhatsApp = styled.img`
    margin-right: 18px;
    width: 30px;
    height: 30px;
`;

const Ul = styled.ul`
    padding: 0;
`;

const SocialNetworks = styled.ul`
    display: flex;
    padding: 0px;
`;

export function Footer() {
    const [currentPath, setCurrentPath] = useState('');
    const location = useLocation();
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <FooterWrapper>
            <h1>QPICK</h1>
            <FooterItem>
                <ul>
                    <NavigationItem>
                        <a href='#'> Избранное </a>
                    </NavigationItem>
                </ul>
                <ul>
                    <NavigationItem>
                        <a href='#'> Корзина </a>
                    </NavigationItem>
                </ul>
                <ul>
                    <NavigationItem>
                        <a href='#'> Контакты </a>
                    </NavigationItem>
                </ul>
            </FooterItem>

            <FooterItem>
                <h5> Условия сервиса </h5>
                <Language>
                    {currentPath === '/basket' ? <H7> Kaз </H7> : null}
                    <Rus> Рус </Rus>
                    <H7> Eng </H7>
                </Language>
            </FooterItem>
            <SocialNetworks>
                <Ul>
                    <li>
                        <a href=''>
                            <VK src={vk} alt='vk' />
                        </a>
                    </li>
                </Ul>
                <Ul>
                    <li>
                        <a href=''>
                            <Telegram src={telegram} alt='telegram' />
                        </a>
                    </li>
                </Ul>
                <Ul>
                    <li>
                        <a href=''>
                            <WhatsApp src={whatsApp} alt='whatsApp' />
                        </a>
                    </li>
                </Ul>
            </SocialNetworks>
        </FooterWrapper>
    );
}

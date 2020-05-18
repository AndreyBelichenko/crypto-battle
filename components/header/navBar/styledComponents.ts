import styled from 'styled-components';

import colorMatrix from '../../../constans/colorMatrix';

const color = colorMatrix;

export const NavBarWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    `;

export const Item = styled.a`
    font-family: PT Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    color: ${color.white};
    &:hover {
    color: ${color.pomegranate};
    }
    &:active {
    color: ${color.pomegranate};
    border-bottom: 3px solid ${color.pomegranate};
    }
    `;

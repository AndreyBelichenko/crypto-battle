import styled from 'styled-components';

import colorMatrix from '../../../constans/colorMatrix';

const color = colorMatrix;

export const AppButtonBlockWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: 'space-between';
    `;

export const ButtonWrapper = styled.div`
    height: 50%;
    margin: 10px;
    font-family: PT Serif;
    text-align: center;
    `;

export const Btn = styled.button`
    background: ${color.pomegranate};
    color: ${color.white};
    border: none;
    `;

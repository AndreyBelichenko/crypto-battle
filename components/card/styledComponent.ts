import styled from 'styled-components';

import { battleColor } from '../../constants/styledConstants';

export const ParentDiv = styled.div`
  width: 45%;
  height: 179px;
  padding: 15px;
  @media(max-width: 1920px){
  width: 1920px;
  height: 1080px;
  }
  @media(max-width: 1070px){
  width: 1070px;
  height: 1080px;
  }
`;

export const CryptoCardPerson = styled.div`
  width: 65%;
  left: 0;
  bottom: 0;
`;

export const MainDiv = styled.div`
  width: 100%;
  height: 148px;
  background: white;
  display: flex;
  justify-content: row;
  border-radius: 5px;
  border: 1px solid ${battleColor.battleBorderColor};
  -webkit-box-shadow: 0px 10px 11px -7px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 11px -7px rgba(0,0,0,0.75);
  box-shadow: 0px 10px 11px -7px rgba(0,0,0,0.75);  padding: 15px;
  @media(max-width: 1070px){
  height: 100px;
  }
  @media(max-width: 990px){
  height: 140px;
  }
  @media(max-width: 850px){
  height: 100px;
  }
  @media(max-width: 766px){
  height: 140px;
  }
  @media(max-width: 600px){
  height: 100px;
  }
  @media(max-width: 375px){
  height: 80px;
  }
`;

export const BattleBlock = styled.div`
  width: 20%;
  height: 100%;
`;

export const CryptoCardMain = styled.div`
  width: 95px;
  height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  background: white;
  border: 1px solid red;
  padding: 5px;
  margin-top: -27px;
  @media(max-width: 1280px) {
  width: 75px;
  height: 90px;
  }
  @media(max-width: 1070px) {
  width: 60px;
  height: 60px;
  }
  @media(max-width: 990px) {
  width: 75px;
  height: 90px;
  }
  @media(max-width: 850px) {
  width: 60px;
  height: 60px;
  }
  @media(max-width: 766px) {
  width: 75px;
  height: 90px;
  }
  @media(max-width: 600px) {
  width: 60px;
  height: 60px;
  }
  @media(max-width: 500px) {
  width: 50px;
  height: 50px;
  }
  @media(max-width: 375px) {
  width: 40px;
  height: 40px;
  }
`;

export const CryptoCardLogo = styled.div`
  width: 40%;
`;

export const CryptoCardHp = styled.div`
  height: 20px;
  width: 95px;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  @media(max-width: 1280px) {
  width: 75px;
  }
  @media(max-width: 1070px) {
  width: 60px;
  height: 15px;
  }
  @media(max-width: 990px) {
  width: 75px;
  }
  @media(max-width: 850px) {
  width: 60px;
  height: 15px;
  }
  @media(max-width: 766px) {
  width: 75px;
  }
  @media(max-width: 600px) {
  width: 60px;
  }
  @media(max-width: 500px) {
  width: 50px;
  }
  @media(max-width: 375px) {
  width: 40px;
  }
`;

export const UserPhoto = styled.img`
  height:80px;
  width: 80px;
  border-radius: 50%;
  @media(max-width: 1440px) {
  height:75px;
  width: 75px;
  }
  @media(max-width: 1280px) {
  width: 65px;
  height: 65px;
  }
  @media(max-width: 1070px) {
  width: 45px;
  height: 45px;
  }
  @media(max-width: 990px) {
  width: 50px;
  height: 50px;
  }
  @media(max-width: 850px) {
  width: 45px;
  height: 45px;
  }
  @media(max-width: 766px) {
  width: 55px;
  height: 55px;
  }
  @media(max-width: 600px) {
  width: 50px;
  height: 50px;
  }
  @media(max-width: 500px) {
  width: 40px;
  height: 40px;
  }
  @media(max-width: 415px) {
  width: 35px;
  height: 35px;
  }
  @media(max-width: 376px) {
  width: 35px;
  height: 35px;
  }
`;

export const AvardsImage = styled.img`
  width: 85px;
  height: 133px;
  @media(max-width: 1280px) {
  width: 75px;
  height: 110px;
  }
  @media(max-width: 1070px) {
  width: 60px;
  height: 80px;
  }
  @media(max-width: 990px) {
  width: 75px;
  height: 110px;
  }
  @media(max-width: 850px) {
  width: 60px;
  height: 80px;
  }
  @media(max-width: 766px) {
  width: 75px;
  height: 110px;
  }
  @media(max-width: 600px) {
  width: 60px;
  height: 80px;
  }
  @media(max-width: 415px) {
  width: 40px;
  height: 60px;
  }
  @media(max-width: 376px) {
  width: 35px;
  }
  `;

export const ProgressText = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  font-size: 13px;
  z-index: 2;
  text-align: center;
  font-weight: bold;
  @media(max-width: 415px) {
  font-size: 8px;
  }
`;

export const UserName = styled.p`
  font-weight: normal;
  font-size: 16px;
  @media(max-width: 1070px){
  font-size: 12px;
  }
  @media(max-width: 990px){
  font-size: 16px;
  }
  @media(max-width: 850px){
  font-size: 12px;
  }
  @media(max-width: 766px){
  font-size: 16px;
  }
  @media(max-width: 600px){
  font-size: 12px;
  }
  @media(max-width: 415px) {
  font-size: 8px;
  }
`;

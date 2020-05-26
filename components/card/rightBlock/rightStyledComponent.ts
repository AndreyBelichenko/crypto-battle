import styled from 'styled-components';
import fonts from '../../../constants/fonts';

export const GamerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 100%;
  @media (max-width: 770px) {
  margin-left: -10px;
  }
`;

export const CryptoCard = styled.div`
  display: flex;
  width: 33.3%;
  height: 100%;
  flex-direction: column;
  padding-left: 32px;
  @media (max-width: 1680px) {
  padding-left: 17px;
  }
  @media (max-width: 1540px) {
  padding-left: 7px;
  }
  @media (max-width: 1366px) {
  padding-left: 4px;
  }
  @media (max-width: 1200px) {
  padding-left: 12px;
  }
  @media (max-width: 1070px) {
  padding-left: 3px;
  }
  @media (max-width: 992px) {
  padding-left: 0px;
  }
  @media (max-width: 990px) {
  padding-left: 6px;
  }
  @media (max-width: 950px) {
  padding-left: 9px;
  }
  @media (max-width: 800px) {
  padding-left: 1px;
  }
  @media (max-width: 770px) {
  padding-left: 11px;
  }
  @media (max-width: 766px) {
  padding-left: 15px;
  }
  @media (max-width: 600px) {
  padding-left: 11px;
  }
  @media (max-width: 415px) {
  padding-left: 13px;
  }
  @media (max-width: 376px) {
  padding-left: 13px;
  }
  @media (max-width: 361px) {
  padding-left: 13px;
  }
`;

export const ImageCardLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 4.39%;
  top: 0.83%;
  @media (max-width: 1070px) {
  height: 35px;
  width: 35px;
  }
  @media (max-width: 990px) {
  height: 50px;
  width: 50px;
  }
  @media (max-width: 850px) {
  height: 35px;
  width: 35px;
  }
  @media (max-width: 766px) {
  height: 50px;
  width: 50px;
  }
  @media (max-width: 600px) {
  height: 35px;
  width: 35px;
  }
  @media (max-width: 500px) {
  height: 27px;
  width: 27px;
  }
  @media (max-width: 376px) {
  height: 23px;
  width: 23px;
  }
`;

export const ImageCardPerson = styled.img`
  height: 80px;
  weight: 50px;
  position: absolute;
  left: 26.98%;
  top: 13.61%;
  @media (max-width: 1070px) {
  height: 53px;
  }
  @media (max-width: 990px) {
  height: 80px;
  }
  @media(max-width: 850px){
  height: 53px;
  }
  @media (max-width: 766px) {
  height: 80px;
  }
  @media(max-width: 600px){
  height: 53px;
  }
  @media(max-width: 500px){
  height: 43px;
  }
  @media(max-width: 415px) {
  top: 15.61%;
  left: 39.98%;
  }
  @media(max-width: 376px){
  height: 32px;
  }
`;

export const CryptoCardName = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  font-weight: normal;
  font-size: 20px;
  font-family: ${fonts.header}
  @media (max-width: 1070px) {
  font-size: 14px;
  }
  @media (max-width: 990px) {
  font-size: 20px;
  }
  @media (max-width: 850px) {
  font-size: 14px;
  }
  @media (max-width: 766px) {
  font-size: 20px;
  }
  @media (max-width: 600px) {
  font-size: 14px;
  }
  @media (max-width: 500px) {
  font-size: 11px;
  }
  @media (max-width: 375px) {
  font-size: 9px;
  top: 23px;
  }
`;

export const AwardsBlock = styled.div`
  width: 33.3%;
  height: 100%;
  position: relative;
  padding-left: 56px;
  top: -13px;
  @media(max-width: 1680px){
  padding-left: 37px;
  }
  @media(max-width: 1620px){
  padding-left: 37px;
  }
  @media(max-width: 1540px){
  padding-left: 32px;
  }
  @media(max-width: 1440px){
  padding-left: 22px;
  }
  @media(max-width: 1366px){
  padding-left: 20px;
  }
  @media (max-width: 1280px) {
  padding-left: 18px;
  top: -11px;
  }
  @media (max-width: 1070px) {
  padding-left: 25px;
  }
  @media (max-width: 1024px) {
  padding-left: 20px;
  }
  @media (max-width: 992px) {
  padding-left: 18px;
  }
  @media (max-width: 990px) {
  padding-left: 22px;
  }
  @media (max-width: 950px) {
  padding-left: 18px;
  }
  @media (max-width: 900px) {
  padding-left: 13px;
  }
  @media (max-width: 850px) {
  padding-left: 23px;
  }
  @media (max-width: 800px) {
  padding-left: 21px;
  }
  @media (max-width: 770px) {
  padding-left: 27px;
  }
  @media (max-width: 766px) {
  padding-left: 41px;
  }
  @media (max-width: 700px) {
  padding-left: 34px;
  }
  @media (max-width: 600px) {
  padding-left: 23px;
  }
  @media(max-width: 415px){
  padding-left: 28px;
  }
  @media(max-width: 376px){
  padding-left: 25px;
  top: -13px;
  }
`;

export const AwardsText = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  position: absolute;
  line-height: 1;
  top: 52%;
  left: 79px;
  font-family: ${fonts.header}
  transform: translate(-50%, -50%);
  @media(max-width: 1680px) {
  left: 62px;
  }
  @media(max-width: 1560px) {
  left: 61px;
  }
  @media(max-width: 1440px) {
  left: 45px;
  }
  @media(max-width: 1366px) {
  left: 43px;
  }
  @media(max-width: 1280px) {
  left: 41px;
  top: 42%;
  font-size: 11px;
  }
  @media(max-width: 1070px) {
  left: 40px;
  top: 48%;
  font-size: 9px;
  }
  @media(max-width: 1024px) {
  left: 35px;
  }
  @media(max-width: 992px) {
  left: 33px;
  }
  @media(max-width: 990px) {
  left: 42px;
  top: 46%;
  font-size: 11px;
  }
  @media(max-width: 950px) {
  left: 39px;
  }
  @media(max-width: 900px) {
  left: 34px;
  }
  @media(max-width: 850px){
   font-size: 9px;
   left: 39px;
   top: 50%;
  }
  @media(max-width: 800px) {
  left: 36px;
  }
  @media(max-width: 770px) {
  left: 42px;
  }
  @media(max-width: 766px) {
  left: 61px;
  top: 46%;
  font-size: 11px;
  }
  @media(max-width: 700px) {
  left: 54px;
  }
  @media(max-width: 600px){
   font-size: 9px;
   left: 49px;
   top: 50%;
  }
  @media(max-width: 500px) {
  left: 39px;
  }
  @media(max-width: 415px) {
  left: 36px;
  top: 34%;
  font-size: 8px;
  }
  @media(max-width: 376px) {
  font-size: 6px;
  left: 34px;
  top: 51%;
  }
`;

export const UserBlock = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: -84px;
  @media(max-width: 1680px){
  margin-right: -54px;
  }
  @media(max-width: 1600px){
  margin-right: -52px;
  }
  @media(max-width: 1440px){
  margin-right: -51px;
  }
  @media(max-width: 1360px){
  margin-right: -48px;
  }
   @media(max-width: 1280px){
  margin-right: -44px;
  }
  @media(max-width: 1070px){
  margin-right: -41px;
  }
  @media(max-width: 992px){
  margin-right: -47px;
  }
  @media(max-width: 770px){
  margin-right: -56px;
  }
  @media(max-width: 770px){
  margin-right: -72px;
  }
  @media(max-width: 700px){
  margin-right: -86px;
  }
  @media(max-width: 600px){
  margin-right: -60px;
  }
  @media(max-width: 500px){
  margin-right: -58px;
  }
  @media(max-width: 415px){
  margin-right: -60px;
  }
  @media(max-width: 376px){
  margin-right: -55px;
  }
  `;

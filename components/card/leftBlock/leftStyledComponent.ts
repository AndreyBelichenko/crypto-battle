import styled from 'styled-components';
import fonts from '../../../constants/fonts';

export const GamerBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 100%;
`;

export const CryptoCard = styled.div`
  display: flex;
  width: 33.3%;
  height: 100%;
  flex-direction: column;
  @media (max-width: 1440px) {
  margin-right: 14px;
  }
  @media(max-width: 1360px){
  margin-right: none;
  }
  @media(max-width: 1280px){
  margin-right: 16px;
  }
  @media(max-width: 1200px){
  margin-right: 15px;
  }
  @media(max-width: 1070px){
  margin-right: -2px;
  }
  @media(max-width: 1024px){
  margin-right: 3px;
  }
  @media(max-width: 992px){
  margin-right: 3px;
  }
  @media(max-width: 900px){
  margin-right: 14px;
  }
  @media(max-width: 850px){
  margin-right: 5px;
  }
  @media(max-width: 766px){
  margin-right: -14px;
  }
  @media(max-width: 700px){
  margin-right: -2px;
  }
  @media (max-width: 600px) {
  padding-left: 4px;
  }
  @media (max-width: 600px) {
  padding-left: 0px;
  }
  @media(max-width: 415px){
  margin-right: 15px;
  }
  @media(max-width: 375px){
  margin-right: 5px;
  }
`;

export const ImageCardPerson = styled.img`
  height: 80px;
  weight: 50px;
  position: absolute;
  left: -5.02%;
  top: 14.61%;
  @media(max-width: 850px){
  height: 76px;
  left:-10.02%;
  top: 16.61%;
  }
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
  left: -10.01%;
  top: 17.61%;
  }
  @media(max-width: 376px){
  height: 32px;
  }
`;

export const ImageCardLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 21.39%;
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

export const CryptoCardName = styled.div`
  position: absolute;
  right: 2px;
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
  @media (max-width: 376px) {
  font-size: 9px;
  top: 23px;
  }
`;

export const AwardsBlock = styled.div`
  width: 33.3%;
  height: 100%;
  position: relative;
  left: -14px;
  top: -13px;
  @media(max-width: 1280px){
  top: -11px;
  }
  @media(max-width: 1260px){
  left: -16px;
  }
  @media(max-width: 415px){
  left: -16px;
  }
  @media(max-width: 376px){
  left: -15px;
  top: -13px;
  }
`;

export const AwardsText = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  position: absolute;
  line-height: 1;
  top: 51%;
  left: 23px;
  font-family: ${fonts.header}
  transform: translate(-50%, -50%);
  @media (max-width: 1680px) {
  left: 24px;
  }
  @media(max-width: 1280px) {
  left: 21px;
  top: 42%;
  font-size: 11px;
  }
  @media(max-width: 1070px) {
  left: 18px;
  top: 48%;
  font-size: 9px;
  }
  @media(max-width: 1024px) {
  left: 16px;
  }
  @media(max-width: 990px) {
  left: 22px;
  top: 46%;
  font-size: 11px;
  }
  @media(max-width: 850px){
   font-size: 9px;
   left: 16px;
   top: 50%;
  }
  @media(max-width: 770px){
   left: 15px;
  }
  @media(max-width: 766px) {
  left: 21px;
  top: 46%;
  font-size: 11px;
  }
  @media(max-width: 600px){
   font-size: 9px;
   left: 16px;
   top: 50%;
  }
  @media(max-width: 415px) {
  left: 8px;
  top: 34%;
  font-size: 8px;
  }
  @media(max-width: 376px) {
  font-size: 6px;
  left: 9px;
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
  margin-left: -39px;
  @media (max-width: 1680px) {
  margin-left: -56px;
  }
  @media(max-width: 1440px){
  margin-left: -39px;
  }
  @media(max-width: 1360px){
  margin-left: -29px;
  }
  @media (max-width: 1280px){
  margin-left: -34px;
  }
  @media (max-width: 1070px){
  margin-left: -41px;
  }
  @media (max-width: 992px){
  margin-left: -43px;
  }
  @media (max-width: 950px){
  margin-left: -31px;
  }
  @media (max-width: 850px){
  margin-left: -40px;
  }
  @media (max-width: 770px){
  margin-left: -30px;
  }
  @media (max-width: 766px){
  margin-left: -75px;
  }
  @media (max-width: 700px){
  margin-left: -69px;
  }
  @media (max-width: 600px){
  margin-left: -42px;
  }
  @media (max-width: 500px){
  margin-left: -33px;
  }
  @media (max-width: 414px){
  margin-left: -23px;
  }
`;

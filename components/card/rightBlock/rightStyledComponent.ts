import styled from 'styled-components';

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
  padding-left: 5px;
  }
  @media (max-width: 992px) {
  padding-left: 16px;
  }
  @media (max-width: 680px) {
  padding-left: 16px;
  }
  @media (max-width: 376px) {
  padding-left: 13px;
  }
  @media (max-width: 361px) {
  padding-left: 13px;
  }
`;

export const CryptoCardPerson = styled.div`
  width: 65%;
  left: 0;
  bottom: 0;
`;

export const ImageCardLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 4.39%;
  top: 0.83%;
  @media(max-width: 415px) {
  width: 34px;
  height: 34px;
  }
`;

export const ImageCardPerson = styled.img`
  height: 80px;
  weight: 50px;
  position: absolute;
  left: 26.98%;
  top: 13.61%;
  @media(max-width: 850px){
  height: 76px;
  left:21.98%;
  top: 18.61%;
  }
  @media(max-width: 415px) {
  height: 52px;
  top: 26.61%;
  }
`;

export const CryptoCardName = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  font-weight: bold;
  font-size: 20px;
  @media(max-width: 415px) {
  font-size: 8px;
  }
`;

export const UserPhoto = styled.img`
  height:95px;
  width: 95px;
  border-radius: 50%;
  @media(max-width: 1440px) {
  height:75px;
  width: 75px;
  }
  @media(max-width: 1200px) {
  width: 50px;
  height: 50px;
  }
  @media(max-width: 850px) {
  width: 45px;
  height: 45px;
  }
  @media(max-width: 415px) {
  width: 40px;
  height: 40px;
  }
  @media(max-width: 376px) {
  width: 35px;
  height: 35px;
  }
`;

export const AwardsBlock = styled.div`
  width: 33.3%;
  height: 100%;
  position: relative;
  padding-left: 50px;
  @media(max-width: 1680px){
  padding-left: 43px;
  }
  @media(max-width: 1620px){
  padding-left: 37px;
  }
  @media(max-width: 1540px){
  padding-left: 32px;
  }
  @media(max-width: 1440px){
  padding-left: 28px;
  }
  @media(max-width: 1366px){
  padding-left: 20px;
  }
  @media (max-width: 1200px) {
  padding-left: 13px;
  }
  @media (max-width: 1070px) {
  padding-left: 6px;
  }
  @media (max-width: 992px) {
  padding-left: 16px;
  }
  @media (max-width: 950px) {
  padding-left: 11px;
  }
  @media (max-width: 850px) {
  padding-left: 16px;
  }
  @media (max-width: 770px) {
  padding-left: 19px;
  }
  @media(max-width: 415px){
  padding-left: 29px;
  }
  @media(max-width: 376px){
  padding-left: 26px;
  }
`;

export const AvardsImage = styled.img`
  width: 79px;
  height: 100%;
  @media(max-width: 850px) {
  width: 65px;
  }
  @media(max-width: 415px) {
  width: 40px;
  }
  @media(max-width: 415px) {
  width: 35px;
  }
  @media(max-width: 376px) {
  width: 35px;
  }
  `;

export const AwardsText = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  position: absolute;
  line-height: 1;
  top: 60%;
  left: 86px;
  transform: translate(-50%, -50%);
  @media(max-width: 1680px) {
  left: 82px;
  }
  @media(max-width: 1560px) {
  left: 76px;
  }
  @media(max-width: 1440px) {
  left: 68px;
  }
  @media(max-width: 1366px) {
  left: 60px;
  }
  @media(max-width: 1200px) {
  left: 53px;
  }
  @media(max-width: 1070px) {
  left: 47px;
  font-size: 12px;
  }
  @media(max-width: 992px) {
  left: 56px;
  }
  @media(max-width: 950px) {
  left: 51px;
  }
  @media(max-width: 850px){
   font-size: 11px;
   left: 49px;
   top: 57%;
  }
  @media(max-width: 992px){
   left: 51px;
  }
  @media(max-width: 415px) {
  font-size: 8px;
  left: 50px;
  top: 56%;
  }
  @media(max-width: 376px) {
  font-size: 6px;
  left: 44px;
  }
`;

export const UserBlock = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: -39px;
  @media(max-width: 1920px){
  margin-right: -60px;
  }
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
  @media(max-width: 1070px){
  margin-right: -39px;
  }
  @media(max-width: 1280px){
  margin-right: -46px;
  }
  @media(max-width: 1070px){
  margin-right: -38px;
  }
  @media(max-width: 992px){
  margin-right: -47px;
  }
  @media(max-width: 770px){
  margin-right: -54px;
  }
  @media(max-width: 415px){
  margin-right: -60px;
  }
  @media(max-width: 376px){
  margin-right: -55px;
  }
  `;

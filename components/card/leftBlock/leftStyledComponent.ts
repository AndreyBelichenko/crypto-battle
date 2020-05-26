import styled from 'styled-components';

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
  @media (max-width: 1366px) {
  margin-right: 12px;
  }
  @media(max-width: 1360px){
  margin-right: none;
  }
  @media(max-width: 1260px){
  margin-right: 17px;
  }
  @media(max-width: 1200px){
  margin-right: 15px;
  }
  @media(max-width: 950px){
  margin-right: 21px;
  }
  @media(max-width: 415px){
  margin-right: 15px;
  }
  @media(max-width: 375px){
  margin-right: 11px;
  }
`;

export const CryptoCardPerson = styled.div`
  width: 65%;
  left: 0;
  bottom: 0;
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
  @media(max-width: 415px) {
  height: 52px;
  left: -10.01%;
  top: 27.61%;
  }
`;

export const ImageCardLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 21.39%;
  top: 0.83%;
  @media(max-width: 415px) {
  width: 34px;
  height: 34px;
  }
  `;

export const CryptoCardName = styled.div`
  position: absolute;
  right: 2px;
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
  left: -14px;
  @media(max-width: 1260px){
  left: -20px;
  }
  @media(max-width: 415px){
  left: -18px;
  }
  @media(max-width: 376px){
  left: -17px;
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
  top: 59%;
  left: 39px;
  transform: translate(-50%, -50%);
  @media (max-width: 1680px) {
  left: 41px;
  }
  @media(max-width: 1070px){
   font-size: 12px;
  }
  @media(max-width: 850px){
   font-size: 11px;
   left: 33px;
   top: 57%;
  }
  @media(max-width: 415px) {
  font-size: 8px;
  left: 21px;
  top: 56%;
  }
  @media(max-width: 376px) {
  font-size: 6px;
  left: 18px;
  }
`;

export const UserBlock = styled.div`
  height: 100%;
  width: 33.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -66px;
  @media (max-width: 1680px) {
  margin-left: -56px;
  }
  @media(max-width: 1366px){
  margin-left: -40px;
  }
  @media(max-width: 1360px){
  margin-left: -37px;
  }
  @media (max-width: 1280px){
  margin-left: -34px;
  }
  @media (max-width: 1070px){
  margin-left: -18px;
  }
  @media (max-width: 992px){
  margin-left: -29px;
  }
  @media (max-width: 950px){
  margin-left: -31px;
  }
  @media (max-width: 950px){
  margin-left: -23px;
  }
  @media (max-width: 770px){
  margin-left: -18px;
  }
  @media (max-width: 414px){
  margin-left: -23px;
  }
`;

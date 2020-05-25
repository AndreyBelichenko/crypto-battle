import styled from 'styled-components';

export const CryptoCard = styled.div`
  display: flex;
  width: 33.3%;
  height: 100%;
  flex-direction: column;
  padding-left: 31px;
  @media (max-width: 1680px) {
  padding-left: 0px;
  }
   @media (max-width: 1280px) {
  padding-left: 6px;
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
  left: 30.39%;
  top: -3.17%;
`;

export const ImageCardPerson = styled.img`
  height: 80px;
  weight: 50px;
  position: absolute;
  left: 1.98%;
  top: 19.61%;
`;

export const CryptoCardName = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  font-weight: bold;
  font-size: 20px;
`;

export const UserPhoto = styled.img`
  height:95px;
  width: 95px;
  border-radius: 50%;
  @media(max-width: 1440px) {
  height:75px;
  width: 75px;
  }
`;

export const AwardsBlock = styled.div`
  width: 33.3%;
  height: 100%;
  position: relative;
  padding-left: 47px;
  @media (max-width: 1680px){
  padding-left: 38px;
  }
  @media (max-width: 1665px){
  padding-left: 26px;
  }
  @media(max-width: 1440){
  padding-left: 28px;
  }
  @media(max-width: 1280){
  padding-left: 15px;
  }
`;

export const AvardsImage = styled.img`
  width: 79px;
  height: 120px;
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
  @media (max-width: 1680px) {
  left: 76px;
  }
  @media (max-width: 1600px) {
  left: 66px;
  }
  @media (max-width: 1440px) {
  left: 67px;
  }
  @media (max-width: 1280px) {
  left: 54px;
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
  margin-right: none;
  }
  @media(max-width: 1600px){
  margin-right: -42px;
  }
  @media(max-width: 1440px){
  margin-right: -51px;
  }
  @media(max-width: 1280px){
  margin-right: -46px;
  }
  `;

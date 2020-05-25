import styled from 'styled-components';

export const CryptoCard = styled.div`
  display: flex;
  width: 33.3%;
  height: 100%;
  flex-direction: column;
  @media (max-width: 1280px) {
  margin-right: 12px;
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
  left: 1.98%;
  top: 19.61%;
`;

export const ImageCardLogo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 30.39%;
  top: -3.17%;`;

export const CryptoCardName = styled.div`
  position: absolute;
  right: 2px;
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
  left: 8px;
  @media(max-width: 1920px){
  left: -5px;
  }
  @media(max-width: 1680px){
  left: -14px;
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
  left: 39px;
  transform: translate(-50%, -50%);
  @media (max-width: 1680px) {
  left: 41px;
  }
  @media (max-width: 1655px) {
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
  margin-left: -43px;
  @media (max-width: 1280px) {
  margin-left: -27px;
  }
`;

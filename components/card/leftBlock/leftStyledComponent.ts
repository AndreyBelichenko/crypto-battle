import styled from 'styled-components';

export const CryptoCard = styled.div`
  display: flex;
  width: 33.3%;
  height: 100%;
  flex-direction: column;
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
`;

export const AwardsBlock = styled.div`
  width: 33.3%;
  height: 100%;
  position: relative;
  padding-left: 6px;
  @media (max-width: 1680px) {
  padding-left: 0px;
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
  left: 33%;
  transform: translate(-50%, -50%);
  @media (max-width: 1765px) {
  left: 42%;
  }
  @media (max-width: 1680px) {
  left: 48%;
  }
  @media (max-width: 1655px) {
  left: 44%;
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
`;

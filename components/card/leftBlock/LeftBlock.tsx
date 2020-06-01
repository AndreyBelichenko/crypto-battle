import * as React from 'react';
import { Progress } from 'semantic-ui-react';

import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';
// import { warrior } from '../mockData';

import {
  GamerBlock,
  CryptoCard,
  CryptoCardName,
  ImageCardPerson,
  ImageCardLogo,
  AwardsBlock,
  UserBlock,
} from './leftStyledComponent';
import {
  CryptoCardPerson,
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserName,
  UserPhoto,
  ProgressText,
  AvardsImage,
} from '../styledComponent';

const LeftBlock: React.FC<any> = (props: any) => {
  const actualHealth = props.data.steps[props.data.steps.length - 1]
    ? props.data.steps[props.data.steps.length - 1][props.data.firstPlayer.cryptoName]
    : props.data.healthPoints;
  return (
    <GamerBlock>
      <AwardsBlock>
        <AvardsImage src={returnCorrectCryptoData(props.data.firstPlayer.cryptoName, 'flag')} />
      </AwardsBlock>
      <UserBlock>
        <UserPhoto src={props.data.firstPlayer.userInfo.avatar} />
        <UserName>{props.data.firstPlayer.userInfo.alias}</UserName>
      </UserBlock>
      <CryptoCard>
        <CryptoCardMain>
          <CryptoCardLogo>
            <ImageCardLogo src={returnCorrectCryptoData(props.data.firstPlayer.cryptoName, 'logo')} />
          </CryptoCardLogo>
          <CryptoCardPerson>
            <ImageCardPerson src={returnCorrectCryptoData(props.data.firstPlayer.cryptoName, 'person')} />
          </CryptoCardPerson>
          <CryptoCardName>{props.data.firstPlayer.cryptoName}</CryptoCardName>
        </CryptoCardMain>
        <CryptoCardHp>
          <ProgressText>{actualHealth}hp</ProgressText>
          <Progress
            percent={giveProgressPercent(props.data.healthPoints, actualHealth)}
            color={returnCorrectCryptoData(props.data.firstPlayer.cryptoName, 'progressColor')}
          />
        </CryptoCardHp>
      </CryptoCard>
    </GamerBlock>
  );
};

export default LeftBlock;

// import * as React from 'react';
// import { Progress } from 'semantic-ui-react';
//
// // import { warrior } from '../mockData';
// import { returnCorrectCryptoData } from '../../../utils/helpers';
//
// import {
//   GamerBlock,
//   CryptoCard,
//   CryptoCardName,
//   ImageCardPerson,
//   ImageCardLogo,
//   AwardsBlock,
//   UserBlock,
// } from './leftStyledComponent';
// import {
//   CryptoCardPerson,
//   CryptoCardLogo,
//   CryptoCardHp,
//   CryptoCardMain,
//   UserName,
//   UserPhoto,
//   ProgressText,
//   AvardsImage,
// } from '../styledComponent';
//
// interface LeftBlockProps {
//   data: any;
// }
//
// const LeftBlock: React.FC<LeftBlockProps> = (props: LeftBlockProps) => {
//   return (
//     <GamerBlock>
//       <AwardsBlock>
//         <AvardsImage src={returnCorrectCryptoData(props.data.firstPlayer.cryptoName, 'flag')} />
//       </AwardsBlock>
//       <UserBlock>
//         <UserPhoto src={props.data.firstPlayer.userInfo.avatar} />
//         <UserName>{props.data.firstPlayer.userInfo.alias}</UserName>
//       </UserBlock>
//       <CryptoCard>
//         <CryptoCardMain>
//           <CryptoCardLogo>
//             <ImageCardLogo src={returnCorrectCryptoData(props.data.firstPlayer.cryptoName, 'logo')} />
//           </CryptoCardLogo>
//           <CryptoCardPerson>
//             <ImageCardPerson src={returnCorrectCryptoData(props.data.firstPlayer.cryptoName, 'person')} />
//           </CryptoCardPerson>
//           <CryptoCardName>{props.data.firstPlayer.cryptoName}</CryptoCardName>
//         </CryptoCardMain>
//         <CryptoCardHp>
//           <ProgressText>{props.data.healthPoints}hp</ProgressText>
//           <Progress
//             percent={100}
//             color={`${returnCorrectCryptoData(props.data.firstPlayer.cryptoName, 'progressColor')}`}
//           />
//         </CryptoCardHp>
//       </CryptoCard>
//     </GamerBlock>
//   );
// };
//
// export default LeftBlock;

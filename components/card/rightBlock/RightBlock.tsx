import * as React from 'react';
import { Progress } from 'semantic-ui-react';

import {
  GamerBlock,
  CryptoCard,
  CryptoCardName,
  ImageCardLogo,
  ImageCardPerson,
  UserBlock,
  AwardsBlock,
} from './rightStyledComponent';
import {
  CryptoCardPerson,
  CryptoCardLogo,
  CryptoCardHp,
  CryptoCardMain,
  UserName,
  ProgressText,
  UserPhoto,
  AvardsImage,
} from '../styledComponent';
import { returnCorrectCryptoData, giveProgressPercent } from '../../../utils/helpers';

const RightBlock: React.FC<any> = (props: any) => {
  const actualHealth = props.data.steps[props.data.steps.length - 1]
    ? props.data.steps[props.data.steps.length - 1][props.data.secondPlayer.cryptoName]
    : props.data.healthPoints;
  return (
    <GamerBlock>
      <CryptoCard>
        <CryptoCardMain>
          <CryptoCardLogo>
            <ImageCardLogo src={returnCorrectCryptoData(props.data.secondPlayer.cryptoName, 'flag')} />
          </CryptoCardLogo>
          <CryptoCardPerson>
            <ImageCardPerson src={returnCorrectCryptoData(props.data.secondPlayer.cryptoName, 'person')} />
          </CryptoCardPerson>
          <CryptoCardName>{props.data.secondPlayer.cryptoName}</CryptoCardName>
        </CryptoCardMain>
        <CryptoCardHp>
          <ProgressText>{actualHealth}hp</ProgressText>
          <Progress
            percent={giveProgressPercent(props.data.healthPoints, actualHealth)}
            color={returnCorrectCryptoData(props.data.secondPlayer.cryptoName, 'progressColor')}
          />
        </CryptoCardHp>
      </CryptoCard>
      <UserBlock>
        <UserPhoto src={props.data.secondPlayer.userInfo.avatar} />
        <UserName>{props.data.secondPlayer.userInfo.alias}</UserName>
      </UserBlock>
      <AwardsBlock>
        <AvardsImage src={returnCorrectCryptoData(props.data.secondPlayer.cryptoName, 'flag')} />
      </AwardsBlock>
    </GamerBlock>
  );
};

export default RightBlock;

// import * as React from 'react';
// import { Progress } from 'semantic-ui-react';
// import { returnCorrectCryptoData } from '../../../utils/helpers';
// // import { secondWarrior } from '../mockData';
//
// import {
//   GamerBlock,
//   CryptoCard,
//   CryptoCardName,
//   ImageCardLogo,
//   ImageCardPerson,
//   UserBlock,
//   AwardsBlock,
// } from './rightStyledComponent';
// import {
//   CryptoCardPerson,
//   CryptoCardLogo,
//   CryptoCardHp,
//   CryptoCardMain,
//   UserName,
//   ProgressText,
//   UserPhoto,
//   AvardsImage,
// } from '../styledComponent';
//
// interface RightBlockProps {
//   data: any;
// }
//
// const RightBlock: React.FC<RightBlockProps> = (props: RightBlockProps) => {
//   return (
//     <>
//       <GamerBlock>
//         <CryptoCard>
//           <CryptoCardMain>
//             <CryptoCardLogo>
//               <ImageCardLogo src={returnCorrectCryptoData(props.data.secondPlayer.cryptoName, 'logo')} />
//             </CryptoCardLogo>
//             <CryptoCardPerson>
//               <ImageCardPerson src={returnCorrectCryptoData(props.data.secondPlayer.cryptoName, 'person')} />
//             </CryptoCardPerson>
//             <CryptoCardName>{props.data.secondPlayer.cryptoName}</CryptoCardName>
//           </CryptoCardMain>
//           <CryptoCardHp>
//             <ProgressText>220hp</ProgressText>
//             <Progress percent={220} color="orange" />
//           </CryptoCardHp>
//         </CryptoCard>
//         <UserBlock>
//           <UserPhoto src={props.data.secondPlayer.userInfo.avatar} />
//           <UserName>{props.data.secondPlayer.userInfo.alias}</UserName>
//         </UserBlock>
//         <AwardsBlock>
//           <AvardsImage src={returnCorrectCryptoData(props.data.secondPlayer.cryptoName, 'flag')} />
//         </AwardsBlock>
//       </GamerBlock>
//     </>
//   );
// };
//
// export default RightBlock;

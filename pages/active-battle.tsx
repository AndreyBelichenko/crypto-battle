import * as React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import ActiveBattleCard from '../components/activeBattleCard/activeBattleCard';

const ActiveBattle: React.FC = () => {
  const router = useRouter();
  const activeBattle = useSelector((state: any) => state.allBattle.allBattleData).find(
    (item: any) => item._id === router.query.battleId,
  );

  return <ActiveBattleCard card={activeBattle} key={activeBattle._id} />;
};

export default ActiveBattle;

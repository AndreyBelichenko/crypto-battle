import * as React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import ActiveBattleCard from '../components/activeBattleCard/activeBattleCard';
import LoaderSemantic from '../components/loader/Loader';

const ActiveBattle: React.FC = () => {
  const router = useRouter();
  const activeBattle = useSelector((state: any) => state.allBattle.allBattleData).find(
    (item: any) => item._id === router.query.battleId,
  );

  return activeBattle ? <ActiveBattleCard card={activeBattle} /> : <LoaderSemantic marginNeed={false} />;
};

export default ActiveBattle;

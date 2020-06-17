import * as React from 'react';
import { useRouter } from 'next/router';

import LoaderSemantic from '../components/loader/Loader';
import ActiveBattleCard from '../components/activeBattleCard/activeBattleCard';

const ActiveBattle: React.FC = () => {
  const router = useRouter();
  return Boolean(router.query.battleId) ? (
    <ActiveBattleCard battleId={router.query.battleId} />
  ) : (
    <LoaderSemantic marginNeed={true} />
  );
};

export default ActiveBattle;

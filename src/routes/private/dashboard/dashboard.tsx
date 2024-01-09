import FeaturedInfo from '../../../components/admin/featuredInfo';
import NewClientsWidget from '../../../components/admin/newClientsWidget';
import LatestTransactionsWidget from '../../../components/admin/latestTransactionsWidget';
import Chart from '../../../components/admin/chart';

import { DashboardContainer } from './styled';
import { useEffect, useState } from 'react';
import { getIncome } from '../../../utils/api';
import { TIncome } from '../../../types';

export default function Dashboard() {
  const [incomes, setIncomes] = useState<TIncome[]>([]);

  useEffect(() => {
    const getActualIncome = async () => {
      try {
        const res = await getIncome();

        // @ts-ignore
        if (res.data) {
          // @ts-ignore
          setIncomes(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getActualIncome();
  }, []);
  return (
    <DashboardContainer>
      <FeaturedInfo />
      <Chart incomes={incomes} title="Gráfico de vendas" />
      <LatestTransactionsWidget />
      <NewClientsWidget />
    </DashboardContainer>
  );
}

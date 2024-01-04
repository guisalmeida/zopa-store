import FeaturedInfo from '../../../components/admin/featuredInfo';
import NewClientsWidget from '../../../components/admin/newClientsWidget';
import LatestTransactionsWidget from '../../../components/admin/latestTransactionsWidget';

import { DashboardContainer } from './styled';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <FeaturedInfo />
      <LatestTransactionsWidget />
      <NewClientsWidget />

      {/* <Chart data={userStats} title="Analytics" grid dataKey="Active User" /> */}
    </DashboardContainer>
  );
}

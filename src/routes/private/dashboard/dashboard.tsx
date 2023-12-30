import FeaturedInfo from '../../../components/admin/featuredInfo';
import WidgetSm from '../../../components/admin/widgetSm';
import WidgetLg from '../../../components/admin/widgetLg';

import { DashboardContainer } from './styled';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <FeaturedInfo />
      {/* <Chart data={userStats} title="Analytics" grid dataKey="Active User" /> */}
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </DashboardContainer>
  );
}

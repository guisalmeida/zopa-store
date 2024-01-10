import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

import { ChartContainer, ChartWrapper } from './styled';
import { TIncome } from '../../../types';
import { priceToStringBr } from '../../../utils/currency';

type TChartProps = {
  title: string;
  incomes: TIncome[];
};

type TIncomeChart = {
  month: string;
  total: number;
  totalBRL: string;
};

const MONTH_NAMES = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

export default function Chart({ title, incomes }: TChartProps) {
  const newIncomes: TIncomeChart[] = incomes.map((income) => ({
    month: MONTH_NAMES[income._id - 1],
    totalBRL: priceToStringBr(income.total / 100),
    total: income.total / 100,
  }));

  return (
    <ChartContainer>
      <h3 className="chart__title">{title}</h3>
      <ChartWrapper>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={newIncomes}>
            <XAxis dataKey="month" stroke="var(--highlight)" />
            <YAxis dataKey="total" />
            <Line type="monotone" dataKey="total" stroke="var(--highlight)" />
            <Tooltip
              content={
                // @ts-ignore
                <CustomTooltip />
              }
            />
            <CartesianGrid stroke="var(--border)" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </ChartContainer>
  );
}

// @ts-ignore
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart__tooltip">
        <p>{label}</p>
        <p>{payload[0].payload.totalBRL}</p>
      </div>
    );
  }
};

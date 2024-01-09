import { useEffect, useState } from 'react';

import { FeaturedContainer } from './styled';
import { getIncome } from '../../../utils/api';
import { TIncome } from '../../../types';
import { priceToStringBr } from '../../../utils/currency';

export default function FeaturedInfo() {
  const newDate = new Date();
  const actualMonth = newDate.getMonth() + 1;
  const lastMonth =
    new Date(newDate.setMonth(newDate.getMonth() - 1)).getMonth() + 1;
  const [actualIncome, setActualIncome] = useState<TIncome['total']>(0);
  const [lastIncome, setLastIncome] = useState<TIncome['total']>(0);

  useEffect(() => {
    const getActualIncome = async () => {
      try {
        const res = await getIncome();
        // @ts-ignore
        if (res.data) {
          // @ts-ignore
          const newIncome: TIncome = res.data.find(
            (income: TIncome) => income._id === actualMonth
          );
          // @ts-ignore
          const lastMonthIncome: TIncome = res.data.find(
            (income: TIncome) => income._id === lastMonth
          );

          setActualIncome(newIncome.total);
          setLastIncome(lastMonthIncome.total);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getActualIncome();
  }, []);

  return (
    <FeaturedContainer>
      <div className="featuredItem">
        <h3 className="featuredTitle">Vendas</h3>
        <small className="featuredSub">do mês passado</small>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {priceToStringBr(lastIncome / 100)}
          </span>
        </div>
      </div>
      <div className="featuredItem">
        <h3 className="featuredTitle">Vendas</h3>
        <small className="featuredSub">do mês atual</small>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {priceToStringBr(actualIncome / 100)}
          </span>
        </div>
      </div>
    </FeaturedContainer>
  );
}

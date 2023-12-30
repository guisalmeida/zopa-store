import { useState } from 'react';

import { FeaturedContainer } from './styled';

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  return (
    <FeaturedContainer>
      <div className="featuredItem">
        <span className="featuredTitle">Receita</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 1.000,00</span>
          <span className="featuredMoneyRate">
            {/* %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              // <ArrowDownward className="featuredIcon negative" />
            ) : (
              // <ArrowUpward className="featuredIcon" />
            )} */}
          </span>
        </div>
        <span className="featuredSub">Em comparação ao mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Vendas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 4.415,00</span>
          <span className="featuredMoneyRate">
            {/* -1.4 <ArrowDownward className="featuredIcon negative" /> */}
          </span>
        </div>
        <span className="featuredSub">Em comparação ao mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Custos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 2.225,00</span>
          <span className="featuredMoneyRate">
            {/* +2.4 <ArrowUpward className="featuredIcon" /> */}
          </span>
        </div>
        <span className="featuredSub">Em comparação ao mês passado</span>
      </div>
    </FeaturedContainer>
  );
}

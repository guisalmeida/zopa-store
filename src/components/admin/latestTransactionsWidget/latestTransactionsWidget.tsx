import { useState } from 'react';

import { TOrder } from '../../../types';
import { LatestTransactionsWidgetContainer } from './styled';

export default function LatestTransactionsWidget() {
  const [orders, setOrders] = useState<TOrder[]>([]);

  const Button = ({ type }: { type: string }) => {
    return <button
      className={'latestTransactionsWidgetButton ' + type}
    >
      {type}
    </button>;
  };

  return (
    <LatestTransactionsWidgetContainer>
      <h3 className="latestTransactionsWidgetTitle">Últimas vendas</h3>

      <table className="latestTransactionsWidgetTable">
        <thead>
          <tr className="latestTransactionsWidgetTr">
            <th className="latestTransactionsWidgetTh">Customer</th>
            <th className="latestTransactionsWidgetTh">Date</th>
            <th className="latestTransactionsWidgetTh">Amount</th>
            <th className="latestTransactionsWidgetTh">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr className="latestTransactionsWidgetTr" key={order._id}>
              <td className="latestTransactionsWidgetUser">
                <span className="latestTransactionsWidgetName">{order.userId}</span>
              </td>
              {/* <td className="latestTransactionsWidgetDate">{format(order.createdAt)}</td> */}
              <td className="latestTransactionsWidgetAmount">${order.amount}</td>
              <td className="latestTransactionsWidgetStatus">
                <Button type={order.status as string} />
              </td>
            </tr>
          ))}
        </tbody>


      </table>
    </LatestTransactionsWidgetContainer>
  );
}

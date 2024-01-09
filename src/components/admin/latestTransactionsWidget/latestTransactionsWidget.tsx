import { useSelector } from 'react-redux';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TOrder } from '../../../types';
import { selectCartOrders } from '../../../store/selectors/cartSelectors';
import { formatDate } from '../../../utils/dates';

import { LatestTransactionsWidgetContainer } from './styled';
import { priceToStringBr } from '../../../utils/currency';

export default function LatestTransactionsWidget() {
  const cartOrders: TOrder[] = useSelector(selectCartOrders);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'Pedido ID', width: 220 },
    {
      field: 'amount',
      headerName: 'Valor',
      width: 100,
      renderCell: (params: {
        row: {
          amount: number;
        };
      }) => {
        return (
          <p className="latest-transactions-widget__Amount">
            {priceToStringBr(params.row.amount / 100)}
          </p>
        );
      },
    },
    {
      field: 'createdAt',
      headerName: 'Criado em',
      width: 150,
      renderCell: (params: { row: { createdAt: string } }) => {
        return (
          <p className="latest-transactions-widget__Date">
            {formatDate(params.row.createdAt as string)}
          </p>
        );
      },
    },
    { field: 'status', headerName: 'Status', width: 100 },
  ];

  return (
    <LatestTransactionsWidgetContainer>
      <h3 className="latest-transactions-widget__title">Últimas vendas</h3>

      <DataGrid
        rows={cartOrders}
        disableRowSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 50, 100]}
      />
    </LatestTransactionsWidgetContainer>
  );
}

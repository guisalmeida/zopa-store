import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { selectAllUsers } from '../../../store/selectors/userSelectors';
import { TCurrentUser } from '../../../types';

import { NewClientsWidgetContainer } from './styled';
import { formatDate } from '../../../utils/dates';

export default function NewClientsWidget() {
  const allUsers: TCurrentUser[] = useSelector(selectAllUsers);

  const columns: GridColDef[] = [
    {
      field: 'createdAt',
      headerName: 'Criado em',
      width: 150,
      renderCell: (params: { row: { createdAt: string } }) => {
        return <p>{formatDate(params.row.createdAt as string)}</p>;
      },
    },
    {
      field: 'username',
      headerName: 'Usuário',
      width: 200,
      renderCell: (params: {
        row: {
          username: string;
        };
      }) => {
        return (
          <div className="new-clients-widget__username">
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'isAdmin', headerName: 'Admin', width: 100 },
    {
      field: 'show',
      headerName: 'Mostrar',
      width: 100,
      renderCell: (params: { row: { _id: string } }) => {
        return (
          <Link to={'/admin/users/' + params.row._id}>
            <button className="new-clients-widget__button">Mostrar</button>
          </Link>
        );
      },
    },
  ];

  return (
    <NewClientsWidgetContainer>
      <h3 className="new-clients-widget__title">Novos usuários</h3>

      <DataGrid
        rows={allUsers}
        disableRowSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 50, 100]}
      />
    </NewClientsWidgetContainer>
  );
}

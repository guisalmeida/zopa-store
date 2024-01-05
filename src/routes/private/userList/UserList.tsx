import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { toast } from 'react-toastify';

import {
  selectAllUsers,
  selectIsLoading,
} from '../../../store/selectors/userSelectors';
import { fetchUsersStart } from '../../../store/actions/userActions';
import { TCurrentUser } from '../../../types';
import Spinner from '../../../components/client/spinner/spinner';

import { UserListContainer, PersonDeleteIcon } from './styled';
import { deleteUser } from '../../../utils/api';

export default function UserList() {
  const dispatch = useDispatch();
  const allUsers: TCurrentUser[] = useSelector(selectAllUsers);
  const isLoading: boolean = useSelector(selectIsLoading);

  const handleDelete = async (userId: string) => {
    try {
      const res = await deleteUser(userId);

      if (res.status === 200) {
        //@ts-ignore
        if (res.data) {
          //@ts-ignore
          toast.success(res.data.message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: false,
          });
        }

        dispatch(fetchUsersStart());
      }
    } catch (error) {
      const err = error as Error;
      console.log(err);
      toast.error(err.message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
      });
    }
  };

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'username',
      headerName: 'Username',
      width: 100,
      renderCell: (params: {
        row: {
          username: string;
        };
      }) => {
        return <div className="userListUser">{params.row.username}</div>;
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Telefone', width: 140 },
    { field: 'isAdmin', headerName: 'Admin', width: 100 },
    {
      field: 'edit',
      headerName: 'Editar',
      width: 100,
      renderCell: (params: { row: { _id: string } }) => {
        return (
          <Link to={'/admin/users/' + params.row._id}>
            <button className="userListEdit">Editar</button>
          </Link>
        );
      },
    },
    {
      field: 'delete',
      headerName: 'Deletar',
      width: 100,
      renderCell: (params: { row: { _id: string } }) => {
        return (
          <button
            className="userListDelete"
            onClick={() => handleDelete(params.row._id)}
          >
            <PersonDeleteIcon />
          </button>
        );
      },
    },
  ];

  return isLoading ? (
    <Spinner />
  ) : (
    <UserListContainer>
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
    </UserListContainer>
  );
}

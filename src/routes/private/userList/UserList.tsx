import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { UserListContainer, PersonDeleteIcon } from './styled';
import { TCurrentUser } from '../../../types';

export default function UserList() {
  const [data, setData] = useState<TCurrentUser[]>([]);

  const handleDelete = (userId: string) => {
    setData(data.filter((item) => item._id !== userId));
  };

  useEffect(() => {
    const newData: TCurrentUser[] = [
      {
        _id: '657cb1ff35c1160bf62980c4',
        username: 'deinha123',
        email: 'deinha123@gmail.com',
        password:
          '$2b$08$m5zQEYyA7NIolSxeNrvac.Ko/3awsduCr9T8fBeBg5LfnuMbsiR16',
        isAdmin: false,
        phone: '(51)912345678',
        passwordChangedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0,
      },
      {
        _id: '658742b423789299f2467cbc',
        username: 'guigui1234',
        email: 'guisalmeida.dev@gmail.com',
        password:
          '$2b$08$x8mvCC0A191Qb4CUWk8yHeHEzWZo9vohgSCzVgGjqPSWQgleHBHjO',
        isAdmin: true,
        phone: '(51)912345678',
        passwordChangedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0,
      },
    ];
    setData(newData);
  }, []);

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

  return (
    <UserListContainer>
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </UserListContainer>
  );
}

import { useEffect, useState } from 'react';

import { TCurrentUser } from '../../../types';

import { NewClientsWidgetContainer } from './styled'

export default function NewClientsWidget() {
  const [users, setUsers] = useState<TCurrentUser[]>([]);

  useEffect(() => {
    const usersData: TCurrentUser[] = [
      {
        _id: "657cb1ff35c1160bf62980c4",
        username: "deinha123",
        email: "deinha123@gmail.com",
        password: "$2b$08$m5zQEYyA7NIolSxeNrvac.Ko/3awsduCr9T8fBeBg5LfnuMbsiR16",
        isAdmin: false,
        phone: '(51)912345678',
        passwordChangedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0
      },
      {
        _id: "658742b423789299f2467cbc",
        username: "guigui1234",
        email: "guisalmeida.dev@gmail.com",
        password: "$2b$08$x8mvCC0A191Qb4CUWk8yHeHEzWZo9vohgSCzVgGjqPSWQgleHBHjO",
        isAdmin: true,
        phone: '(51)912345678',
        passwordChangedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0
      }
    ]
    setUsers(usersData)
  }, [])

  return (
    <NewClientsWidgetContainer>
      <span className="newClientsWidgetTitle">Novos clientes</span>
      <ul className="newClientsWidgetList">
        {users.map((user) => (
          <li className="newClientsWidgetListItem" key={user._id}>
            <img
              src={
                'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
              }
              alt=""
              className="newClientsWidgetImg"
            />
            <div className="newClientsWidgetUser">
              <span className="newClientsWidgetUsername">{user.username}</span>
            </div>
            <button className="newClientsWidgetButton">
              {/* <Visibility className="newClientsWidgetIcon" /> */}
              Display
            </button>
          </li>
        ))}
      </ul>
    </NewClientsWidgetContainer>
  );
}

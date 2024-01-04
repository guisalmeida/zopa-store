import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../../components/client/button';
import { NewUserContainer } from './styled';

const BASE_CURRENT_USER = {
  username: '',
  email: '',
  password: '',
  phone: '',
  isAdmin: false,
};

export default function NewUser() {
  const { userId } = useParams();
  const [newCurrentUser, setNewCurrentUser] = useState(BASE_CURRENT_USER);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCurrentUser((prevUser) => {
      const bool = e.target.value === 'true' ? true : false;
      return { ...prevUser, [e.target.name]: bool };
    });
  };

  return (
    <NewUserContainer>
      <h1 className="edit-user__title">
        {userId && userId === 'new'
          ? `Cadastrar Usuário`
          : `Usuário ${newCurrentUser?.username}`}
      </h1>
      <form className="edit-user__form">
        <div className="edit-user__item">
          <label>Username</label>
          <input type="text" placeholder="Insira o nome..." />
        </div>

        <div className="edit-user__item">
          <label>Email</label>
          <input type="email" placeholder="Insira email..." />
        </div>

        <div className="edit-user__item">
          <label>Senha</label>
          <input type="password" placeholder="Insira senha..." />
        </div>

        <div className="edit-user__item">
          <label>Telefone</label>
          <input type="text" placeholder="Insira telefone..." />
        </div>

        <div className="edit-user__item">
          <label>Admin</label>

          <div className="edit-user__item--radio">
            <input
              type="radio"
              id="yes"
              name="isAdmin"
              value="true"
              checked={newCurrentUser?.isAdmin.toString() === 'true'}
              onChange={handleSelect}
            />
            <label htmlFor="yes">Sim</label>

            <input
              type="radio"
              id="no"
              name="isAdmin"
              value="false"
              onChange={handleSelect}
              checked={newCurrentUser?.isAdmin.toString() === 'false'}
            />
            <label htmlFor="no">Não</label>
          </div>
        </div>

        <Button
          type="submit"
          className="edit-user__button"
          isLoading={false}
          buttonType="highlight"
        >
          {userId && userId === 'new' ? `Cadastrar` : `Salvar`}
        </Button>
      </form>
    </NewUserContainer>
  );
}

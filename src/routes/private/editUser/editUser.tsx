import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { selectAllUsers } from '../../../store/selectors/userSelectors';
import Button from '../../../components/client/button';
import { TCurrentUser, TUpdateUser } from '../../../types';

import { EditUserContainer } from './styled';
import { fetchUsersStart } from '../../../store/actions/userActions';
import { signUpUser, updateUser } from '../../../utils/api';

const BASE_USER: TUpdateUser = {
  username: '',
  email: '',
  phone: '',
  isAdmin: false,
  password: '',
};

export default function NewUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const [newCurrentUser, setNewCurrentUser] = useState<
    TUpdateUser | TCurrentUser
  >(BASE_USER);

  const allUsers: TCurrentUser[] = useSelector(selectAllUsers);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewCurrentUser((prevUser) => {
      const bool = value === 'true' ? true : false;
      return { ...prevUser, [name]: bool };
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewCurrentUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res =
        userId === 'new'
          ? await signUpUser(
              newCurrentUser.username as string,
              newCurrentUser.email as string,
              newCurrentUser.phone as string,
              newCurrentUser.password as string,
              newCurrentUser.isAdmin as boolean
            )
          : await updateUser(
              userId as string,
              newCurrentUser.username,
              newCurrentUser.phone,
              newCurrentUser.isAdmin
            );

      if (res.status === 200) {
        toast.success('Usuário atualizado', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: false,
        });

        dispatch(fetchUsersStart());
        return navigate('/admin/users/');
      }

      if (res.status === 201) {
        toast.success('Usuário cadastrado', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: false,
        });

        dispatch(fetchUsersStart());
        return navigate('/admin/users/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userId && userId !== 'new') {
      setNewCurrentUser(
        allUsers.find((user) => user._id === userId) as TCurrentUser
      );
      return;
    }

    setNewCurrentUser(BASE_USER);
  }, [userId]);

  return (
    <EditUserContainer>
      <h1 className="edit-user__title">
        {userId && userId === 'new'
          ? `Cadastrar Usuário`
          : `Usuário ${newCurrentUser?.username}`}
      </h1>
      <form className="edit-user__form" onSubmit={handleSubmit}>
        <div className="edit-user__item">
          <label>Username</label>
          <input
            name="username"
            type="text"
            value={newCurrentUser.username}
            placeholder="Insira o nome..."
            onChange={handleChange}
            required
          />
        </div>

        <div className="edit-user__item">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={newCurrentUser.email}
            placeholder="Insira email..."
            onChange={handleChange}
            required
            disabled={userId !== 'new'}
          />
        </div>

        {userId === 'new' ? (
          <div className="edit-user__item">
            <label>Senha</label>
            <input
              name="password"
              type="password"
              value={newCurrentUser.password}
              placeholder="Insira senha..."
              onChange={handleChange}
              required
            />
          </div>
        ) : null}

        <div className="edit-user__item">
          <label>Telefone</label>
          <input
            name="phone"
            type="text"
            value={newCurrentUser.phone}
            placeholder="Insira telefone..."
            onChange={handleChange}
            required
          />
        </div>

        <div className="edit-user__item">
          <label>Admin</label>

          <div className="edit-user__item--radio">
            <input
              type="radio"
              id="yes"
              name="isAdmin"
              value="true"
              checked={newCurrentUser?.isAdmin?.toString() === 'true'}
              onChange={handleSelect}
            />
            <label htmlFor="yes">Sim</label>

            <input
              type="radio"
              id="no"
              name="isAdmin"
              value="false"
              onChange={handleSelect}
              checked={newCurrentUser?.isAdmin?.toString() === 'false'}
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
    </EditUserContainer>
  );
}

import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/selectors/userSelectors';
import {
  deleteStart,
  signOutStart,
  updateStart,
} from '../../../store/actions/userActions';
import Button from '../../../components/client/button';
import FormInput from '../../../components/client/formInput';

import {
  SignContainer,
  ButtonsContainer,
  AuthenticationContainer,
} from '../../public/authentication/styled';
import { ButtonsContainerWarn } from './styled';
import { TCurrentUser } from '../../../types';

const User = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [updatedUser, setUpdatedUser] = useState<TCurrentUser>(
    currentUser as TCurrentUser
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setUpdatedUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleLogOut = (): void => {
    dispatch(signOutStart());
  };

  const handleDelete = (): void => {
    dispatch(deleteStart(updatedUser._id as string));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (updatedUser) {
      dispatch(updateStart(updatedUser));
    }
  };

  return (
    <AuthenticationContainer>
      <SignContainer>
        <h2>Atualizar dados cadastrais:</h2>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Nome"
            type="text"
            name="username"
            value={updatedUser?.username}
            placeholder="Digite seu nome..."
            onChange={handleChange}
            required
          />

          <FormInput
            label="Email"
            type="email"
            name="email"
            value={updatedUser?.email}
            placeholder="Digite seu email..."
            onChange={handleChange}
            disabled
          />

          <FormInput
            label="Telefone"
            type="phone"
            name="phone"
            value={updatedUser?.phone}
            placeholder="Digite seu telefone.."
            onChange={handleChange}
            required
          />

          {/* <FormInput
            label="Senha"
            type="password"
            name="password"
            value={updatedUser.password}
            placeholder="Digite uma nova senha..."
            onChange={handleChange}
            required
          /> */}

          <ButtonsContainer>
            <Button buttonType="base" type="submit">
              Salvar dados
            </Button>
          </ButtonsContainer>
        </form>

        <ButtonsContainerWarn>
          <Button buttonType="warn" onClick={handleLogOut}>
            Sair
          </Button>
          <Button buttonType="warn" onClick={handleDelete}>
            Deletar conta
          </Button>
        </ButtonsContainerWarn>
      </SignContainer>
    </AuthenticationContainer>
  );
};

export default User;

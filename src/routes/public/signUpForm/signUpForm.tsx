import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { signUpStart } from '../../../store/actions/userActions';
import { selectCurrentUser } from '../../../store/selectors/userSelectors';

import Button from '../../../components/client/button';
import FormInput from '../../../components/client/formInput';

import {
  SignContainer,
  ButtonsContainer,
} from '../../../routes/public/authentication/styled';

const defaultFormFields = {
  username: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, phone, password, confirmPassword } = formFields;
  const currentUser = useSelector(selectCurrentUser);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = (): void => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.warn('Senha não confere!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
      });
      return;
    }

    dispatch(signUpStart(email, phone, password, username));
    resetForm();
  };

  return currentUser ? <Navigate to="/user" /> :
    <SignContainer>
      <h2>Criar conta com email e senha</h2>
      <h2>
        Já possui conta? <Link to="/auth/sign-in">Entrar</Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nome"
          type="text"
          name="username"
          value={username}
          placeholder="Digite seu nome..."
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          placeholder="Digite seu email..."
          onChange={handleChange}
          required
        />

        <FormInput
          label="Telefone"
          type="text"
          name="phone"
          value={phone}
          placeholder="(00)912345678"
          onChange={handleChange}
          required
        />

        <FormInput
          label="Senha"
          type="password"
          name="password"
          value={password}
          placeholder="Digite uma senha..."
          onChange={handleChange}
          required
        />

        <FormInput
          label="Confirme senha"
          type="password"
          name="confirmPassword"
          placeholder="Repita sua senha..."
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <ButtonsContainer>
          <Button buttonType="base" type="submit">
            Cadastrar
          </Button>
        </ButtonsContainer>
      </form>
    </SignContainer>
};

export default SignUpForm;

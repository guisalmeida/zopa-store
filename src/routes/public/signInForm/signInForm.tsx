import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { signInStart } from '../../../store/actions/userActions';

import { selectCurrentUser } from '../../../store/selectors/userSelectors';

import Button from '../../../components/client/button';
import FormInput from '../../../components/client/formInput';

import {
  SignContainer,
  ButtonsContainer,
} from '../../../routes/public/authentication/styled';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const currentUser = useSelector(selectCurrentUser);

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    dispatch(signInStart(email, password));
    resetForm();
  };

  return currentUser ? <Navigate to="/user" /> :
    <SignContainer>
      <h2>Entrar com email e senha</h2>
      <h2>
        Não tem uma conta? <Link to="/auth/sign-up">Criar conta</Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          placeholder="Digite email..."
          onChange={handleChange}
          required
        />
        <FormInput
          label="Senha"
          type="password"
          name="password"
          value={password}
          placeholder="Digite sua senha..."
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button buttonType="base" type="submit">
            Entrar
          </Button>
        </ButtonsContainer>
      </form>
    </SignContainer>

};

export default SignInForm;

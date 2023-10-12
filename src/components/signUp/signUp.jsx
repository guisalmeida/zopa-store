import { useState } from "react";
import Button from "../button";
import FormInput from "../input";

import { SignInContainer } from "./styled";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password do not match!');
      return
    }

    try {
      console.log('form sent!')
      resetForm();
    } catch (error) {
       
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!!");
      }
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const signUpWithGoogle = () => {
    console.log('signup')
  };

  return (
    <SignInContainer>
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <div className="buttons__container">
          <Button buttonType="base" type="submit">
            Sign Up
          </Button>
          <Button buttonType="google" type="button" onClick={signUpWithGoogle}>
            Sign Up With Google
          </Button>
        </div>
      </form>
    </SignInContainer>
  );
};

export default SignUp;

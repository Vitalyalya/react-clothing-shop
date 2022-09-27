import "./sign-in-form.styles.scss";

import { useState } from "react";
import {
  passSignInWithEmailAndPasswordData,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const signInWithGoogle = async () => {
    const userName = await signInWithGooglePopup();
    resetFormFields();
    navigate("/");
    console.log(userName);
    localStorage.setItem("user", userName.user.displayName);
    // navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userName = await passSignInWithEmailAndPasswordData(
        email,
        password
      );
      resetFormFields();
      navigate("/");
      console.log(userName);
      localStorage.setItem("user", userName.user.displayName);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("The password is incorrect");
          break;
        case "auth/user-not-found":
          alert("The user is not found");
          break;
        default:
          console.log("There was an error", err);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>Sign-In Page</div>
      <button onClick={logGoogleUser}>Sign In With PopUp</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

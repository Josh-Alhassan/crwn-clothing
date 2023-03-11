import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.styles.scss';
// import { async } from "@firebase/util";

const Authentication = () => {
  return (
    <div className="authentication-container">
      {/* <h1>Sign In Page</h1> */}
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}

      <SignUpForm />
    </div>
  );
};

export default Authentication;

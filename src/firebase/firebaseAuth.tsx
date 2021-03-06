import {FunctionComponent, useState, useEffect} from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import {firebase} from "./firebaseConfig";

const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    // {
    //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //   requireDisplayName: false,
    // },
    // {
    //   provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    },
  ],
  signInSuccessUrl: "/",
};

const FirebaseAuth: FunctionComponent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
      {show && <StyledFirebaseAuth firebaseAuth={firebase.auth()} uiConfig={firebaseAuthConfig} />}
    </div>
  );
};

export default FirebaseAuth;

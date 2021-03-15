import styled from "styled-components";

import {useFirebase} from "../../../../context/firebaseProvider";

const SignInButtonStyle = styled.div`
  margin: 1rem;
  display: inline-block;
  background-color: #4285f4;
  color: #fff;
  border-radius: 1px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;

  :hover {
    cursor: pointer;
    -webkit-box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
    box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
  }
  :active {
    background-color: #3367d6;
    transition: background-color 0.2s;
  }
  .content-wrapper {
    height: 100%;
    width: 100%;
    border: 1px solid transparent;
    display: flex;
  }
  img {
    padding: 0.4rem;
    width: 100%;
  }

  .logo-wrapper {
    background: #fff;
    width: 3rem;
    height: 3rem;
    border-radius: 1px;
    text-align: center;
    vertical-align: center;
    align-content: center;
    justify-items: start;
  }
  .text-container {
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
    border: none;
    white-space: nowrap;
    align-self: center;
    padding: 0 1rem;
  }
`;

const SignInButton = () => {
  const {logWithGoogle} = useFirebase();

  return (
    <SignInButtonStyle onClick={logWithGoogle}>
      <div className="content-wrapper">
        <div className="logo-wrapper">
          <img alt="logo google" src="https://developers.google.com/identity/images/g-logo.png" />
        </div>
        <span className="text-container">
          <span>Sign in with Google</span>
        </span>
      </div>
    </SignInButtonStyle>
  );
};

export default SignInButton;

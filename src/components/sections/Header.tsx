import Link from "next/link";
import styled from "styled-components";

import {useFirebase} from "../../context/firebaseProvider";
import SignInButton from "../ui/Buttons/Signin/SignInButton";

import LoggedInUI from "./Login/LoggedInUI";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 50px;
    img {
      height: 100%;
    }
  }
`;

export default function Header() {
  const {isLoggedIn} = useFirebase();

  return (
    <HeaderStyle>
      <div className="logo">
        <img
          alt="logo"
          src="https://raw.githubusercontent.com/goncy/realtrends-challenge/main/packages/client/src/assets/logo.svg"
        />
      </div>
      <Link href="/">Poll</Link>
      <Link href="/selecting">Create Poll</Link>
      <Link href="/about">About</Link>

      <div className="user">
        {isLoggedIn ? (
          <>
            <LoggedInUI />
          </>
        ) : (
          <>
            <SignInButton />
          </>
        )}
      </div>
    </HeaderStyle>
  );
}

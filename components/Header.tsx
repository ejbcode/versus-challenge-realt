import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {useRouter} from "next/router";

import {useAuth} from "../src/authProvider";

import LoggedInUI from "./uiComponents/LoggedInUI";
import SignInButton from "./uiComponents/SignInButton";

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
  const {isLoggedIn} = useAuth();

  return (
    <HeaderStyle>
      <div className="logo">
        <img
          alt="logo"
          src="https://raw.githubusercontent.com/goncy/realtrends-challenge/main/packages/client/src/assets/logo.svg"
        />
      </div>
      <Link href="/">Polls</Link>
      <Link href="/selecting">Select Products</Link>

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

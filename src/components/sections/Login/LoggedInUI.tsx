import {useState} from "react";
import styled from "styled-components";

import {useFirebase} from "../../../context/firebaseProvider";
import LogOutButton from "../../ui/Buttons/Logout/LogOutButton";

const LogInSectionStyle = styled.div`
  position: relative;

  button img {
    border-radius: 50%;
    width: 32px;
    cursor: pointer;
  }
  .button-open {
    border: none;
    outline: none;
    padding: 0;
    background: transparent;
  }
`;

const DropUserStyle = styled.div`
  text-align: center;
  position: absolute;
  top: 10rem;
  padding: 1rem 0.5rem;
  background: rgba(0, 0, 0, 1);
  border: 1px gray solid;
  top: 3.5rem;
  right: 0px;
  cursor: pointer;
  width: 260px;
  z-index: 3;
  img {
    border-radius: 50%;
    width: 80px;
  }
  hr {
    border-top: solid lightgray 0.1px;
    margin: 0.9rem 0;
  }
  button {
    margin: 1rem 0 1.3rem 0;
  }
`;

const LoggedInUI = () => {
  // const {photoURL, name} = useSelector((state) => state.auth);
  const {user, logout} = useFirebase();
  const [open, setOpen] = useState(false);

  if (!user) {
    return <p>No user</p>;
  }
  const {photoURL, displayName} = user;

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <LogInSectionStyle>
      <div>
        <button className="button-open" type="button" onClick={handleClickOpen}>
          <img alt="profile" src={photoURL} />
        </button>
      </div>

      {open && (
        <DropUserStyle>
          <div className="image">
            <img alt="profile" src={photoURL} />

            <p>{displayName}</p>
          </div>

          <hr />
          <LogOutButton handleLogOut={handleLogOut} />
        </DropUserStyle>
      )}
    </LogInSectionStyle>
  );
};

export default LoggedInUI;

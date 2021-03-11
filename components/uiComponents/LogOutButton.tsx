import styled from 'styled-components';

const LogOutButtonStyle = styled.div`
  margin: 1rem;
  padding: 0.5rem 1rem;
  display: inline-block;
  background-color: gray;
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

  .text-container {
    font-size: 1.3rem;
    border: none;
    white-space: nowrap;
    align-self: center;
    padding: 0 1rem;
    display: flex;
    align-items: stretch;
  }
`;

const LogOutButton = ({ handleLogOut }) => (
  <LogOutButtonStyle onClick={handleLogOut}>
    <div className="content-wrapper">
      <span className="text-container">LogOut</span>
    </div>
  </LogOutButtonStyle>
);

export default LogOutButton;

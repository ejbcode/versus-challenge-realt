import styled from "styled-components";

export const VsBoardStyle = styled.section`
  .contender {
    height: 250px;
  }

  .vs {
    margin-top: 20px;
    min-height: 450px;
    /* border: 3px solid darkgrey; */
    position: relative;
    /* background: rgba(132, 181, 160); */
  }

  .boxes {
    display: grid;
    grid-template-columns: 50% 50%;
    height: 100%;
    z-index: 1;
  }

  .vslogo {
    position: absolute;
    z-index: 2;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: var(--color2);
    align-self: center;
    text-align: center;
    line-height: 110px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 55px;
    color: var(--colorTxt2);
    border: 10px solid var(--color1);
    bottom: 50%;
    left: 50%;
    transform: translate(-50%) skewX(-5deg);
    padding: 0;
    margin: 0;
  }

  .vote-section {
    margin-top: 2rem;
    text-align: center;
    input {
      color: #333;
      font-size: 2rem;
      margin: 1rem auto;
      padding: 0.5rem 2rem;
      border-radius: 0.2rem;
      background-color: rgb(255, 255, 255);
      border: none;
      width: 320px;
      display: block;
      border-bottom: 0.3rem solid transparent;
      transition: all 0.3s;
    }
  }
`;

export const VotesStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .votes {
    padding: 1rem 5rem;
  }

  .vote {
    margin: 3rem 0;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    padding: 1rem 1rem 3rem;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 1rem;
    }
  }

  .photo-name {
    display: flex;
    font-size: 1.7rem;
    span {
      color: white;
    }
  }

  .comment {
    font-size: 1.3rem;
    margin-left: 5rem;
    color: darkgray;
  }
`;

export const FullScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
`;

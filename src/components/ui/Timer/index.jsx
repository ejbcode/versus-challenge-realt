import styled from "styled-components";

const TimerStyle = styled.div`
  position: absolute;
  font-family: Bangers, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 38px;
  line-height: 25px;
  color: rgb(251, 225, 84);
  top: 2%;
  left: 50%;
  transform: translate(-50%) skewX(-5deg);
`;

export const Timer = () => {
  return (
    <TimerStyle>
      <span> 99 </span>
    </TimerStyle>
  );
};

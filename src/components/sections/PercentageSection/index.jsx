import styled from "styled-components";

export const PercentageStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .progress1,
  .progress2 {
    margin: 0 auto;
    z-index: 2;
    border: #ccc solid 3px;
    border-radius: 10px;
    background: #222;
    width: 40%;
    height: 40px;
    transform: translate(0, -0%) skewX(-5deg);
    font-size: 2rem;
  }

  .progress1 .vote {
    background: hsl(${(props) => props.colorA || "100"}, 100%, 40%);

    width: ${(props) => props.widthA || "0"};

    height: 100%;
    margin-right: 0;
    float: right;
    transition: 1s linear;
  }
  .progress2 .vote {
    background: hsl(${(props) => props.colorB || "100"}, 100%, 40%);
    width: ${(props) => props.widthB || "0"};
    transition: 1s linear;
    height: 100%;
    text-align: right;
  }
`;

export default function PercentageSection({A, B}) {
  return (
    <PercentageStyle colorA={A} colorB={B} widthA={`${A}%`} widthB={`${B}%`}>
      <div className="progress1">
        <div className="vote">{A}%</div>
      </div>
      <div className="progress2">
        <div className="vote">{B}%</div>
      </div>
    </PercentageStyle>
  );
}

import {SelectedProductStyle} from "./style";

export default function SelectedProduct({product, letter}) {
  let position = letter === "A" ? "left:0" : "right:0";

  return (
    <SelectedProductStyle position={position}>
      <h2>Team {letter}</h2>
      <h4>{product?.title}</h4>
      <img alt={product?.title} src={product?.thumbnail} />
    </SelectedProductStyle>
  );
}

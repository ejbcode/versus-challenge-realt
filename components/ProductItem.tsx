import React from "react";
import styled from "styled-components";

const ProductItemStyle = styled.div`
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid ${(props) => props.border || "var(--colorRT)"};
    border-radius: 5px;
    margin: 20px;
    /* background-color: rgba(241, 248, 197, 0.5);
    background-image: repeating-linear-gradient(
      transparent,
      transparent 20px,
      rgba(0, 0, 0, 0.1) 20px,
      rgba(0, 0, 0, 0.1) 40px
    ); */
    background-color: white;
    transform: skewX(-5deg);
    overflow: hidden;
    box-shadow: ${(props) => props.shadow || "none"};
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    transform: initial;
    transform: skewX(5deg);
  }
  button {
    border: solid gray;
  }
`;

const ProductItem = ({product, productSelected, setProductSelected}) => {
  return (
    <ProductItemStyle
      key={product.id}
      border={productSelected === product.id ? "var(--color1)" : ""}
      shadow={productSelected === product.id ? "var(--shadow)" : ""}
    >
      <div className="box">
        <div className="content">
          <img alt={product.title} className="contender" src={product.thumbnail} />
        </div>
      </div>
      <div className="buttons">
        <button type="button" onClick={() => setProductSelected(product.id)}>
          Option
        </button>
      </div>
    </ProductItemStyle>
  );
};

export default ProductItem;

import React from "react";
import styled from "styled-components";

const ProductsStyle = styled.div`
  overflow: hidden;
  z-index: 2;
  border-radius: 0.7rem;
  height: 120px;
  border: 2px solid ${(props) => props.border || "var(--color3)"};

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    transition: all 0.2s linear;
  }
  :hover {
    img {
      transform: scale(1.1) rotate(-2deg);
    }
  }
`;

const Products = ({newList, productA, productB, setProductA, setProductB}) => {
  const {id, title, thumbnail} = newList;

  const handleClickSelectProduct = (id) => {
    if (!productA) {
      setProductA(newList);

      return;
    }

    if (productA.id === id) {
      setProductA(null);
    }

    if (!productB) {
      setProductB(newList);

      return;
    }
    if (productB.id === id) {
      setProductB(null);
    }
  };

  return (
    <ProductsStyle
      border={
        (productA && productA.id === id) || (productB && productB.id === id)
          ? "var(--color1)"
          : "var(--colorRT)"
      }
      onClick={() => handleClickSelectProduct(id)}
    >
      <img alt={newList.title} src={thumbnail} />
      <p>{title.slice(0, 25)}</p>
    </ProductsStyle>
  );
};

export default Products;

import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import router from "next/router";

import Search from "../uiComponents/Search";
import Products from "../Products";
import {db} from "../../src/firebaseConfig";

const SelectingUiStyle = styled.section`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  position: relative;

  .productA {
    position: absolute;
    z-index: 0;
    top: 20%;
    left: 0;
    width: 200px;
    img {
      margin-top: 2rem;
      opacity: 0.5;
      width: 150px;
    }
  }
  .productB {
    position: absolute;
    z-index: 0;
    right: 0;
    top: 20%;

    width: 200px;
    img {
      margin-top: 2rem;
      opacity: 0.5;
      width: 150px;
    }
  }
`;

const ListOfProductsStyle = styled.div`
  width: 40%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 2rem;
`;

const ButtonStyle = styled.button`
  --ccc: lightgray;
  color: var(--ccc);
  margin: 3rem;
  text-align: center;
  background: transparent;
  border: 1px solid var(--ccc);
  padding: 0.9rem 2.3rem;
  border-radius: initial;
  :hover {
    --ccc: white;
  }
`;

export default function SelectingUi() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productA, setProductA] = useState(null);
  const [productB, setProductB] = useState(null);

  const [keywords, setKeywords] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const {data} = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${keywords}`);

      setListOfProducts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [keywords]);

  if (error) {
    return <SelectingUiStyle>Error: {error.message}</SelectingUiStyle>;
  }

  const handleClickReset = () => {
    const votesRef = db.collection("versus/001/votes");

    votesRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });

    const productsRef = db.collection("versus/001/products");

    productsRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });

    // votesRef.onSnapshot((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     doc.ref.delete();
    //   });
    // });

    // productsRef.onSnapshot((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     doc.ref.delete();
    //   });
    // });
  };

  const handleClick = () => {
    if (!productA || !productB) {
      return alert("Please select two products");
    }
    const votesRef = db.collection("versus/001/votes");

    votesRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });

    db.collection("versus/001/products")
      .doc("A")
      .set(productA)
      .then(() => {})
      .catch((error) => {
        console.error("Error writing documentA: ", error);
      });

    db.collection("versus/001/products")
      .doc("B")
      .set(productB)
      .then(() => {})
      .catch((error) => {
        console.error("Error writing prodcutB: ", error);
      });

    router.push("/");
  };
  // TODO:  one promise resolve, Add maybe sweet alert

  return (
    <SelectingUiStyle>
      <Search setKeywords={setKeywords} />

      {!loading && (
        <ListOfProductsStyle>
          {keywords &&
            listOfProducts?.results
              .filter((item) => item.use_thumbnail_id === false)
              .slice(0, 9)
              .map((item) => {
                const newList = {
                  id: item.id,
                  title: item.title,
                  thumbnail: item.thumbnail,
                  permalink: item.permalink,
                };

                return (
                  <Products
                    key={newList.id}
                    newList={newList}
                    productA={productA}
                    productB={productB}
                    setProductA={setProductA}
                    setProductB={setProductB}
                  />
                );
              })}
        </ListOfProductsStyle>
      )}

      {listOfProducts && (
        <>
          <ButtonStyle type="submit" onClick={handleClickReset}>
            Reset Poll
          </ButtonStyle>
          <ButtonStyle type="submit" onClick={handleClick}>
            Start a Poll
          </ButtonStyle>
        </>
      )}
      {productA ? (
        <div className="productA">
          <h2>Team A</h2>
          <h4>{productA?.title}</h4>
          <img alt={productA?.title} src={productA?.thumbnail} />
        </div>
      ) : (
        ""
      )}

      {productB ? (
        <div className="productB">
          <h2>Team B</h2>
          <h4>{productB?.title}</h4>
          <img alt={productB?.title} src={productB?.thumbnail} />
        </div>
      ) : (
        ""
      )}
    </SelectingUiStyle>
  );
}

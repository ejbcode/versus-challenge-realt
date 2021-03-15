import React, {useState} from "react";
import styled from "styled-components";
import router from "next/router";
import Search from "@components/ui/Search";
import Products from "@components/ui/Products";
import Button from "@components/ui/Buttons/Cta";
import SelectedProduct from "@components/ui/SelectedProduct";
import {useFirebase} from "@context/firebaseProvider";

import UseAxios from "../../helpers/UseAxios";

const SelectingUiStyle = styled.section`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const ListOfProductsStyle = styled.div`
  width: 40%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 2rem;
`;

export default function SelectingUi() {
  const {deleteCollection, addProductToCollection} = useFirebase();
  const votesRef = "versus/001/votes";
  const URL = "https://api.mercadolibre.com/sites/MLA/search?q=";
  const productsRef = "versus/001/products";
  const [productA, setProductA] = useState(null);
  const [productB, setProductB] = useState(null);

  const [keywords, setKeywords] = useState();

  const {data, error, loading} = UseAxios({URL, keywords});

  if (error) {
    return <SelectingUiStyle>Error: {error.message}</SelectingUiStyle>;
  }

  const handleClickReset = () => {
    deleteCollection(votesRef);
    deleteCollection(productsRef);
  };

  const handleClick = () => {
    if (!productA || !productB) {
      return alert("Please select two products");
    }

    deleteCollection(votesRef);
    addProductToCollection(productsRef, "A", productA);
    addProductToCollection(productsRef, "B", productB);

    router.push("/");
    // TODO:  one promise resolve, Add maybe sweet alert
  };

  return (
    <SelectingUiStyle>
      <Search setKeywords={setKeywords} />

      {!loading && (
        <ListOfProductsStyle>
          {keywords &&
            data?.results
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

      {data.results && (
        <>
          <Button type="submit" onClick={handleClickReset}>
            Reset Poll
          </Button>

          <Button type="submit" onClick={handleClick}>
            Start a Poll
          </Button>
        </>
      )}

      {productA && <SelectedProduct letter="A" product={productA} />}
      {productB && <SelectedProduct letter="B" product={productB} />}
    </SelectingUiStyle>
  );
}

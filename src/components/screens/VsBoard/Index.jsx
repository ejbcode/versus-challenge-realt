import React, {useEffect, useState} from "react";
import {useFirebase} from "@context/firebaseProvider";
import ProductItem from "@components/ui/ProductItem";
import Button from "@components/ui/Buttons/Cta";
import {ListOfVotes} from "@components/ui/ListOfVotes";
import {Timer} from "@components/ui/Timer";
import PercentageSection from "@components/sections/PercentageSection";

import {db} from "../../../firebase/firebaseConfig";

import {FullScreen, VsBoardStyle, VotesStyle} from "./styles";

const VsBoard = () => {
  const {user, addVoteToCollection} = useFirebase();
  const [productSelected, setProductSelected] = useState(null);
  const [products, setProducts] = useState(null);
  const [votes, setVotes] = useState([]);
  const [productReview, setProductReview] = useState("");
  const votesRef = "versus/001/votes";
  const productsRef = "versus/001/products";

  const handleOnChange = (event) => {
    setProductReview(event.target.value);
  };
  const loadProductsFromFB = () => {
    db.collection(productsRef).onSnapshot((querySnapshot) => {
      const docs = [];

      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id_products: doc.id});
      });
      setProducts(docs);
    });
  };

  const loadVotesFromFB = () => {
    db.collection(votesRef).onSnapshot((querySnapshot) => {
      const docs = [];

      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setVotes(docs);
    });
  };

  useEffect(() => {
    loadProductsFromFB();
    loadVotesFromFB();
  }, []);

  const voteForA = votes.filter((vote) => vote.productLetter === "A");
  const voteForB = votes.filter((vote) => vote.productLetter === "B");

  const perA = `${(voteForA.length / votes.length) * 100}`;
  const perB = `${(voteForB.length / votes.length) * 100}`;
  const A = isNaN(perA) ? "0" : `${perA}`;
  const B = isNaN(perB) ? "0" : `${perB}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user) return alert("sign in first to vote");

    const productLetter = products[0].id === productSelected ? "A" : "B";

    addVoteToCollection(user, productReview, productSelected, productLetter);
    setProductReview("");
  };

  if (!products) {
    return (
      <FullScreen>
        <p>Loading ...</p>
      </FullScreen>
    );
  }
  if (products?.length < 2) {
    return (
      <FullScreen>
        <p>There is not a current poll. Please wait until is available</p>
      </FullScreen>
    );
  }

  return (
    <VsBoardStyle>
      <div className="vs">
        <PercentageSection A={A} B={B} />

        <div className="vslogo">
          <span> VS </span>
        </div>
        <Timer />

        <div className="boxes">
          {products?.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              productSelected={productSelected}
              setProductSelected={setProductSelected}
            />
          ))}
        </div>
        <div className="vote-section">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Write a comment"
              type="text"
              value={productReview}
              onChange={handleOnChange}
            />
            <Button type="submit">Vote</Button>
          </form>
        </div>
      </div>
      {votes.length > 0 && (
        <VotesStyle>
          <ListOfVotes letter="A" votes={voteForA} />
          <ListOfVotes letter="B" votes={voteForB} />
        </VotesStyle>
      )}
    </VsBoardStyle>
  );
};

export default VsBoard;

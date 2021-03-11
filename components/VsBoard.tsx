import React, {useEffect, useState} from "react";
import styled from "styled-components";

import FirebaseAuth from "../src/firebaseAuth";
import {useAuth} from "../src/authProvider";
import {db} from "../src/firebaseConfig";

import ProductItem from "./ProductItem";

const VsBoardStyle = styled.section`
  .contender {
    height: 250px;
  }

  .button {
    --ccc: lightgray;
    color: var(--ccc);
    margin: 1rem 0 2rem;
    text-align: center;
    background: transparent;
    border: 1px solid var(--ccc);
    padding: 0.9rem 2.3rem;
    border-radius: initial;
    :hover {
      transition: 0.3s linear;

      --ccc: white;
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    }
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

  .timer {
    position: absolute;
    font-family: Bangers, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 38px;
    line-height: 25px;
    color: rgb(251, 225, 84);
    top: 2%;
    left: 50%;
    transform: translate(-50%) skewX(-5deg);
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

const PercentageStyle = styled.div`
  display: flex;
  justify-content: space-between;

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
    background: #eb7966;
    width: ${(props) => props.percentageA || "0"};
    height: 100%;
    margin-right: 0;
    float: right;
    transition: 1s linear;
  }
  .progress2 .vote {
    background: #eb7966;
    width: ${(props) => props.percentageB || "0"};
    transition: 1s linear;
    height: 100%;
    text-align: right;
  }
`;

const VotesStyle = styled.div`
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

const NotAvaibleYetStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
`;

const VsBoard = () => {
  const {user, loading} = useAuth();
  const [productSelected, setProductSelected] = useState(null);
  const [products, setProducts] = useState(null);
  const [votes, setVotes] = useState([]);
  const [productReview, setProductReview] = useState("");

  const handleOnChange = (event) => {
    setProductReview(event.target.value);
  };
  const loadProductsFromFB = () => {
    db.collection(`versus/001/products`).onSnapshot((querySnapshot) => {
      const docs = [];

      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id_products: doc.id});
      });
      setProducts(docs);
    });
  };

  const loadVotesFromFB = () => {
    db.collection(`versus/001/votes`).onSnapshot((querySnapshot) => {
      const docs = [];

      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setVotes(docs);
    });
  };

  const voteForA = votes.filter((vote) => vote.productLetter === "A");
  const voteForB = votes.filter((vote) => vote.productLetter === "B");

  const perA = `${(voteForA.length / votes.length) * 100}`;
  const perB = `${(voteForB.length / votes.length) * 100}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user) return alert("sign in first to vote");

    if (!productSelected) {
      return <FirebaseAuth />;
    }

    db.collection("versus/001/votes")
      .doc(user.uid)
      .set({
        name: user.displayName,
        photoURL: user.photoURL,
        productReview,
        productSelected,
        productLetter: products[0].id === productSelected ? "A" : "B",
      });
  };

  useEffect(() => {
    loadProductsFromFB();
    loadVotesFromFB();
  }, []);

  if (products?.length < 2) {
    return (
      <NotAvaibleYetStyle>
        <p>There is not a current poll. Please wait until is avaible</p>
      </NotAvaibleYetStyle>
    );
  }
  const A = isNaN(perA) ? "" : `${perA}%`;
  const B = isNaN(perB) ? "" : `${perB}%`;

  return (
    <VsBoardStyle>
      <div className="vs">
        <PercentageStyle className="progress" percentageA={A} percentageB={B}>
          <div className="progress1">
            <div className="vote">{A}</div>
          </div>
          <div className="progress2">
            <div className="vote">{B}</div>
          </div>
        </PercentageStyle>
        <div className="vslogo">
          <span> VS </span>
        </div>
        <div className="timer">
          <span> 99 </span>
        </div>

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
            <input placeholder="Write a comment" type="text" onChange={handleOnChange} />
            <button className="button" type="submit">
              Vote
            </button>
          </form>
        </div>
      </div>
      {votes.length > 0 && (
        <VotesStyle>
          <div className="votes">
            <h3>Team A</h3>
            {voteForA.map((vote) => {
              return (
                <div key={vote.id} className="vote">
                  <div className="photo-name">
                    <img alt={vote.name} src={vote.photoURL} />
                    <span>{vote.name}</span>
                  </div>
                  <div className="comment">
                    <p>{vote.productReview}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="votes">
            <h3>Team B</h3>

            {voteForB.map((vote) => {
              return (
                <div key={vote.id} className="vote">
                  <div className="photo-name">
                    <img alt={vote.name} src={vote.photoURL} />
                    <span>{vote.name}</span>
                  </div>
                  <div className="comment">
                    <p>{vote.productReview}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </VotesStyle>
      )}
    </VsBoardStyle>
  );
};

export default VsBoard;

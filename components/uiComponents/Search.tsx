import React, {useState} from "react";
import styled from "styled-components";

const SearchStyle = styled.div`
  margin-bottom: 3rem;
  .form__group {
    position: relative;
    padding: 15px 0 0;

    width: 50%;
    margin: 10px auto;
  }
  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }
  .form__label {
    position: absolute;
    left: 0;
    bottom: 0.2rem;
    color: #ccc;
    pointer-events: none;
    transition: all 0.5s;
    font-size: 1.5rem;
  }

  .form__field:valid ~ .form__label,
  .form__field:focus ~ .form__label {
    color: #11998e;
    transition: all 0.5s;
    bottom: 2.5rem;
    font-size: 1rem;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 10%;
  }
`;

const Search = ({setKeywords}) => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setKeywords(search);
  };

  return (
    <SearchStyle>
      <form onSubmit={handleSubmit}>
        <div className="form__group field">
          <input
            required
            autoComplete="off"
            className="form__field"
            name="search"
            type="text"
            onChange={handleChange}
          />
          {/* eslint-disable */}
          <label htmlFor="search" className="form__label">
            Search for products...
          </label>
        </div>
      </form>
    </SearchStyle>
  );
};

export default Search;

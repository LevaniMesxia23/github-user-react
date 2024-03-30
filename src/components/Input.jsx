import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "../../public/images/icon-search.svg";

export default function Input({ isClicked, setisClicked, user, setUser }) {
  const [search, setSearch] = useState("LevaniMesxia23");
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/users/${search}`);
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        console.log(data);
        setUser(data);
        setError(false);
        setSearch(() => "");
      } catch (error) {
        console.log("Error: ", error);
        setError(true);
      }
    }

    fetchData();
  }, [count]);

  function handleSearch() {
    setCount(count + 1);
  }

  function handleKeyPress() {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <Container isClicked={isClicked}>
      <img src={Search} alt="" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        onKeyPress={handleKeyPress}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="error">{error ? "No results" : ""}</span>
      <button onClick={handleSearch}>Search</button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.25rem;

  img {
    position: absolute;
    top: 1.41rem;
    left: 2rem;
  }

  input {
    width: 45.625rem;
    height: 4.3125rem;
    flex-shrink: 0;
    border-radius: 0.9375rem;
    background: ${(props) => (props.isClicked ? "#1E2A47" : "#fefefe")};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
    border: none;
    padding-left: 5rem;

    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5625rem;
    color: ${(props) => (props.isClicked ? "#fff" : "#4B6A9B")};
  }
  input::placeholder {
    color: ${(props) => (props.isClicked ? "#fefefe" : "#1E2A47")};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5625rem;
  }

  .error {
    position: absolute;
    right: 8.755rem;
    color: #f74646;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  button {
    position: absolute;
    right: 0.62rem;
    top: 0.59rem;
    width: 6.625rem;
    height: 3.125rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #0079ff;
    border: none;

    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }
  button:hover {
    background: #60abff;
  }

  @media (max-width: 767px) {
    img {
      left: 1rem;
      top: 1.6rem;
      width: 1.253rem;
      height: 1.25rem;
      flex-shrink: 0;
    }
    input {
      width: 20.4375rem;
      flex-shrink: 0;
      padding-left: 2.81rem;
    }
    input::placeholder {
      width: 11.5rem;
      color: #4b6a9b;
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 192.308%;
    }
    button {
      width: 5.25rem;
      height: 2.875rem;
      flex-shrink: 0;
      font-size: 0.875rem;
      right: 0.44rem;
      top: 0.7rem;
    }
  }
`;

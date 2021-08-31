import React from "react"
import { Button } from "react-bootstrap"

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    background: "#F2F1F9",
    borderRadius: "30px",
    border: "none",
    padding: "0.8rem",
    height: "4rem",
    width: "20rem",
    alignItems: "flex-end",
    color: "#0d1b2a",
  }

  const ButtonStyling = {
    height: "3rem",
    width: "10rem",
    marginLeft: "1rem",
    borderRadius: "24px",
    backgroundColor: "#0d1b2a",
    borderColor: "#0d1b2a",
  }
  return (
    <>
      <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search Products"}
        onChange={e => console.log(e.target.value)}
      />
      <Button style={ButtonStyling}>Find Product</Button>
    </>
  )
}

export default SearchBar

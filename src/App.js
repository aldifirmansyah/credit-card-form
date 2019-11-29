import React, { useState } from "react";
import CreditCard from "./CreditCard";
import Form from "./Form";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [data, setData] = useState({
    cardNumber: "",
    cardName: "",
    expirationMonth: "0",
    expirationYear: "0",
    cvv: ""
  });

  const [focus, setFocus] = useState({
    cardNumber: false,
    cardName: false,
    expirationMonth: false,
    expirationYear: false,
    cvv: false
  });

  const cardNumberValidator = newVal => {
    if (newVal === "") return newVal;
    if (newVal.length > 19 || isNaN(newVal[newVal.length - 1]))
      return data.cardNumber;
    return (newVal.length !== 5 &&
      newVal.length !== 10 &&
      newVal.length !== 15) ||
      newVal[newVal.length - 1] === " "
      ? newVal
      : data.cardNumber + " " + newVal[newVal.length - 1];
  };

  const cardNameValidator = newVal => {
    if (newVal.length > 25) return data.cardName;
    return newVal;
  };

  const cvvValidator = newVal => {
    if (newVal === "") return newVal;
    if (newVal.length > 4 || isNaN(newVal[newVal.length - 1])) return data.cvv;
    return newVal;
  };

  const handleChange = e => {
    let val = "";
    switch (e.target.name) {
      case "cardNumber":
        val = cardNumberValidator(e.target.value).trim();
        break;
      case "cardName":
        val = cardNameValidator(e.target.value);
        break;
      case "cvv":
        val = cvvValidator(e.target.value);
        break;
      default:
        val = e.target.value;
        break;
    }
    setData({ ...data, [e.target.name]: val });
  };

  const handleFocus = (name, val) => {
    setFocus({ ...focus, [name]: val });
  };

  return (
    <Container>
      <CreditCard data={data} focus={focus} />
      <br />
      <Form data={data} onChange={handleChange} setFocus={handleFocus} />;
    </Container>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import img from "./img/card_background.jpeg";

const fontSize = {
  large: "1.5rem",
  medium: "1rem",
  small: "0.75rem"
};

const color = {
  key: "gray",
  value: "white"
};

const CardWrapper = styled.section`
  height: 200px;
  width: 350px;
  perspective: 800px;
`;

const Card = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
`;

const BlackBlock = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
  height: 20%;
  background: black;
`;

const WhiteBlock = styled.div`
  position: absolute;
  top: 50%;
  width: 90%;
  height: 20%;
  margin: 0 5%;
  background: white;
  text-align: right;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const BorderWrapper = styled.div`
  border-radius: 0.5rem;
  background: transparent;
  border: 1px solid transparent;
  padding: 4px;
`;

const Typography = styled.p`
  margin: 0;
`;

const KeyTypography = styled(Typography)`
  color: ${color.key};
  font-size: ${fontSize.small};
`;

const ValueTypography = styled(Typography)`
  color: ${color.value};
  font-size: ${fontSize.medium};
`;

const Header = styled.div`
  text-align: right;
  font-size: ${fontSize.large};
  color: ${color.value};
`;

const CreditCard = ({ data, focus }) => {
  let { cardNumber, cardName, expirationMonth, expirationYear, cvv } = data;

  const generateCardNumber = val => {
    for (let i = val.length + 1; i <= 19; i++) {
      if (i % 5 === 0) val = val + " ";
      else val = val + "#";
    }

    return val;
  };

  const generateExpires = (month, year) => {
    let val = "";

    val = val + (month === "0" ? "MM" : month);
    val = val + "/";
    val = val + (year === "0" ? "YY" : year);

    return val;
  };

  const cardNumberStyle = focus.cardNumber
    ? {
        alignSelf: "flex-start",
        borderColor: "white"
      }
    : { alignSelf: "flex-start" };

  const cardNameStyle = focus.cardName
    ? {
        flexGrow: "1",
        borderColor: "white"
      }
    : { flexGrow: "1" };

  const expiresStyle =
    focus.expirationMonth || focus.expirationYear
      ? {
          width: "64px",
          borderColor: "white"
        }
      : { width: "64px" };

  const cardFlipStyle = focus.cvv ? { transform: "rotateY(-180deg)" } : {};

  return (
    <CardWrapper>
      <Card style={cardFlipStyle}>
        <Front>
          <Header>Credit Card</Header>
          <BorderWrapper style={cardNumberStyle}>
            <ValueTypography style={{ fontSize: fontSize.large }}>
              {generateCardNumber(cardNumber)}
            </ValueTypography>
          </BorderWrapper>
          <BottomWrapper>
            <BorderWrapper style={cardNameStyle}>
              <KeyTypography>Card Holder</KeyTypography>
              <ValueTypography>
                {cardName === "" ? "YOUR NAME" : cardName.toUpperCase()}
              </ValueTypography>
            </BorderWrapper>
            <BorderWrapper style={expiresStyle}>
              <KeyTypography>Expires</KeyTypography>
              <ValueTypography>
                {generateExpires(expirationMonth, expirationYear)}
              </ValueTypography>
            </BorderWrapper>
          </BottomWrapper>
        </Front>
        <Back>
          <BlackBlock />
          <WhiteBlock>{cvv}</WhiteBlock>
        </Back>
      </Card>
    </CardWrapper>
  );
};

export default CreditCard;

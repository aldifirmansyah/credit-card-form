import React from "react";
import styled from "styled-components";

const FormWrapper = styled.section`
  width: 600px;
  background-color: white;
  border-radius: 1rem;
  border: 1px solid #ced4da;
  padding: 2rem;
`;

const Form = ({ data, onChange, setFocus }) => {
  const { cardNumber, cardName, expirationMonth, expirationYear, cvv } = data;

  return (
    <FormWrapper>
      <form>
        <div className="form-row">
          <div className="form-group col-sm-12 col-xs-12">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              className="form-control"
              id="cardNumber"
              type="text"
              onChange={onChange}
              name="cardNumber"
              value={cardNumber}
              onFocus={() => setFocus("cardNumber", true)}
              onBlur={() => setFocus("cardNumber", false)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-12 col-xs-12">
            <label htmlFor="cardName">Card Name</label>
            <input
              className="form-control"
              id="cardName"
              type="text"
              onChange={onChange}
              name="cardName"
              value={cardName}
              onFocus={() => setFocus("cardName", true)}
              onBlur={() => setFocus("cardName", false)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-8 col-xs-8">
            <label>Expiration Date</label>
            <div className="row">
              <div className="col-sm-6 col-xs-6">
                <select
                  name="expirationMonth"
                  className="form-control"
                  onChange={onChange}
                  defaultValue={expirationMonth}
                  onFocus={() => setFocus("expirationMonth", true)}
                  onBlur={() => setFocus("expirationMonth", false)}
                >
                  <option value="0">Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="02">03</option>
                  <option value="02">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="col-sm-6 col-xs-6">
                <select
                  name="expirationYear"
                  className="form-control"
                  onChange={onChange}
                  defaultValue={expirationYear}
                  onFocus={() => setFocus("expirationYear", true)}
                  onBlur={() => setFocus("expirationYear", false)}
                >
                  <option value="0">Year</option>
                  <option value="21">2021</option>
                  <option value="20">2020</option>
                  <option value="19">2019</option>
                  <option value="18">2018</option>
                  <option value="17">2017</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group col-sm-4 col-xs-4">
            <label htmlFor="cvv">CVV</label>
            <input
              className="form-control"
              id="cvv"
              type="text"
              onChange={onChange}
              name="cvv"
              value={cvv}
              onFocus={() => setFocus("cvv", true)}
              onBlur={() => setFocus("cvv", false)}
            />
          </div>
        </div>
      </form>
    </FormWrapper>
  );
};

export default Form;

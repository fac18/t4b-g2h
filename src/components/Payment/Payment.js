import React from "react";
import PaymentIcons from "../../assets/PaymentMethods.svg";
import * as SC from "../styles/Text.style";
import * as Style from "../styles/Form.style";
import * as Btn from "../styles/Buttons.style";

const Payment = () => {
  return (
    <SC.CenteredText>
      <h2>Payment Details</h2>
      <Style.FormBox>
        <img src={PaymentIcons} alt="Payment options available"></img>
        <label htmlFor="cardNumber">Card number:</label>
        <input
          aria-label="Enter card number"
          id="cardNumber"
          required
          type="number"
        />
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input
          id="expirationDate"
          type="expiration"
          aria-label="Enter expiration date"
          required
        />
        <label htmlFor="cvCode">CV Code:</label>
        <input
          aria-label="Enter the CV code from the back of your card"
          id="cvCode"
          type="number"
          required
        />
        <label htmlFor="cardHolder">Cardholder:</label>
        <input
          aria-label="Enter the CV code from the back of your card"
          id="cvCode"
          type="number"
          required
        />
        <Btn.PrimaryBtn>PAY NOW</Btn.PrimaryBtn>
      </Style.FormBox>
    </SC.CenteredText>
  );
};

export default Payment;

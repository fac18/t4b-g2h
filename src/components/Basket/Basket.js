import React from "react";
import * as SC from "../styles/Text.style";
import * as Btn from "../styles/Buttons.style";

const Basket = () => {
  //   const [basketData, setBasketData] = React.useState(null);

  return (
    <SC.Margin>
      {/* Breadcrums  here... */}
      <SC.CenteredText>
        <h2>My Basket</h2>
      </SC.CenteredText>
      <SC.JustifiedText>
        {/* we need to have a fx that pushes the items into the "basket" */}
        {/* <ul> map through the added to basket items and display them here, e.g.:
        {basketData.map(item => {
          return <li key={item.id}>{item.image_link} {item.name} {item.price}</li>;
        })}
      </ul> */}
        {/* Also... do we need to add a remove option from the basket? */}
        <SC.BoldText>
          <h3>YOUR TOTAL: £ </h3>
        </SC.BoldText>
        <p></p>
        <p>
          I confirm I have read and agree to all owners rights
          <input type="checkbox"></input>
        </p>
        <Btn.PrimaryBtn>Checkout</Btn.PrimaryBtn>
      </SC.JustifiedText>
    </SC.Margin>
  );
};

export default Basket;

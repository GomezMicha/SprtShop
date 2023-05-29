import React from "react";
import {
  CheckoutSummaryWrapper,
  CheckoutSummaryHeader,
  CheckoutSummaryItem,
  SummaryItemValue,
  CheckoutSummaryTotal,
  PaymentBtn,
} from "./checkout-summary.style";

const CheckoutSummary = ({ subTotal }) => {
  const converToFloat = (value) => parseFloat(value).toFixed(2);
  const _subTotal = converToFloat(subTotal);
  const salesTaxes = converToFloat(_subTotal * 0.07);
  const discount = converToFloat(_subTotal * 0.05);
  const total = subTotal + parseFloat(salesTaxes) - parseFloat(discount);

  return (
    <CheckoutSummaryWrapper>
      <CheckoutSummaryHeader>
        <h2>Order Summary</h2>
      </CheckoutSummaryHeader>
      <CheckoutSummaryItem>
        <span>Subtotal:</span>
        <SummaryItemValue>${_subTotal}</SummaryItemValue>
      </CheckoutSummaryItem>
      <CheckoutSummaryItem>
        <span>Discount:</span>
        <SummaryItemValue>${discount}</SummaryItemValue>
      </CheckoutSummaryItem>
      <CheckoutSummaryItem>
        <span>Estimated Shipping:</span>
        <SummaryItemValue>$0.00</SummaryItemValue>
      </CheckoutSummaryItem>
      <CheckoutSummaryItem>
        <span>Estimated Sales Tax:</span>
        <SummaryItemValue>${salesTaxes}</SummaryItemValue>
      </CheckoutSummaryItem>
      <CheckoutSummaryTotal>
        <span>Total:</span>
        <span>${`${parseFloat(total).toFixed(2)}`}</span>
      </CheckoutSummaryTotal>
      <PaymentBtn>Proceed to Payment</PaymentBtn>
    </CheckoutSummaryWrapper>
  );
};

export default CheckoutSummary;

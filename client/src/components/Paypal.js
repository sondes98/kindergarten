import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom'
import "./Paypal.css"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Paypal() {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "150",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };

  return (
    <div className="paypal">
      <PayPalButton
    
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
      <Link to="/profile">
        <span>
          {" "}
          continue to your account <button> here </button>{" "}
        </span>
      </Link>
    </div>
  );
}

export default Paypal;

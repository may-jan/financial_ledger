import React, { useContext } from "react";
import { Context } from "../context/Context";
import '../styles/Total.scss';

const Total = () => {
  const listValue = useContext(Context);

 console.log(listValue)

  return (
    <div className="Total">
      <div className="total_deposit">수입<span>🪙 금액</span></div>
      <div className="total_withdraw">지출<span>🪙 금액</span></div>
    </div>
  )
};

export default Total;

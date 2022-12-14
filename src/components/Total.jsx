import React, { useContext} from "react";
import { Context } from "../context/Context";
import '../styles/Total.scss';

const Total = () => {
  const deposit = useContext(Context).deposit;
  const withdraw = useContext(Context).withdraw;

  return (
    <div className="Total">
      <div className="total_deposit">μμ
        <span>
          {deposit}
        </span>
      </div>
      <div className="total_withdraw">μ§μΆ
        <span>
          {withdraw}
        </span>
      </div>
    </div>
  )
};

export default Total;

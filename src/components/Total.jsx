import React, { useContext} from "react";
import { Context } from "../context/Context";
import '../styles/Total.scss';

const Total = () => {
  const deposit = useContext(Context).deposit;
  const withdraw = useContext(Context).withdraw;

  return (
    <div className="Total">
      <div className="total_deposit">수입
        <span>
          {deposit}
        </span>
      </div>
      <div className="total_withdraw">지출
        <span>
          {withdraw}
        </span>
      </div>
    </div>
  )
};

export default Total;

import React, { useContext } from "react";
import { Context } from "../context/Context";

const ListItem = () => {
  const listValue = useContext(Context);

  return(
    <div className="ListItem">
      <table border='1'>
        <thead>
          <tr>
            <td>날짜</td>
            <td>수입/지출</td>
            <td>내용</td>
            <td>금액</td>
          </tr>
        </thead>
        <tbody>
          {
            listValue.map((data, idx)=>(
              <tr key={idx}>
                <td>{data.date}</td>
                <td>{data.type}</td>
                <td>{data.text}</td>
                <td>{data.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default ListItem;

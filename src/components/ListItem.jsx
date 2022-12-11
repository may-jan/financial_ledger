import React, { useContext } from "react";
import { Context } from "../context/Context";
import '../styles/ListItem.scss';

const ListItem = () => {
  const list = useContext(Context).list;

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
            list.map((data, idx)=>(
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

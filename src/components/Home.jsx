import React, { useState } from "react";
import '../styles/Home.scss';
import Total from './Total';
import Insert from './Insert';
import List from './List';
import { Context } from "../context/Context";

const Home = () => {

  const [list, setList] = useState([
    {
    date : '2022-12-03',
    type : '지출',
    text : '그집밥',
    price : 5500
    }
  ]);

  const insertHandler = (data) => {
    const newList = {
      date : data.date,
      type : data.type,
      text : data.text,
      price : parseInt(data.price)
    }
    setList([...list, newList]);  
  }
  
  const [deposit, setDeposit] = useState(0); 
  const [withdraw, setWithdraw] = useState(list[0].price); 

  const getFn = (price) => (
    setDeposit((prev) => prev + price)
  ) 

  const useFn = (price) => (
    setWithdraw((prev) => prev + price)
  )

  return(
    <div className="Home">
      <Context.Provider value={{list, deposit, withdraw}}>
        <Total/>
        <Insert insertHandler={insertHandler} get={getFn} use={useFn}/>
        <List/>
      </Context.Provider>
    </div>
  ) 
};

export default Home;

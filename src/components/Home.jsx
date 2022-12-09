import React, { useState } from "react";
import '../styles/Home.scss';
import Total from './Total';
import Insert from './Insert';
import List from './List';
import { Context } from "../context/Context";

const Home = () => {

  const [list, setList] = useState([
    {
    date : '12-03',
    type : '지출',
    text : '그집밥',
    price : '5500'
    }
  ]);

  const insertHandler = (data) => {
    const newList = {
      date : data.date,
      type : data.type,
      text : data.text,
      price : data.price
    }
    setList([...list, newList]);  
  }

  return(
    <div className="Home">
      <Context.Provider value={list}>
        <Total/>
        <Insert insertHandler={insertHandler}/>
        <List/>
      </Context.Provider>
    </div>
  ) 
};

export default Home;

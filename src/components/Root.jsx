import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import '../styles/Root.scss';

const Root = () => {
  return (
    <div className="Root">
        <Menu/>
        <Outlet className='Outlet'/>
    </div>
  )
};

export default Root;

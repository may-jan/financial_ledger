import React from "react";
import { Link } from "react-router-dom";
import '../styles/Menu.scss';

const Menu = () => {
  return (
  <div className="Menu">
    <h2>π° ν°λλͺ¨μνμ° π°</h2>
    <ul className="menu_wrap">
        <li><Link to='/'>π  Home</Link></li>
        <li><Link to='/withdraw'>β μμ</Link></li>
        <li><Link to='/deposit'>β μ§μΆ</Link></li>
        <li><Link to='/result'>π‘ λΆμ</Link></li>
    </ul>
  </div>
  )
};

export default Menu;

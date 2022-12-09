import React from "react";
import { Link } from "react-router-dom";
import '../styles/Menu.scss';

const Menu = () => {
  return (
  <div className="Menu">
    <h2>💰 티끌모아태산 💰</h2>
    <ul className="menu_wrap">
        <li><Link to='/'>🏠 Home</Link></li>
        <li><Link to='/withdraw'>➕ 수입</Link></li>
        <li><Link to='/deposit'>➖ 지출</Link></li>
        <li><Link to='/result'>💡 분석</Link></li>
    </ul>
  </div>
  )
};

export default Menu;

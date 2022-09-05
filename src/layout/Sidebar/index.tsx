import React from 'react';
import { logo } from '@assets/images';
import { List } from 'antd';
import { CopyRightIcon } from '@assets/icon';
import { NavLink } from 'react-router-dom';
import { menuItems } from 'src/data';
import { LayoutProps } from '@layout/DefaultLayout';

const Sidebar = ({ active }: LayoutProps) => {
  return (
    <div className="sidebar">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="insight" />
        </div>
        <List>
          {menuItems.map((item, index) => (
            <NavLink
              to={`${item.path}`}
              key={index}
              className={`list-item ${index === active && 'active'}`}
            >
              {item.icon}
              <span className="item-name">{item.name}</span>
            </NavLink>
          ))}
        </List>
      </div>
      <div className="copyright">
        <span>Copyright</span>
        <CopyRightIcon />
        <span>2020 Alta Software</span>
      </div>
    </div>
  );
};

export default Sidebar;

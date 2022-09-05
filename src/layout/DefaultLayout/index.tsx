import React from 'react';
import Sidebar from '../Sidebar';
import HeaderComponent from '../Header';

export type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
  active?: number;
  filterTicketBar?: React.ReactNode;
};

const DefaultLayout = ({ children, active = 0, title, filterTicketBar }: LayoutProps) => {
  return (
    <div className="container-component">
      <Sidebar active={active} />
      <div className="right-component">
        <HeaderComponent />
        <div className="main-component">
          <div className="main-content">
            <span className="title">{title}</span>
            {children}
          </div>
          {filterTicketBar}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;

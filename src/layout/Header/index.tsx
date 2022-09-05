import React from 'react';
import { accNotiMail } from '@assets/images';
import SearchComponent from '@shared/components/SearchComponent';

const HeaderComponent = () => {
  return (
    <>
      <div className="header-component">
        <SearchComponent placeholder={'Search'} width="370px" />
        <div className="acc-noti-mail">
          <img src={accNotiMail} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;

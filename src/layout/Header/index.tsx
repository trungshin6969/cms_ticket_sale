import React from 'react';
import { accNotiMail } from '@assets/images';
import SearchComponent from '@shared/components/SearchComponent';
// import React, { memo } from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router';

// import { RootState } from '@modules';
// import UserEntity from '@modules/user/entity';
// import { Selector } from '@reduxjs/toolkit';
// import { imgAvatar } from '@shared/assets/images';
// import ChangeLanguage from '@shared/components/ChangeLanguage';

// interface IHeaderComponent {
//   profile?: UserEntity;
// }

// const HeaderComponentSelector: Selector<RootState, IHeaderComponent> = (state: RootState) => {
//   return {
//     profile: state.profile.user,
// };
// };

// const [search, setSearch] = useState<string>('');
// const handleSearch = (searchKey: string) => {
//   setSearch(searchKey);
// };

const HeaderComponent = () => {
  // const { profile } = useSelector(HeaderComponentSelector);
  // const history = useHistory();

  return (
    <>
      <div className="header-component">
        {/* <div className="search-component"> */}
        {/* <Input placeholder="Search" />
          <SearchIcon /> */}
        <SearchComponent placeholder={'Search'} classNames={'search-component'} />
        {/* </div> */}
        <div className="acc-noti-mail">
          <img src={accNotiMail} alt="" />
        </div>
      </div>
      {/* <div className="header-component">
        <div className="header-component__search">
          <ChangeLanguage />
        </div>
        <div className="header-component__dropdown">
          <div className="dropdown__profile__img">
            <img alt="img-avatar" className="img-avatar" src={profile?.avatar || imgAvatar} />
          </div>
        </div>
        <div
          className="header-component__identify"
          onClick={() => {
            history.push('/profile');
          }}
        >
          <h4 className="identify__admin">{profile?.userFullName}</h4>
          <p className="identify__place">{profile?.email || 'Unknown'}</p>
          <p className="identify__hi">{(profile && profile?.role?.roleName) || 'Unknown'}</p>
        </div>
      </div> */}
    </>
  );
};

export default HeaderComponent;

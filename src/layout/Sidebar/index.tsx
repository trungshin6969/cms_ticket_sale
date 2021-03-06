import React from 'react';
import { logo } from '@assets/images';
import { List } from 'antd';
import { CopyRightIcon, HomeIcon, SettingIcon, TicketCheckIcon, TicketIcon } from '@assets/icon';
// import React, { memo, useState, useEffect } from 'react';
// import { useHistory, useLocation } from 'react-router';
// import { privatePage } from '@routers/mainRouter';
// import { IRouter } from '@routers/interface';
// import CheckPermission from '@shared/hoc/CheckPermission';
// import { logo } from '@shared/assets/images';
// import { UilAngleRight } from '@iconscout/react-unicons';
// import MenuItem from './ItemMenu';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import type { MenuProps, MenuTheme } from 'antd';

// interface IRenderMenuProps {
//   listNav: Array<IRouter>;
//   location: string;
// }

// const renderMenu: React.FC<IRenderMenuProps> = (props: IRenderMenuProps) => {
//   const listNav = props.listNav.slice(1, props.listNav.length + 1);
//   return (
//     <>
//       {listNav.map((item: IRouter, index) => {
//         if (item.menu == null || item.menu?.hideInNavbar) {
//           return <React.Fragment key={index}></React.Fragment>;
//         } else if (item.permissionCode) {
//           return (
//             <CheckPermission permissionCode={item.permissionCode} key={index}>
//               <MenuItem data={item} key={index} />
//             </CheckPermission>
//           );
//         } else {
//           return <MenuItem data={item} key={index} />;
//         }
//       })}
//     </>
//   );
// };

// const RenderMenu = memo(renderMenu);

const menuItems = [
  {
    name: 'Trang chủ',
    icon: <HomeIcon />,
  },
  {
    name: 'Quản lý vé',
    icon: <TicketIcon />,
  },
  {
    name: 'Đối soát vé',
    icon: <TicketCheckIcon />,
  },
  {
    name: 'Cài đặt',
    icon: <SettingIcon />,
  },
];

const Sidebar: React.FC = () => {
  // const SiderComponent: React.FC<{
  //   className: string;
  //   setClassName: (className: string) => void;
  // }> = props => {
  //   const location = useLocation();
  //   const history = useHistory();
  //   const { className, setClassName } = props;
  //   const [width, setWidth] = useState<string | number>();
  //   const onClick = (e: any) => {
  //     setClassName('sider-component big');
  //     e.preventDefault();
  //     e.stopPropagation();
  //   };

  //   useEffect(() => {
  //     if (className === 'sider-component') {
  //       setWidth(0);
  //     } else {
  //       setWidth('100%');
  //     }
  //   }, [className]);

  return (
    <div className="sidebar">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="insight" />
        </div>
        <div className="list">
          <List>
            {menuItems.map(item => (
              <List.Item>
                <List.Item.Meta key={item.name} avatar={item.icon} title={item.name} />
              </List.Item>
            ))}
          </List>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright</span>
        <CopyRightIcon />
        <span>2020 Alta Software</span>
      </div>
    </div>
    // <div className={className} onClick={onClick}>
    //   <div className="icon">
    //     <UilAngleRight />
    //   </div>
    //   <div className="mask" style={{ width }}>
    //     <div className="logo">
    //       <img src={logo} alt="logo" onClick={() => history.push('/')} />
    //     </div>
    //     <div className="menu">
    //       <RenderMenu listNav={privatePage} location={location.pathname} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;

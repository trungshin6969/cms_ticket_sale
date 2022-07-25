import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import HeaderComponent from './Header';
// import React, { memo, PropsWithChildren, useState } from 'react';

// export { default as Sidebar } from './Sidebar';
// export { default as HeaderComponent } from './Header';
// export { default as ContentComponent } from './Content';

// interface IDefaultLayoutProps {
//   history: any;
// }
const DefaultLayout = ({children}:{children: ReactNode}) => {
// const DefaultLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = props => {
//   const [menu, setMenu] = useState<string>('sider-component big');

//   const onClick = (e: any): any => {
//     const targetNode = e.target as HTMLDivElement;
//     if (targetNode.className === 'main-component' || e.target === e.currentTarget) {
//       setMenu('sider-component');
//       return;
//     }
//     if (
//       targetNode.tagName === 'INPUT' ||
//       targetNode.tagName === 'BUTTON' ||
//       targetNode.parentElement?.onclick !== null
//     ) {
//       return;
//     }
//     setMenu('sider-component');
//   };

  return (
    <>
        <Sidebar />
        <div className="right-component">
            <HeaderComponent />
            <div className="main-component">{children}</div>
        </div>
    </>
    // <div className="all-page-component">
    //   <SiderComponent setClassName={setMenu} className={menu} />
    //   <div className="right-page-component" onClick={onClick}>
    //     <div className="w-100 d-flex flex-row-reverse">
    //       <HeaderComponent />
    //     </div>
    //     <div className="main-component">{props.children}</div>
    //   </div>
    // </div>
  );
};

export default DefaultLayout;

import '@shared/assets/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '@styles/styles.scss';

// import { ConfigProvider } from 'antd';
// import lodash from 'lodash';
import React from 'react';
// import { IntlProvider } from 'react-intl';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router';

// import locale from '@locale/index';
// import { TokenSelector } from '@modules/authentication/profileStore';
// import { LanguageSelector } from '@modules/setting/settingStore';
// import PrivatePage from '@routers/component/PrivatePage';

// import PublicPage from '../routers/component/PublicPage';
import HomePage from './view/Homepage/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TicketManagement from './view/TicketManagement/index';
import TicketCheck from './view/TicketCheck';
import Settinng from './view/Setting';

// const MainView = memo(({ statusLogin: boolean }) => {
//   return (
//     <>
//       {statusLogin ? (
//         <Suspense fallback={<></>}>
//           <PrivatePage />
//         </Suspense>
//       ) : (
//         <Suspense fallback={<></>}>
//           <PublicPage />
//         </Suspense>
//       )}
//     </>
//   );
// });

// const MainView = memo(({ statusLogin }: { statusLogin: boolean }) => {
//   return (
//     <>
//       {statusLogin ? (
//         <Suspense fallback={<></>}>
//           <PrivatePage />
//         </Suspense>
//       ) : (
//         <Suspense fallback={<></>}>
//           <PublicPage />
//         </Suspense>
//       )}
//     </>
//   );
// });

// For Test
const App: React.FC = () => {
  // const { token } = useSelector(TokenSelector);
  // const { language } = useSelector(LanguageSelector);
  // const history = useHistory();
  // const memoLangData = useMemo(() => {
  //   return locale[language];
  // }, [language]);
  // useEffect(() => {
  //   if (!token) {
  //     history.push('/');
  //   }
  // }, [history, token]);

  return (
    // <IntlProvider locale={language} messages={memoLangData}>
    //   <ConfigProvider locale={memoLangData}>
    //     {/* <MainView statusLogin={!lodash.isEmpty(token)} /> */}
    //   </ConfigProvider>
    // </IntlProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/ticket-management">
          <TicketManagement />
        </Route>
        <Route path="/ticket-check">
          <TicketCheck />
        </Route>
        <Route path="/setting">
          <Settinng />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

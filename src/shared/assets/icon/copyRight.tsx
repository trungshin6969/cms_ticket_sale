import React from 'react';
import Icon from '@ant-design/icons';
const copyRightSvg = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.33332 4.99998H7.66665C7.84346 4.99998 8.01303 5.07022 8.13805 5.19524C8.26308 5.32027 8.33332 5.48984 8.33332 5.66665C8.33332 5.84346 8.40355 6.01303 8.52858 6.13805C8.6536 6.26308 8.82317 6.33331 8.99998 6.33331C9.17679 6.33331 9.34636 6.26308 9.47139 6.13805C9.59641 6.01303 9.66665 5.84346 9.66665 5.66665C9.66665 5.13621 9.45594 4.62751 9.08086 4.25243C8.70579 3.87736 8.19708 3.66665 7.66665 3.66665H6.33332C5.80288 3.66665 5.29417 3.87736 4.9191 4.25243C4.54403 4.62751 4.33332 5.13621 4.33332 5.66665V8.33331C4.33332 8.86375 4.54403 9.37245 4.9191 9.74753C5.29417 10.1226 5.80288 10.3333 6.33332 10.3333H7.66665C8.19708 10.3333 8.70579 10.1226 9.08086 9.74753C9.45594 9.37245 9.66665 8.86375 9.66665 8.33331C9.66665 8.1565 9.59641 7.98693 9.47139 7.86191C9.34636 7.73688 9.17679 7.66665 8.99998 7.66665C8.82317 7.66665 8.6536 7.73688 8.52858 7.86191C8.40355 7.98693 8.33332 8.1565 8.33332 8.33331C8.33332 8.51012 8.26308 8.67969 8.13805 8.80472C8.01303 8.92974 7.84346 8.99998 7.66665 8.99998H6.33332C6.1565 8.99998 5.98694 8.92974 5.86191 8.80472C5.73689 8.67969 5.66665 8.51012 5.66665 8.33331V5.66665C5.66665 5.48984 5.73689 5.32027 5.86191 5.19524C5.98694 5.07022 6.1565 4.99998 6.33332 4.99998ZM6.99998 0.333313C5.68144 0.333313 4.39251 0.724306 3.29618 1.45685C2.19985 2.18939 1.34537 3.23058 0.840786 4.44876C0.336202 5.66693 0.204179 7.00738 0.461414 8.30058C0.718649 9.59379 1.35359 10.7817 2.28594 11.714C3.21829 12.6464 4.40617 13.2813 5.69938 13.5385C6.99259 13.7958 8.33303 13.6638 9.55121 13.1592C10.7694 12.6546 11.8106 11.8001 12.5431 10.7038C13.2757 9.60745 13.6666 8.31852 13.6666 6.99998C13.6666 6.1245 13.4942 5.25759 13.1592 4.44876C12.8241 3.63992 12.3331 2.90499 11.714 2.28593C11.095 1.66688 10.36 1.17581 9.55121 0.840783C8.74237 0.505751 7.87546 0.333313 6.99998 0.333313ZM6.99998 12.3333C5.94515 12.3333 4.914 12.0205 4.03694 11.4345C3.15988 10.8484 2.47629 10.0155 2.07263 9.04096C1.66896 8.06642 1.56334 6.99406 1.76913 5.9595C1.97492 4.92493 2.48287 3.97462 3.22875 3.22874C3.97463 2.48286 4.92494 1.97491 5.9595 1.76912C6.99407 1.56334 8.06642 1.66895 9.04096 2.07262C10.0155 2.47629 10.8485 3.15988 11.4345 4.03694C12.0205 4.914 12.3333 5.94515 12.3333 6.99998C12.3333 8.41447 11.7714 9.77102 10.7712 10.7712C9.77102 11.7714 8.41447 12.3333 6.99998 12.3333Z"
      fill="#1E0D03"
    />
  </svg>
);
const CopyRighIcon = props => <Icon component={copyRightSvg} {...props} />;
export default CopyRighIcon;
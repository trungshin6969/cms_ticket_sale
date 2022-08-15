import React from 'react';
import Icon from '@ant-design/icons';
const filterSvg = () => (
  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z"
      stroke="#FF993C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const FilterIcon = props => <Icon component={filterSvg} {...props} />;
export default FilterIcon;

import React from 'react';
import * as Icon from 'react-feather';
import { Input } from 'antd';
import { ISearchProps } from './interface';

const SearchComponent = ({ width, height, placeholder }: ISearchProps) => {
  return (
    <div className="search-component" style={{ width, height }}>
      <Input type="text" placeholder={placeholder} suffix={<Icon.Search />} />
    </div>
  );
};

export default SearchComponent;

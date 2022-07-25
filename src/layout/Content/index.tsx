import React from 'react';
import { Area } from '@ant-design/plots';
import { DatePicker} from 'antd';
import moment from 'moment';

const dateFormat = 'MM/YYYY';

const ContentComponent: React.FC = () => {
  const data = [
    { Weekdays: 'Thứ 2', value: 150 },
    { Weekdays: 'Thứ 3', value: 178 },
    { Weekdays: 'Thứ 4', value: 155 },
    { Weekdays: 'Thứ 5', value: 235 },
    { Weekdays: 'Thứ 6', value: 220 },
    { Weekdays: 'Thứ 7', value: 210 },
    { Weekdays: 'CN', value: 190 }
  ];

  const config = {
    data,
    colorField: 'type',
    color: '#F87217',
    xField: 'Weekdays',
    yField: 'value',
    xAxis: {
      tickCount: 7,
      range: [0, 1]
    },
    yAxis: {
      max: 260,
      min: 140,
      tickCount: 4
    },
    smooth: true,
  };

  return (
    <>
      <div className="chart-area">
        <span className='title'>Thống kê</span>
        <div className='revenue_datepicker'>
          <span className='revenue'>Doanh thu</span>
          <div className='datepicker'>
            <DatePicker defaultValue={moment('04/2021', dateFormat)} format={dateFormat}/>
          </div>
        </div>
        <div className='area'>
          <Area {...config} />
        </div>
      </div>
      
    </>
  );
};

export default ContentComponent;



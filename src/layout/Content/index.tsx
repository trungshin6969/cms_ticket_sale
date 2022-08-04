import React from 'react';
import { Area, Pie } from '@ant-design/plots';
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = `MM, YYYY`;

const eventData = [
  {
    type: 'Vé đã sử dụng',
    value: 56024,
  },
  {
    type: 'Vé chưa sử dụng',
    value: 13568,
  },
];
const familyData = [
  {
    type: 'Vé đã sử dụng',
    value: 30256,
  },
  {
    type: 'Vé chưa sử dụng',
    value: 28302,
  },
];

const DonutChart = ({
  data,
  legend,
}: {
  data: { type: string; value: number }[];
  legend?: false;
}) => {
  const config = {
    height: 140,
    width: 140,
    data,
    angleField: 'value',
    colorField: 'type',
    color: ['#FF8A48', '#4F75FF'],
    radius: 1,
    legend: legend,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        fontSize: 7,
        textAlign: 'center',
      },
    },
    statistic: {
      title: false,
      content: {
        content: '',
      },
    },
    tooltip: false,
  };
  return <Pie {...config} />;
};

const ContentComponent: React.FC = () => {
  const data = [
    { Weekdays: 'Thứ 2', value: 150 },
    { Weekdays: 'Thứ 3', value: 178 },
    { Weekdays: 'Thứ 4', value: 155 },
    { Weekdays: 'Thứ 5', value: 255 },
    { Weekdays: 'Thứ 6', value: 240 },
    { Weekdays: 'Thứ 7', value: 220 },
    { Weekdays: 'CN', value: 200 },
  ];

  const config = {
    data,
    colorField: 'type',
    color: '#FAA05F',
    xField: 'Weekdays',
    yField: 'value',
    xAxis: {
      tickCount: 7,
      range: [0, 1],
    },
    yAxis: {
      max: 260,
      min: 140,
      tickCount: 4,
    },
    smooth: true,
    areaStyle: {
      fill: 'l(270) 0.26:#faa05f 0:#ffffff',
    },
  };

  return (
    <>
      <div className="chart-area">
        <span className="title">Thống kê</span>
        <div className="revenue_datepicker">
          <span className="revenue">Doanh thu</span>
          <div className="datepicker">
            <DatePicker defaultValue={moment('04/2021', dateFormat)} format={dateFormat} />
          </div>
        </div>
        <div className="area">
          <Area {...config} />
        </div>
        <span className="revenue_week_total">Tổng doanh thu theo tuần</span>
        <div className="currency">
          <span className="amount">525.145.000</span>
          <span className="unit">đồng</span>
        </div>
        <div className="donut_chart">
          <div className="datepicker">
            <DatePicker defaultValue={moment('04/2021', dateFormat)} format={dateFormat} />
          </div>
          <div className="donut_chart_item">
            <span className="donut_chart_title">Gói gia đình</span>
            <DonutChart data={familyData} />
          </div>
          <div className="donut_chart_item">
            <span className="donut_chart_title">Gói sự kiện</span>
            <DonutChart data={eventData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentComponent;

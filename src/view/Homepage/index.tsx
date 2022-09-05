import React from 'react';
import DefaultLayout from '@layout/DefaultLayout/index';
import { Area, Pie } from '@ant-design/plots';
import { DatePicker } from 'antd';
import moment from 'moment';
import { areaChartData, eventData, familyData } from 'src/data';

type DonutChartProps = {
  data: { type: string; value: number }[];
  legend?: false;
};
const dateFormat = 'MM, YYYY';

const DonutChart = ({ data }: DonutChartProps) => {
  const config = {
    height: 200,
    width: 200,
    data,
    angleField: 'value',
    colorField: 'type',
    color: ['#FF8A48', '#4F75FF'],
    radius: 1,
    legend: false,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        fontSize: 10,
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

const Homepage = () => {
  const config = {
    data: areaChartData,
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
    <DefaultLayout title="Thống kê">
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
        <div>
          <div className="chart-type">
            <div className="chart-color-blue"></div>
            <div className="chart-text">Vé đã sử dụng</div>
          </div>
          <div className="chart-type">
            <div className="chart-color-orange"></div>
            <div className="chart-text">Vé chưa sử dụng</div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Homepage;

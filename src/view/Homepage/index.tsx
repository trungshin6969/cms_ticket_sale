import React from 'react';
import DefaultLayout from '@layout/index';
import { Area, Pie } from '@ant-design/plots';
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'MM, YYYY';

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
// import { Sidebar, HeaderComponent, ContentComponent } from '@layout/index';
// import './style.scss';

//import { Space } from 'antd';
// import { ColumnsType } from 'antd/lib/table';
// import React, { Key, useEffect, useState } from 'react';

// import ISelect from '@core/select';
// import RightMenu, { IArrayAction } from '@layout/RightMenu';
// import CircleLabel from '@shared/components/CircleLabel';
// import { DeleteConfirm } from '@shared/components/ConfirmDelete';
// import EditIconComponent from '@shared/components/EditIconComponent';
// import InformationIconComponent from '@shared/components/InformationIcon';
// import MainTitleComponent from '@shared/components/MainTitleComponent';
// import SearchComponent from '@shared/components/SearchComponent/SearchComponent';
// import SelectAndLabelComponent, {
//   ISelectAndLabel,
// } from '@shared/components/SelectAndLabelComponent';
// import TableComponent from '@shared/components/TableComponent';
// import useTable from '@shared/components/TableComponent/hook';
// import { useAltaIntl } from '@shared/hook/useTranslate';

// import ModalComponents from './component/MainModal/ModalHomepage';
// import { IModal } from './interface';
// import { routerHomepage } from './router';

// const dataTable = require('./data.json');

const Homepage = () => {
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

  // const { formatMessage } = useAltaIntl();
  // const table = useTable();

  // const [modal, setModal] = useState<IModal>({
  //   isVisible: false,
  //   dataEdit: null,
  //   isReadOnly: false,
  // });
  // const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
  // const [search, setSearch] = useState<string>('');
  // const [filter, setFilterOption] = useState<any>();

  // const idChooses = 'id'; //get your id here. Ex: accountId, userId,...
  // const columns: ColumnsType = [
  //   {
  //     dataIndex: 'tagName',
  //   },
  //   {
  //     dataIndex: 'lastUpdate',
  //   },
  //   {
  //     dataIndex: 'group',
  //   },
  //   {
  //     dataIndex: 'group',
  //     render: () => <CircleLabel text={formatMessage('common.statusActive')} colorCode="blue" />,
  //   },
  //   {
  //     dataIndex: 'action',
  //     render: (_item: any, record: any) => (
  //       <Space>
  //         <EditIconComponent
  //           onClick={() => {
  //             setModal({
  //               dataEdit: record,
  //               isVisible: true,
  //               isReadOnly: false,
  //             });
  //           }}
  //         />
  //         <InformationIconComponent
  //           onClick={() => {
  //             setModal({
  //               dataEdit: record,
  //               isVisible: true,
  //               isReadOnly: true,
  //             });
  //           }}
  //         />
  //       </Space>
  //     ),
  //   },
  // ];

  // const handleRefresh = () => {
  //   table.fetchData({ option: { search: search, filter: { ...filter } } });
  //   setSelectedRowKeys([]);
  // };

  // const arrayAction: IArrayAction[] = [
  //   {
  //     iconType: 'add',
  //     handleAction: () => {
  //       setModal({ dataEdit: null, isVisible: true });
  //     },
  //   },
  //   { iconType: 'share' },
  //   {
  //     iconType: 'delete',
  //     disable: selectedRowKeys?.length === 0,
  //     handleAction: () => {
  //       DeleteConfirm({
  //         content: formatMessage('common.delete'),
  //         handleOk: () => {
  //           // call Api Delete here
  //           handleRefresh();
  //         },
  //         handleCancel: () => {},
  //       });
  //     },
  //   },
  // ];
  // const dataString: ISelect[] = [{ label: 'common.all', value: undefined }];
  // const arraySelectFilter: ISelectAndLabel[] = [
  //   { textLabel: 'Lĩnh vực', dataString },
  //   { textLabel: 'Địa bàn quản lý', dataString },
  //   { textLabel: 'Trạng thái', dataString },
  // ];

  // useEffect(() => {
  //   table.fetchData({ option: { search: search, filter: { ...filter } } });
  // }, [search, filter, table]);

  // const handleSearch = (searchKey: string) => {
  //   setSearch(searchKey);
  // };

  // const onChangeSelectStatus = (name: string | undefined) => (status: any) => {
  //   if (name && status) {
  //     setFilterOption((pre: any) => ({ ...pre, [name]: status }));
  //   }
  // };
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
      </div>
    </DefaultLayout>
    // <Sidebar />
    // <div className="right_layout">
    //   <HeaderComponent />
    //   <ContentComponent />
    // </div>
    // <MainTitleComponent breadcrumbs={routerHomepage} />
    // <div className="main-card">
    //   <div className="d-flex flex-row justify-content-md-between mb-3 align-items-end">
    //     <div className="d-flex flex-row ">
    //       {arraySelectFilter.map(item => (
    //         <SelectAndLabelComponent
    //           onChange={onChangeSelectStatus(item.name)}
    //           key={item.name}
    //           className="margin-select"
    //           dataString={item.dataString}
    //           textLabel={item.textLabel}
    //         />
    //       ))}
    //     </div>
    //     <div className="d-flex flex-column ">
    //       <div className="label-select">{formatMessage('common.keyword')}</div>
    //       <SearchComponent
    //         onSearch={handleSearch}
    //         placeholder={'common.keyword'}
    //         classNames="mb-0 search-table"
    //       />
    //     </div>
    //   </div>
    //   <TableComponent
    //     // apiServices={}
    //     defaultOption={filter}
    //     translateFirstKey="homepage"
    //     rowKey={res => res[idChooses]}
    //     register={table}
    //     columns={columns}
    //     onRowSelect={setSelectedRowKeys}
    //     dataSource={dataTable}
    //     disableFirstCallApi={true}
    //   />
    // </div>
    // <RightMenu arrayAction={arrayAction} />
    // <ModalComponents modal={modal} handleRefresh={handleRefresh} setModal={setModal} />
  );
};

export default Homepage;

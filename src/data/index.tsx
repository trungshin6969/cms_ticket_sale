import React from 'react';
import { ColumnsType } from 'antd/lib/table';
import { Button, Tag } from 'antd';
import { HomeIcon, SettingIcon, TicketCheckIcon, TicketIcon } from '@assets/icon';
import { routerHomepage } from '@view/Homepage/router';
import { routerTicketManagement } from '@view/TicketManagement/router';
import { routerTicketCheck } from '@view/TicketCheck/router';
import { routerSetting } from '@view/Setting/router';
import { FormOutlined } from '@ant-design/icons';
import {
  IEventTicketPackage,
  IFamilyTicketPackage,
  UsageStatus,
} from '@view/TicketManagement/interface';
import { ITicketCheck, TicketStatus } from '@view/TicketCheck/interface';
import { DateTime, ITicketPackageList, PackageStatus } from '@view/Setting/interface';

export const familyTicketColumns: ColumnsType<IFamilyTicketPackage> = [
  {
    title: 'STT',
    dataIndex: 'numericalOrder',
    key: 'numericalOrder',
  },
  {
    title: 'Booking code',
    dataIndex: 'bookingCode',
    key: 'bookingCode',
  },
  {
    title: 'Số vé',
    dataIndex: 'ticketNumber',
    key: 'ticketNumber',
  },
  {
    title: 'Tình trạng sử dụng',
    key: 'usageStatus',
    dataIndex: 'usageStatus',
    render: (status: UsageStatus) => {
      const color =
        status === 'Đã sử dụng' ? 'geekblue' : status === 'Chưa sử dụng' ? 'green' : 'red';
      return (
        <Tag color={color}>
          <ul>
            <li>{status}</li>
          </ul>
        </Tag>
      );
    },
  },
  {
    title: 'Ngày sử dụng',
    key: 'dateOfUse',
    dataIndex: 'dateOfUse',
  },
  {
    title: 'Ngày xuất vé',
    key: 'ticketReleaseDate',
    dataIndex: 'ticketReleaseDate',
  },
  {
    title: 'Cổng check-in',
    key: 'checkInGate',
    dataIndex: 'checkInGate',
  },
];

export const familyTicketData: IFamilyTicketPackage[] = [
  {
    key: '1',
    numericalOrder: 1,
    bookingCode: 'ALTFGHJU',
    ticketNumber: '123456789034',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '2',
    numericalOrder: 2,
    bookingCode: 'ALTOJMNB',
    ticketNumber: '236784631642',
    usageStatus: 'Chưa sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: '_',
  },
  {
    key: '3',
    numericalOrder: 3,
    bookingCode: 'ALTQTYJH',
    ticketNumber: '487621489474',
    usageStatus: 'Hết hạn',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: '_',
  },
  {
    key: '4',
    numericalOrder: 4,
    bookingCode: 'ALTCFSDF',
    ticketNumber: '156464891479',
    usageStatus: 'Hết hạn',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: '_',
  },
  {
    key: '5',
    numericalOrder: 5,
    bookingCode: 'ALTIOJNB',
    ticketNumber: '201649631896',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '6',
    numericalOrder: 6,
    bookingCode: 'ALTVDFTR',
    ticketNumber: '148920121478',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '7',
    numericalOrder: 7,
    bookingCode: 'ALTLIOVF',
    ticketNumber: '654115684899',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '8',
    numericalOrder: 8,
    bookingCode: 'ALTSZXNH',
    ticketNumber: '205465031465',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
];

export const eventTicketColumns: ColumnsType<IEventTicketPackage> = [
  {
    title: 'STT',
    dataIndex: 'numericalOrder',
    key: 'numericalOrder',
  },
  {
    title: 'Booking code',
    dataIndex: 'bookingCode',
    key: 'bookingCode',
  },
  {
    title: 'Số vé',
    dataIndex: 'ticketNumber',
    key: 'ticketNumber',
  },
  {
    title: 'Tên sự kiện',
    dataIndex: 'eventName',
    key: 'eventName',
    width: 265,
  },
  {
    title: 'Tình trạng sử dụng',
    key: 'usageStatus',
    dataIndex: 'usageStatus',
    render: (status: UsageStatus) => {
      const color =
        status === 'Đã sử dụng' ? 'geekblue' : status === 'Chưa sử dụng' ? 'green' : 'red';
      return (
        <Tag color={color}>
          <ul>
            <li>{status}</li>
          </ul>
        </Tag>
      );
    },
  },
  {
    title: 'Ngày sử dụng',
    key: 'dateOfUse',
    dataIndex: 'dateOfUse',
  },
  {
    title: 'Ngày xuất vé',
    key: 'ticketReleaseDate',
    dataIndex: 'ticketReleaseDate',
  },
  {
    title: 'Cổng check-in',
    key: 'checkInGate',
    dataIndex: 'checkInGate',
  },
];

export const eventTicketData: IEventTicketPackage[] = [
  {
    key: '1',
    numericalOrder: 1,
    bookingCode: 'ALT20210501',
    ticketNumber: '123456789034',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '2',
    numericalOrder: 2,
    bookingCode: 'ALT20210501',
    ticketNumber: '236784631642',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Chưa sử dụng',
    dateOfUse: '',
    ticketReleaseDate: '14/04/2021',
    checkInGate: '_',
  },
  {
    key: '3',
    numericalOrder: 3,
    bookingCode: 'ALT20210501',
    ticketNumber: '487621489474',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Hết hạn',
    dateOfUse: '',
    ticketReleaseDate: '14/04/2021',
    checkInGate: '',
  },
  {
    key: '4',
    numericalOrder: 4,
    bookingCode: 'ALT20210501',
    ticketNumber: '156464891479',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Hết hạn',
    dateOfUse: '',
    ticketReleaseDate: '14/04/2021',
    checkInGate: '_',
  },
  {
    key: '5',
    numericalOrder: 5,
    bookingCode: 'ALT20210501',
    ticketNumber: '201649631896',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '6',
    numericalOrder: 6,
    bookingCode: 'ALT20210501',
    ticketNumber: '148920121478',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '7',
    numericalOrder: 7,
    bookingCode: 'ALT20210501',
    ticketNumber: '654115684899',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
  {
    key: '8',
    numericalOrder: 8,
    bookingCode: 'ALT20210501',
    ticketNumber: '205465031465',
    eventName: 'Hội chợ triển lãm tiêu dùng 2021',
    usageStatus: 'Đã sử dụng',
    dateOfUse: '14/04/2021',
    ticketReleaseDate: '14/04/2021',
    checkInGate: 'Cổng 1',
  },
];

export const ticketColumns: ColumnsType<ITicketCheck> = [
  {
    title: 'STT',
    dataIndex: 'numericalOrder',
    key: 'numericalOrder',
  },
  {
    title: 'Số vé',
    dataIndex: 'ticketNumber',
    key: 'ticketNumber',
  },
  {
    title: 'Ngày sử dụng',
    key: 'dateOfUse',
    dataIndex: 'dateOfUse',
  },
  {
    title: 'Tên loại vé',
    key: 'ticketName',
    dataIndex: 'ticketName',
  },
  {
    title: 'Cổng check-in',
    key: 'checkInGate',
    dataIndex: 'checkInGate',
  },
  {
    title: '',
    dataIndex: 'ticketStatus',
    key: 'ticketStatus',
    render: (status: TicketStatus) => {
      return (
        <div className={status === 'Đã đối soát' ? 'checkedTicket' : 'uncheckedTicket'}>
          {status}
        </div>
      );
    },
  },
];

export const ticketData: ITicketCheck[] = [
  {
    key: '1',
    numericalOrder: 1,
    ticketNumber: '205314876321',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Chưa đối soát',
  },
  {
    key: '1',
    ticketNumber: '205314801225',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Chưa đối soát',
  },
  {
    key: '1',
    ticketNumber: '205314897452',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Chưa đối soát',
  },
  {
    key: '1',
    ticketNumber: '205314821403',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Chưa đối soát',
  },
  {
    key: '2',
    numericalOrder: 2,
    ticketNumber: '205314860215',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Chưa đối soát',
  },
  {
    key: '3',
    numericalOrder: 3,
    ticketNumber: '205314848965',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Chưa đối soát',
  },
  {
    key: '4',
    numericalOrder: 4,
    ticketNumber: '205314830221',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Chưa đối soát',
  },
  {
    key: '5',
    numericalOrder: 5,
    ticketNumber: '205314814777',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Chưa đối soát',
  },
];

export const ticketCheckedData: ITicketCheck[] = [
  {
    key: '1',
    numericalOrder: 1,
    ticketNumber: 'ALT20210501',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Đã đối soát',
  },
  {
    key: '1',
    ticketNumber: 'ALT20210501',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Đã đối soát',
  },
  {
    key: '1',
    ticketNumber: 'ALT20210501',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Đã đối soát',
  },
  {
    key: '1',
    ticketNumber: 'ALT20210501',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Đã đối soát',
  },
  {
    key: '2',
    numericalOrder: 2,
    ticketNumber: 'ALT20210501',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Đã đối soát',
  },
  {
    key: '3',
    numericalOrder: 3,
    ticketNumber: 'ALT20210501',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Đã đối soát',
  },
  {
    key: '4',
    numericalOrder: 4,
    ticketNumber: 'ALT20210501',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Đã đối soát',
  },
  {
    key: '5',
    numericalOrder: 5,
    ticketNumber: 'ALT20210501',
    dateOfUse: '14/04/2021',
    ticketName: 'Vé cổng',
    checkInGate: 'Cổng 1',
    ticketStatus: 'Đã đối soát',
  },
];

export const packageColumns: ColumnsType<ITicketPackageList> = [
  {
    title: 'STT',
    dataIndex: 'numericalOrder',
    key: 'numericalOrder',
  },
  {
    title: 'Mã gói',
    dataIndex: 'packageCode',
    key: 'packageCode',
  },
  {
    title: 'Tên gói vé',
    key: 'packageName',
    dataIndex: 'packageName',
  },
  {
    title: 'Ngày áp dụng',
    key: 'dateOfUse',
    dataIndex: 'dateOfUse',
    align: 'right',
    render: (dateOfUse: DateTime) => {
      return (
        <>
          <div>{dateOfUse.date}</div>
          <div>{dateOfUse.time}</div>
        </>
      );
    },
  },
  {
    title: 'Ngày hết hạn',
    key: 'expirationDate',
    dataIndex: 'expirationDate',
    align: 'right',
    render: (expirationDate: DateTime) => {
      return (
        <>
          <div>{expirationDate.date}</div>
          <div>{expirationDate.time}</div>
        </>
      );
    },
  },
  {
    title: 'Giá vé (VNĐ/Vé)',
    key: 'price',
    dataIndex: 'price',
    align: 'right',
  },
  {
    title: 'Giá Combo (VNĐ/Combo)',
    key: 'comboPrice',
    dataIndex: 'comboPrice',
  },
  {
    title: 'Tình trạng',
    key: 'packageStatus',
    dataIndex: 'packageStatus',
    render: (status: PackageStatus) => {
      const color = status === 'Đang áp dụng' ? 'green' : 'red';
      return (
        <Tag color={color}>
          <ul>
            <li>{status}</li>
          </ul>
        </Tag>
      );
    },
  },
  {
    title: '',
    dataIndex: '',
    key: '',
    render: () => {
      return (
        // <div className='update'>
        //   <FormOutlined />
        //   <span>Cập nhật</span>
        // </div>
        <Button icon={<FormOutlined />} type="text" className="text-btn">
          Cập nhật
        </Button>
      );
    },
  },
];

export const packageListData: ITicketPackageList[] = [
  {
    key: '1',
    numericalOrder: 1,
    packageCode: 'ALT20210501',
    packageName: 'Gói gia đình',
    dateOfUse: {
      date: '14/04/2021',
      time: '08:00:00',
    },
    expirationDate: {
      date: '14/04/2021',
      time: '23:00:00',
    },
    price: '90.000 VNĐ',
    comboPrice: '360.000 VNĐ/4 Vé',
    packageStatus: 'Đang áp dụng',
  },
  {
    key: '2',
    numericalOrder: 2,
    packageCode: 'ALT20210502',
    packageName: 'Gói sự kiện',
    dateOfUse: {
      date: '14/04/2021',
      time: '08:00:00',
    },
    expirationDate: {
      date: '14/04/2021',
      time: '23:00:00',
    },
    price: '20.000 VNĐ',
    packageStatus: 'Tắt',
  },
];

export const menuItems = [
  {
    name: 'Trang chủ',
    icon: <HomeIcon />,
    path: routerHomepage.path,
  },
  {
    name: 'Quản lý vé',
    icon: <TicketIcon />,
    path: routerTicketManagement.path,
  },
  {
    name: 'Đối soát vé',
    icon: <TicketCheckIcon />,
    path: routerTicketCheck.path,
  },
  {
    name: 'Cài đặt',
    icon: <SettingIcon />,
    path: routerSetting.path,
  },
];

export const familyData = [
  {
    type: 'Vé chưa sử dụng',
    value: 13568,
  },
  {
    type: 'Vé đã sử dụng',
    value: 56024,
  },
];

export const eventData = [
  {
    type: 'Vé chưa sử dụng',
    value: 28302,
  },
  {
    type: 'Vé đã sử dụng',
    value: 30256,
  },
];

export const areaChartData = [
  { Weekdays: 'Thứ 2', value: 150 },
  { Weekdays: 'Thứ 3', value: 178 },
  { Weekdays: 'Thứ 4', value: 155 },
  { Weekdays: 'Thứ 5', value: 255 },
  { Weekdays: 'Thứ 6', value: 240 },
  { Weekdays: 'Thứ 7', value: 220 },
  { Weekdays: 'CN', value: 200 },
];

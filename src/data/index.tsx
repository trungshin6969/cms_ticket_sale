import React from 'react';
import {
  FamilyTicketPackage,
  EventTicketPackage,
  usageStatus,
  TicketCheck,
  ticketStatus,
} from '../types';
import { ColumnsType } from 'antd/lib/table';
import { Tag } from 'antd';
import { HomeIcon, SettingIcon, TicketCheckIcon, TicketIcon } from '@assets/icon';
import { routerHomepage } from '@view/Homepage/router';
import { routerTicketManagement } from '@view/TicketManagement/router';
import { routerTicketCheck } from '@view/TicketCheck/router';
import { routerSetting } from '@view/Setting/router';

export const familyTicketColumns: ColumnsType<FamilyTicketPackage> = [
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
    render: (status: usageStatus) => {
      const color =
        status === 'Đã sử dụng' ? '#919DBA' : status === 'Chưa sử dụng' ? '#03AC00' : '#FD5959';
      return <Tag color={color}>{status}</Tag>;
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

export const familyTicketData: FamilyTicketPackage[] = [
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
  // {
  //   key: '9',
  //   numericalOrder: 9,
  //   bookingCode: 'ALTMLNHG',
  //   ticketNumber: '894648474910',
  //   usageStatus: 'Đã sử dụng',
  //   dateOfUse: '14/04/2021',
  //   ticketReleaseDate: '14/04/2021',
  //   checkInGate: 'Cổng 1'
  // },
  // {
  //   key: '10',
  //   numericalOrder: 10,
  //   bookingCode: 'ALTETRUH',
  //   ticketNumber: '894875101400',
  //   usageStatus: 'Đã sử dụng',
  //   dateOfUse: '14/04/2021',
  //   ticketReleaseDate: '14/04/2021',
  //   checkInGate: 'Cổng 1'
  // },
  // {
  //   key: '11',
  //   numericalOrder: 11,
  //   bookingCode: 'ALTCSDGF',
  //   ticketNumber: '205314876321',
  //   usageStatus: 'Đã sử dụng',
  //   dateOfUse: '14/04/2021',
  //   ticketReleaseDate: '14/04/2021',
  //   checkInGate: 'Cổng 1'
  // },
  // {
  //   key: '12',
  //   numericalOrder: 12,
  //   bookingCode: 'ALTNBVGH',
  //   ticketNumber: '185653100147',
  //   usageStatus: 'Đã sử dụng',
  //   dateOfUse: '14/04/2021',
  //   ticketReleaseDate: '14/04/2021',
  //   checkInGate: 'Cổng 1'
  // },
];

export const eventTicketColumns: ColumnsType<EventTicketPackage> = [
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
    render: (status: usageStatus) => {
      const color =
        status === 'Đã sử dụng' ? '#919DBA' : status === 'Chưa sử dụng' ? '#03AC00' : '#FD5959';
      return <Tag color={color}>{status}</Tag>;
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

export const eventTicketData: EventTicketPackage[] = [
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

export const ticketColumns: ColumnsType<TicketCheck> = [
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
    render: (status: ticketStatus) => {
      return (
        <div className={status === 'Đã đối soát' ? 'checkedTicket' : 'uncheckedTicket'}>
          {status}
        </div>
      );
    },
  },
];

export const ticketData: TicketCheck[] = [
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

export const ticketCheckedData: TicketCheck[] = [
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

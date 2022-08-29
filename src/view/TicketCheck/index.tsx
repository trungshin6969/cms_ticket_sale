import React from 'react';
import DefaultLayout from '@layout/index';
import FilterTicketBar from '@layout/filterTicketBar';
import SearchComponent from '@shared/components/SearchComponent';
import { Button, Pagination, Table } from 'antd';
import { ticketColumns, ticketData } from 'src/data';

const TicketCheck = () => {
  return (
    <DefaultLayout title="Đối soát vé" filterTicketBar={<FilterTicketBar />}>
      <div className="content-features">
        <SearchComponent placeholder={'Tìm bằng số vé'} width="346px" />
        <Button type="primary" style={{ marginLeft: 10 }}>
          Chốt đối soát
        </Button>
      </div>
      <Table columns={ticketColumns} dataSource={ticketData} size="small" pagination={false} />
      <Pagination defaultCurrent={1} size="small" total={200} />
    </DefaultLayout>
  );
};

export default TicketCheck;

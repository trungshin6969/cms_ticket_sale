import { Button, DatePicker, Form, Radio, RadioChangeEvent, Space } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';

const dateFormat = 'DD/MM/YYYY';

const FilterTicketBar = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="filter-ticket col-4">
      <span className="title">Lọc vé</span>
      <Form className="filter-ticket-form" colon={false}>
        <Form.Item label="Tình trạng đối soát" className="check-status">
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>Tất cả</Radio>
              <Radio value={2}>Chưa đối soát</Radio>
              <Radio value={3}>Đã đối soát</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item className="ticket-type" label="Loại vé">
          Vé cổng
        </Form.Item>
        <Form className="date-picker-filter-form" layout="horizontal" colon={false}>
          <Form.Item label="Từ ngày">
            <DatePicker
              disabled
              defaultValue={moment('01/05/2021', dateFormat)}
              format={dateFormat}
              style={{ marginLeft: 91 }}
            />
          </Form.Item>
          <Form.Item label="Đến ngày">
            <DatePicker
              defaultValue={moment('01/05/2021', dateFormat)}
              format={dateFormat}
              style={{ marginLeft: 80 }}
            />
          </Form.Item>
        </Form>
        <div className="form-submit">
          <Button className="default-btn">Lọc</Button>
        </div>
      </Form>
    </div>
  );
};

export default FilterTicketBar;

import React, { useState } from 'react';
import DefaultLayout from '@layout/index';
import SearchComponent from '@shared/components/SearchComponent';
import { Button, Checkbox, Col, DatePicker, Form, Modal, Pagination, Row} from 'antd';
import 'antd/dist/antd.css';
import { FilterIcon } from '@assets/icon';
import moment from 'moment';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import Table from 'antd/lib/table';
import {
  familyTicketData,
  eventTicketData,
  familyTicketColumns,
  eventTicketColumns,
} from 'src/data';

const dateFormat = 'DD/MM/YYYY';

const Options = ['Tất cả', 'Đã sử dụng', 'Chưa sử dụng', 'Hết hạn'];

const TicketManagement = () => {
  const [modal, setModal] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  const [table, setTable] = useState(familyTicketData);
  const [columns, setColumns] = useState(familyTicketColumns);

  const handleCancel = () => {
    setModal(false);
    setTable(eventTicketData);
    setColumns(eventTicketColumns);
  };

  return (
    <DefaultLayout title="Danh sách vé">
      <div className="features">
        <SearchComponent placeholder={'Tìm bằng số vé'} width="346px" />
        <div className="button-features">
          <Button className="default-btn" icon={<FilterIcon />} onClick={() => setModal(true)}>
            Lọc vé
          </Button>
          <Modal
            className="main-modal"
            title="Lọc vé"
            centered
            visible={modal}
            onCancel={handleCancel}
            footer={<Button onClick={handleCancel}>Lọc</Button>}
            closable={false}
            maskClosable={false}
          >
            <Form className="date-picker-form" layout="vertical">
              <Form.Item name="date-picker" label="Từ ngày">
                <DatePicker defaultValue={moment('01/04/2021', dateFormat)} format={dateFormat} />
              </Form.Item>
              <Form.Item name="date-picker" label="Đến ngày">
                <DatePicker defaultValue={moment('01/04/2021', dateFormat)} format={dateFormat} />
              </Form.Item>
            </Form>
            <Form className="usage-status-form" layout="vertical">
              <Form.Item label="Tình trạng sử dụng">
                <Checkbox.Group options={Options} defaultValue={['Tất cả']} onChange={onChange} />
              </Form.Item>
            </Form>
            <Form className="checkin-gate-form" layout="vertical">
              <Form.Item label="Cổng check - in">
                <Checkbox.Group
                  style={{ width: '100%' }}
                  defaultValue={['Tất cả']}
                  onChange={onChange}
                >
                  <Row>
                    <Col span={8}>
                      <Checkbox value="Tất cả" onClick={toggleDisable}>
                        Tất cả
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Cổng 1" disabled={disabled}>
                        Cổng 1
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Cổng 2" disabled={disabled}>
                        Cổng 2
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Cổng 3" disabled={disabled}>
                        Cổng 3
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Cổng 4" disabled={disabled}>
                        Cổng 4
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Cổng 5" disabled={disabled}>
                        Cổng 5
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form>
          </Modal>
          <Button className="default-btn">Xuất file (.csv)</Button>
        </div>
      </div>
      <Table columns={columns} dataSource={table} size="small" pagination={false} />
      <Pagination defaultCurrent={1} size="small" total={200} />
    </DefaultLayout>
  );
};

export default TicketManagement;

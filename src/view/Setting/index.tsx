import React, { useState } from 'react';
import DefaultLayout from '@layout/DefaultLayout/index';
import SearchComponent from '@shared/components/SearchComponent';
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Modal,
  Pagination,
  Select,
  Space,
  Table,
  TimePicker,
} from 'antd';
import { packageColumns, packageListData } from 'src/data';

const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Settinng = () => {
  const [modal, setModal] = useState(false);

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <DefaultLayout title="Danh sách gói vé">
      <div className="features">
        <SearchComponent placeholder={'Tìm bằng số vé'} width="346px" />
        <div className="button-features">
          <Button className="default-btn">Xuất file (.csv)</Button>
          <Button
            className="primary-btn"
            type="primary"
            style={{ marginLeft: 10 }}
            onClick={() => setModal(true)}
          >
            Thêm gói vé
          </Button>
          <Modal
            className="main-modal"
            title="Thêm gói vé"
            centered
            visible={modal}
            onCancel={handleCancel}
            footer={
              <div>
                <Button className="default-btn" onClick={handleCancel}>
                  Hủy
                </Button>
                <Button className="primary-btn" onClick={handleCancel}>
                  Lưu
                </Button>
              </div>
            }
            closable={false}
            maskClosable={false}
          >
            <Form layout="vertical">
              <Form.Item className="package-name" label="Tên gói vé" required>
                <Input
                  placeholder="Nhập tên gói vé"
                  style={{ width: 367, height: 40, borderRadius: 8 }}
                />
              </Form.Item>
              <Form className="date-picker-package-form" layout="vertical">
                <Form.Item className="date-time-picker" label="Ngày áp dụng">
                  <DatePicker placeholder="dd/mm/yy" />
                  <TimePicker placeholder="hh:mm:ss" />
                </Form.Item>
                <Form.Item className="date-time-picker" label="Ngày hết hạn">
                  <DatePicker placeholder="dd/mm/yy" />
                  <TimePicker placeholder="hh:mm:ss" />
                </Form.Item>
              </Form>
              <Form.Item label="Giá vé áp dụng">
                <Space direction="vertical">
                  <Checkbox>
                    <Space direction="horizontal">
                      <span>Vé lẻ (vnđ/vé) với giá</span>
                      <Input className="input-price" placeholder="Giá vé" />
                      <span>/ vé</span>
                    </Space>
                  </Checkbox>
                  <Checkbox>
                    <Space direction="horizontal">
                      <span>Combo vé với giá</span>
                      <Input className="input-price" placeholder="Giá vé" />
                      <span>/</span>
                      <Input className="input-price-small" placeholder="Giá vé" />
                      <span>vé</span>
                    </Space>
                  </Checkbox>
                </Space>
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }} label="Tình trạng">
                <Select defaultValue="apply" onChange={handleChange} style={{ width: 176 }}>
                  <Option value="apply">Đang áp dụng</Option>
                  <Option value="off">Tắt</Option>
                </Select>
              </Form.Item>
              <div>
                <span style={{ color: 'red' }}>*</span>{' '}
                <span style={{ opacity: 0.4 }}>là thông tin bắt buộc</span>
              </div>
            </Form>
          </Modal>
        </div>
      </div>
      <Table
        columns={packageColumns}
        dataSource={packageListData}
        size="small"
        pagination={false}
      />
      <Pagination defaultCurrent={1} size="small" total={200} style={{ marginTop: 220 }} />
    </DefaultLayout>
  );
};

export default Settinng;

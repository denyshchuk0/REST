import React from "react";
import withRouter from "react-dom";
import { Form, Input, InputNumber, Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import { WithApiService } from "../Hoc/with-api-service";
import { history } from "../../index";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const AddCharacter = ({ apiStoreService }) => {
  const onFinish = (values) => {
    console.log(values);
    apiStoreService.AddHero(values).then((result) => {
      console.log("promise=> ", result);
      if (result.success) {
        console.log("result=> ", result.success);

        history.push("/");
      }
    });
  };

  return (
    <Row>
      <Col span={8} offset={6}>
        <Form {...layout} onFinish={onFinish}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item
            name="class"
            label="Class"
            rules={[
              {
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="defense"
            label="defense"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="hitPoints"
            label="hitPoints"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="Strength "
            label="Strength "
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="Intelligence"
            label="Intelligence"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default WithApiService()(AddCharacter);

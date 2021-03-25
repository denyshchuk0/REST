import React from "react";
import { Form, Input, InputNumber, Button, Row, Col, Modal } from "antd";
import "antd/dist/antd.css";
import { WithApiService } from "../Hoc/with-api-service";
import { OneHeroLoaded } from "../../Actions/CharacterActions";
import { connect } from "react-redux";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
class UpdateCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 0,
      defense: 0,
      hitPoints: 0,
      id: 0,
      intelligence: 0,
      Name: 0,
      strength: 0,

      visibleUpdate: false,
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.apiStoreService
      .GetHero(this.props.match.params.id)
      .then((character) => {
        this.props.OneHeroLoaded(character.data);
        console.log(this.props.Hero);
        this.setState({
          class: this.props.Hero.class,
          defense: this.props.Hero.defense,
          hitPoints: this.props.Hero.hitPoints,
          id: this.props.Hero.id,
          intelligence: this.props.Hero.intelligence,
          Name: this.props.Hero.name,
          strength: this.props.Hero.strength,
        });
      });
  }

  handleCancelUpdateUser() {
    this.props.apiStoreService
      .GetHero(this.props.match.params.id)
      .then((character) => {
        this.props.OneHeroLoaded(character.data);
        console.log(this.props.Hero);
      });
    this.setState({ visibleUpdate: false });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handleSaveUpdateUser = () => {
    const data = {
      class: this.state.class,
      defense: this.state.defense,
      hitPoints: this.state.hitPoints,
      id: this.state.id,
      intelligence: this.state.intelligence,
      name: this.state.Name,
      strength: this.state.strength,
    };
    this.props.apiStoreService.UpdateHero(data).then((result) => {
      console.log("promise=> ", result);
      if (result.success) {
        console.log("result=> ", result.success);
        this.setState({ visibleUpdate: false });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={8} offset={6}>
            <Form
              {...layout}
              initialValues={{
                modifier: "public",
                remember: false,
              }}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input the name!",
                  },
                ]}
              >
                <span className="ant-form-text">{this.props.Hero.name}</span>
              </Form.Item>
              <Form.Item name="class" label="Class">
                <span className="ant-form-text">{this.props.Hero.class}</span>
              </Form.Item>
              <Form.Item name="defense" label="defense">
                <span className="ant-form-text">{this.props.Hero.defense}</span>
              </Form.Item>
              <Form.Item name="hitPoints" label="hitPoints">
                <span className="ant-form-text">
                  {this.props.Hero.hitPoints}
                </span>
              </Form.Item>
              <Form.Item name="Strength " label="Strength ">
                <span className="ant-form-text">
                  {this.props.Hero.strength}
                </span>
              </Form.Item>
              <Form.Item name="Intelligence" label="Intelligence">
                <span className="ant-form-text">
                  {this.props.Hero.intelligence}
                </span>
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  type="primary"
                  onClick={() => {
                    this.setState({ visibleUpdate: true });
                  }}
                >
                  Update
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Modal
          visible={this.state.visibleUpdate}
          title="Update your`s information"
          okText="Update"
          cancelText="Cancel"
          destroyOnClose={true}
          onCancel={() => {
            this.setState({ visibleUpdate: false });
          }}
          onOk={() => {
            this.handleSaveUpdateUser();
          }}
        >
          <Form
            layout="vertical"
            initialValues={{
              modifier: "public",
              remember: false,
            }}
            name="form_in_modal"
          >
            <Form.Item name="Name" label="Name">
              <Input
                name="Name"
                type="textarea"
                onChange={this.handleChange.bind(this)}
                defaultValue={this.state.Name}
              />
            </Form.Item>
            <Form.Item
              name="class"
              label="class"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber
                name="class"
                onChange={this.handleChange.bind(this)}
                defaultValue={this.state.class}
              />
            </Form.Item>
            <Form.Item
              name="defense"
              label="defense"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber
                name="defense"
                onChange={this.handleChange.bind(this)}
                defaultValue={this.state.defense}
              />
            </Form.Item>
            <Form.Item
              name="intelligence"
              label="intelligence"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber
                name="intelligence"
                onChange={this.handleChange.bind(this)}
                defaultValue={this.state.intelligence}
              />
            </Form.Item>
            <Form.Item
              name="hitPoints"
              label="hitPoints"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber
                name="hitPoints"
                onChange={this.handleChange.bind(this)}
                defaultValue={this.state.hitPoints}
              />
            </Form.Item>
            <Form.Item
              name="strength"
              label="strength"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber
                name="strength"
                onChange={this.handleChange.bind(this)}
                defaultValue={this.state.strength}
              />
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ CharacterReducer }) => {
  console.log("mapStateToProps ", CharacterReducer);

  const { Hero, loading } = CharacterReducer;
  return { Hero, loading };
};
const mapDispachToProps = {
  OneHeroLoaded,
};
export default WithApiService()(
  connect(mapStateToProps, mapDispachToProps)(UpdateCharacter)
);

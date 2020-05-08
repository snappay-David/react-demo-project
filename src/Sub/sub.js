import React from 'react';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './sub.css';
import { Form, Input, Button} from 'antd';

export class Sub extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            name: '',
            phonenumber: ''
        }
    }

    send() {
        var data = {
           "username": this.state.name,
           "password": this.state.phonenumber
        }
        fetch("null",{
           method: "POST",
           headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
           body:  JSON.stringify(data)
        })

   }

   updateName(evt) {
        this.setState({name: evt.target.value});
   }

   updatePhone(evt) {
        this.setState({phonenumber: evt.target.value});
   }

   jump(e) {
       window.location.href = '/'
   }


    render() {
        
      const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
      const onFinish = values => {
        console.log('Success:', values);
      };
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      return (
        <body id='container1'>
        <div className="container2">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input value={this.state.name} onChange={evt => this.updateName(evt)}/>
          </Form.Item>

          <Form.Item
            label="PhoneNumber"
            name="phonenumber"
            rules={[
              {
                required: true,
                message: 'Please input your phonenumber!',
              },
            ]}
          >
            <Input.Password value={this.state.phonenumber} onChange={evt => this.updatePhone(evt)}/>
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={this.send.bind(this)}>
              Submit
            </Button>

          </Form.Item>

          <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="back" onClick={this.jump.bind(this)}>
                Go Back
              </Button>
          </Form.Item>
        </Form>
        </div>
        </body>
        )
    };

}

export default Sub

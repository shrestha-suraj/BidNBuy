import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'

const LoginSignup = () => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    }
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };


    const submitForm = (values: any) => {
        console.log(values)
    }

    return (
        <Form name="loginForm"
            {...layout}
            onFinish={submitForm}
            initialValues={{ remember: true }}
            style={{border:"solid 1px",padding:50,boxShadow:"0 0 10px 0px black"}}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginSignup
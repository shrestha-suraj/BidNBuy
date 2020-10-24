import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import './login.styles.scss'

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
            className="login-form"
            style={{padding:50}}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input className="input" placeholder="Enter your email"/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password className="input"/>
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
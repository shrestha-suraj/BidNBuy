import React from 'react'
import LoginSignup from '../../components/login/login.component'
import { Image } from 'antd'
import './loginSignup.styles.scss'

const LoginSignupPage = () => {
    return (
        <div className="login-signup-page">
            <Image src="/assets/logo.png"
                width={300}
                style={{margin:"50px 0px"}}
            />
            <LoginSignup />
        </div>
    )
}

export default LoginSignupPage
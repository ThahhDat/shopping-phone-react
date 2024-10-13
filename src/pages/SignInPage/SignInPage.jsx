import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight, WrapperSignInPage } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imagelogo from "../../assets/images/logo-sign-in.png";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

function SignInPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const tonggleShowPassword = () => {
      setShowPassword(!showPassword);
    }


  
    return (
        <WrapperSignInPage>
            <div style={{ width: '800px', height: '500px', borderRadius: '10px', background: '#fff', display: 'flex', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
                <WrapperContainerLeft>
                    <h1 style={{ marginBottom: '20px', color: '#0d5cb6' }}>Xin chào!</h1>
                    <p style={{ color: '#555', marginBottom: '24px' }}>Đăng nhập vào tài khoản của bạn</p>
                    <InputForm style={{ marginBottom: '16px' }} placeholder="datdat210704@gmai.com" />
                    <div style={{ position: 'relative', marginBottom: '16px' }}>
                        <InputForm
                            type={showPassword ? "text" : "password"}
                            placeholder="password"
                        />
                        <span
                            onClick={tonggleShowPassword}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                                color: '#555',
                            }}
                        >
                            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                        </span>
                    </div>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: "#ff424e",
                            height: "48px",
                            width: "100%",
                            border: "none",
                            borderRadius: "8px",
                            marginTop: '20px',
                            boxShadow: '0 4px 8px rgba(255, 66, 78, 0.3)',
                        }}
                        textButton={"Đăng nhập"}
                        styleTextButton={{
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: 700,
                        }}
                    />
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
                        <p>Chưa có tài khoản? <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
                    </div>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image src={imagelogo} preview={false} alt="image-logo" style={{ height: '180px', width: '180px', borderRadius: '8px' }} />
                    <h4 style={{ color: '#0d5cb6' }}>Mua sắm tại Tiki</h4>
                </WrapperContainerRight>
            </div>
        </WrapperSignInPage>
    );
}

export default SignInPage;

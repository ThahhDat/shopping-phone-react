import React from "react";
import {
    WrapperContainerLeft,
    WrapperContainerRight,
    WrapperTextLight,
    WrapperSignInPage,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageBackground from "../../assets/images/background.jpg";
import imagelogo from "../../assets/images/logo-sign-in.jpg";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

function SignUpPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <WrapperSignInPage
            style={{ backgroundImage: `url(${imageBackground})` }}
        >
            <div
                style={{
                    width: "800px",
                    height: "500px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }}
            >
                <WrapperContainerLeft>
                    <h1 style={{ marginBottom: "20px", color: "#0d92ff" }}>
                        Xin chào!
                    </h1>
                    <p style={{ color: "#ccc", marginBottom: "24px" }}>
                        Đăng nhập vào tài khoản của bạn
                    </p>
                    <InputForm
                        style={{ marginBottom: "16px" }}
                        placeholder="datdat210704@gmai.com"
                    />
                    <div style={{ position: "relative", marginBottom: "20px" }}>
                        <InputForm
                            type={showPassword ? "text" : "password"}
                            placeholder="Mật khẩu"
                        />
                        <span
                            onClick={toggleShowPassword}
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                color: "#ccc",
                            }}
                        >
                            {showPassword ? (
                                <EyeInvisibleOutlined />
                            ) : (
                                <EyeOutlined />
                            )}
                        </span>
                    </div>
                    <div style={{ position: "relative" }}>
                        <InputForm
                            type={showPassword ? "text" : "password"}
                            placeholder="Xác nhận mật khẩu"
                        />
                        <span
                            onClick={toggleShowPassword}
                            style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                cursor: "pointer",
                                color: "#ccc",
                            }}
                        >
                            {showPassword ? (
                                <EyeInvisibleOutlined />
                            ) : (
                                <EyeOutlined />
                            )}
                        </span>
                    </div>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: "#0d92ff",
                            height: "48px",
                            width: "100%",
                            border: "none",
                            borderRadius: "8px",
                            marginTop: "20px",
                            boxShadow: "0 4px 8px rgba(13, 146, 255, 0.3)",
                        }}
                        textButton={"Đăng nhập"}
                        styleTextButton={{
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: 700,
                        }}
                    />
                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                        <p>
                            Bạn đã có tài khoản?{" "}
                            <WrapperTextLight>Đăng nhập</WrapperTextLight>
                        </p>
                    </div>
                </WrapperContainerLeft>
                <WrapperContainerRight>
                    <Image
                        src={imagelogo}
                        preview={false}
                        alt="image-logo"
                        style={{
                            height: "180px",
                            width: "180px",
                            borderRadius: "8px",
                        }}
                    />
                    <h4 style={{ color: "#0d92ff" }}></h4>
                </WrapperContainerRight>
            </div>
        </WrapperSignInPage>
    );
}

export default SignUpPage;

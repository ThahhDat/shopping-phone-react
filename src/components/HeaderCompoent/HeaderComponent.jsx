import React from "react";
import { Badge, Col } from "antd";
import {
    WrapperHeader,
    WrapperTextHeader,
    WrapperHeaderAccount,
    WrapperTextHeaderSmall,
    UserIconWrapper,
    ShoppingCartWrapper,
} from "./style";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const HeaderComponent = () => {
    const handleLogoClick = () => {
        window.location.reload(); // Load lại trang khi nhấn vào logo
    };

    return (
        <div style={{width:'100%',background:'rgb(255,255,255)',display:'flex', justifyContent:'center'}}>
            <WrapperHeader >
                <Col span={5}>
                    <WrapperTextHeader  onClick={handleLogoClick}>
                        LaBuS
                    </WrapperTextHeader>
                </Col>
                <Col span={13}>
                    <ButtonInputSearch
                        size="large"
                        bordered={false}
                        placeholder="input search text"
                        textButton="Tìm kiếm"
                    />
                </Col>
                <Col span={6} style={{ display: "flex", gap: 'px' ,alignItems:'center' }}>
                    <WrapperHeaderAccount>
                        <UserIconWrapper>
                            <UserOutlined />
                        </UserIconWrapper>
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng kí</WrapperTextHeaderSmall>
                            <div style={{ display: "flex", marginTop: "5px" }}>
                                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>

                    <ShoppingCartWrapper>
                        <Badge count={4} size="small">
                        <ShoppingCartOutlined style={{fontSize:'30px',color:'#007bff'}}/>
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </ShoppingCartWrapper>
                </Col>
            </WrapperHeader>
        </div>
    );
};

export default HeaderComponent;

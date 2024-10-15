import { Col, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/iphone15tiki.webp";
import imageProductSmall from "../../assets/images/iphone15small.webp";
import {
    WrapperAddressProduct,
    WrapperBtnQualityProduct,
    WrapperInputNumber,
    WrapperPriceProduct,
    WrapperPriceTextProduct,
    WrapperQualityProduct,
    WrapperStyleButtonSell,
    WrapperStyleColImage,
    WrapperStyleImage,
    WrapperStyleImageSmall,
    WrapperStyleNameProduct,
    WrapperStyleProduct,
    WrapperStyleProductSL,
    WrapperStyleRowImageSmall,
    WrapperStyleTextSell,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ProductDetailsComponent = () => {
    const onChange = (value) => {};
    return (
        <Row style={{ padding: "16px", background: "#fff" }}>
            <Col
                span={10}
                style={{
                    borderRight: "1px solid #e5e5e5",
                    paddingRight: "20px",
                }}
            >
                <WrapperStyleImage
                    src={imageProduct}
                    alt="image product"
                    preview={false}
                />
                <WrapperStyleRowImageSmall>
                    {[...Array(6)].map((_, index) => (
                        <WrapperStyleColImage key={index}>
                            <WrapperStyleImageSmall
                                src={imageProductSmall}
                                alt="image product"
                                preview={false}
                            />
                        </WrapperStyleColImage>
                    ))}
                    {/* <WrapperStylerColImage span={4}>
                        <WrapperStylerImageSmall src={imageProductSmall} alt="image product" preview={false} />
                    </WrapperStylerColImage>
                    <WrapperStylerColImage span={4}>
                        <WrapperStylerImageSmall src={imageProductSmall} alt="image product" preview={false} />
                    </WrapperStylerColImage>
                    <WrapperStylerColImage span={4}>
                        <WrapperStylerImageSmall src={imageProductSmall} alt="image product" preview={false} />
                    </WrapperStylerColImage>
                    <WrapperStylerColImage span={4}>
                        <WrapperStylerImageSmall src={imageProductSmall} alt="image product" preview={false} />
                    </WrapperStylerColImage>
                    <WrapperStylerColImage span={4}>
                        <WrapperStylerImageSmall src={imageProductSmall} alt="image product" preview={false} />
                    </WrapperStylerColImage>
                    <WrapperStylerColImage span={4}>
                        <WrapperStylerImageSmall src={imageProductSmall} alt="image product" preview={false} />
                    </WrapperStylerColImage>
                    */}
                </WrapperStyleRowImageSmall>
            </Col>
            <Col span={14} style={{ paddingLeft: "20px" }}>
                <WrapperStyleProduct>
                    <WrapperStyleNameProduct>
                        Apple iPhone 16 Pro Max{" "}
                    </WrapperStyleNameProduct>
                    <div>
                        <StarFilled
                            style={{
                                color: " rgb(255, 196, 0)",
                                fontSize: "12px",
                            }}
                        />
                        <StarFilled
                            style={{
                                color: " rgb(255, 196, 0)",
                                fontSize: "12px",
                            }}
                        />
                        <StarFilled
                            style={{
                                color: " rgb(255, 196, 0)",
                                fontSize: "12px",
                            }}
                        />
                        <WrapperStyleTextSell>
                            {" "}
                            | Da ban 2+{" "}
                        </WrapperStyleTextSell>
                    </div>
                    <WrapperPriceProduct>
                        <WrapperPriceTextProduct>
                            10.000.000 Vnd
                        </WrapperPriceTextProduct>
                    </WrapperPriceProduct>
                    <WrapperAddressProduct>
                        <span>Giao đến: </span>
                        <span className="address">
                            Q. 1, P. Bến Nghé, Hồ Chí Minh
                        </span>
                        <span className="change-address">Đổi</span>
                    </WrapperAddressProduct>
                    <WrapperStyleProductSL>
                        <div style={{ borderBottom: "10px" }}>Số Lượng :</div>
                        <WrapperQualityProduct>
                            <WrapperBtnQualityProduct>
                                <MinusOutlined
                                    style={{
                                        color: "rgb(36,36,36)",
                                        fontSize: "16px",
                                    }}
                                />
                            </WrapperBtnQualityProduct>
                            <WrapperInputNumber
                                defaultValue={3}
                                onChange={onChange}
                            />
                            <WrapperBtnQualityProduct>
                                <PlusOutlined
                                    style={{
                                        color: "rgb(36,36,36)",
                                        fontSize: "16px",
                                    }}
                                />
                            </WrapperBtnQualityProduct>
                        </WrapperQualityProduct>
                    </WrapperStyleProductSL>
                    <WrapperStyleButtonSell>
                        <ButtonComponent
                            bordered={false}
                            size={40}
                            styleButton={{
                                background: "rgb(255, 66, 78)",
                                height: "48px",
                                width: "220px",
                                border: "none",
                                borderRadius: "4px",
                            }}
                            textButton={"Mua ngay"}
                            styleTextButton={{
                                color: "#fff",
                                fontSize: "15px",
                                fontWeight: 700,
                            }}
                        ></ButtonComponent>
                        <ButtonComponent
                            bordered={false}
                            size={40}
                            styleButton={{
                                background: "#fff",
                                height: "48px",
                                width: "220px",
                                border: "1px solid rgb(13,92,182)",
                                borderRadius: "4px",
                            }}
                            textButton={"Mua tra sau"}
                            styleTextButton={{
                                color: "rgb(13,92,182",
                                fontSize: "15px",
                            }}
                        ></ButtonComponent>
                    </WrapperStyleButtonSell>
                </WrapperStyleProduct>
            </Col>
        </Row>
    );
};

export default ProductDetailsComponent;

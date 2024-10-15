import { Col, Image, InputNumber, Row } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    height: 54px !important;
    width: 54px !important;
    border: 1px solid rgb(235, 235, 240);
    border-radius: 4px;
`;
export const WrapperStyleImage = styled(Image)`
    border: 1px solid rgb(235, 235, 240);
    border-radius: 4px;
`;

export const WrapperStyleColImage = styled(Col)`
    flex-basis: unset;
    display: flex;
`;

export const WrapperStyleRowImageSmall = styled(Row)`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`;

export const WrapperStyleNameProduct = styled.h1`
    color: rgb(39, 39, 42);
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    word-break: break-word;
    white-space: break-spaces;
`;

export const WrapperStyleTextSell = styled.span`
    font-size: 14px;
    line-height: 24px;
    color: rgb(120, 120, 120);
`;

export const WrapperPriceProduct = styled.div`
    color: rgb(255, 66, 78);
    border-radius: 4px;
`;

export const WrapperPriceTextProduct = styled.h1`
    font-size: 24px;
    font-weight: 600;
    line-height: 150%;
    padding: 10px;
    margin-top: 10px;
`;

export const WrapperAddressProduct = styled.div`
    span.address {
        text-decoration: underline;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    ,
    span.change-address {
        color: #007bff;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        margin-left: 5px;
    }
`;

export const WrapperQualityProduct = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    width: 100px;
    margin-top: 10px;
`;
export const WrapperBtnQualityProduct = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
        border-color: #bfbfbf;
    }
    &:active {
        background-color: #e0e0e0;
    }
`;
export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number-outlined {
        width: 50px;
        border-radius: 4px;
        min-width: 50px;
        height: 32px;
        display: flex;
        align-items: center;
    }
`;

export const WrapperStyleButtonSell = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
`;

export const WrapperStyleProductSL = styled.div`
    margin: 10px 0px 20px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 0;
`;

export const WrapperStyleProduct = styled.div`
    padding: 16px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
`;

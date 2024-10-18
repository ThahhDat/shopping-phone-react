import styled from "styled-components";
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
    padding: 10px 0px;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;

    @media (max-width: 768px) {
        padding: 10px 20px; /* Giảm padding trên thiết bị nhỏ */
        width: 100%; /* Chiều rộng đầy đủ trên màn hình nhỏ */
        gap: 8px; /* Giảm khoảng cách giữa các phần tử */
    }
`;

export const WrapperTextHeader = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #808089;
    cursor: pointer;
    text-align: left;
    margin-left: auto;
    align-items: center;
    white-space: nowrap; /* Ngăn chữ bị rớt dòng */

    @media (max-width: 768px) {
        font-size: 24px; /* Giảm kích thước chữ trên màn hình nhỏ */
    }
`;

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #4096ff;
    gap: 10px;

    @media (max-width: 768px) {
        gap: 5px; /* Giảm khoảng cách giữa các phần tử */
    }
`;

export const WrapperTextHeaderSmall = styled.div`
    font-size: 12px;
    color: #808089;
    white-space: nowrap; /* Ngăn chữ bị rớt dòng */

    @media (max-width: 768px) {
        font-size: 10px; /* Giảm kích thước chữ trên màn hình nhỏ */
    }
`;

export const UserIconWrapper = styled.div`
    font-size: 30px;
    color: #007bff;

    @media (max-width: 768px) {
        font-size: 24px; /* Giảm kích thước biểu tượng trên màn hình nhỏ */
    }
`;

export const ShoppingCartWrapper = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 30px;
    color: #007bff;
    gap: 5px;
    @media (max-width: 768px) {
        font-size: 24px; /* Giảm kích thước biểu tượng giỏ hàng */
        gap: 5px; /* Giảm khoảng cách giữa các phần tử */
    }
`;

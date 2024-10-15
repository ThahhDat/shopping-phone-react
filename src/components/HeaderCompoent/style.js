import styled from "styled-components";
import { Row } from "antd";

// Phần bọc toàn bộ header
export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
`;


// Logo của header
export const WrapperTextHeader = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #808089;
    cursor: pointer;
    text-align: left;
    align-items: center;
    white-space: nowrap; /* Ngăn chữ bị rớt dòng */
`;

// Phần tài khoản trong header
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #4096ff;
    gap: 10px;
`;

// Văn bản nhỏ trong header
export const WrapperTextHeaderSmall = styled.div`
    font-size: 12px;
    color: #808089;
    white-space: nowrap; /* Ngăn chữ bị rớt dòng */
`;

// Kiểu cho biểu tượng người dùng
export const UserIconWrapper = styled.div`
    font-size: 30px;
    color: #007bff;
`;

// Kiểu cho biểu tượng giỏ hàng
export const ShoppingCartWrapper = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 30px;
    color: #007bff;
    gap: 10px;
`;

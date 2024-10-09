import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import {
    SearchWrapper,
    SearchIconWrapper,
    StyledInput,
    StyledButton,
    Divider,
} from "./style"; // Đảm bảo đường dẫn đúng

const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton } = props;

    return (
        <SearchWrapper>
            <SearchIconWrapper>
                <SearchOutlined />
            </SearchIconWrapper>
            <StyledInput
                size={size}
                placeholder={placeholder}
                bordered={false}
            />
            <StyledButton size={size}>
                <Divider />
                {textButton}
            </StyledButton>
        </SearchWrapper>
    );
};

export default ButtonInputSearch;

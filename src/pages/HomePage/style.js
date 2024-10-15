import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    height: 44px;
`;

export const WrapperButtonComponent = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background-color: rgba(0, 96, 255, 0.12);
        span {
            color: #fff;
        }
    }
    width: 100%;
    text-align: center;
`

export const WrapperProducts= styled.div` 
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 20px;
`

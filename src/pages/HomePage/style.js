import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    border-bottom: 1px solid red;
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
`

export const WrapperProducts= styled.div` 
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 30px;
    justify-content: space-between;
`

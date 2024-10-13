import Card from "antd/es/card/Card";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    }
`
export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color:rgb(56,56,61);
`

export const WrapperReportText = styled.div`
    font-size: 11px;
    color : rgb(128,128,137);
    display: flex;
    align-items: center;
    margin: 6px 0px 0px;
`

export const WrapperPrice = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: rgb(255,66,78);
    
`

export const WrapperDiscount = styled.span`
  font-size: 12px;    
  font-weight: 400;
  color: rgb(255,66,78);
`

export const WrapperStyleTextSell = styled.span`
    font-size: 14px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`
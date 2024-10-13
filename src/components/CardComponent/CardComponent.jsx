
import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscount, WrapperPrice, WrapperReportText, WrapperStyleTextSell } from "./style";
import { StarFilled } from "@ant-design/icons";
function CardComponent() {
    return (
        <WrapperCardStyle
            hoverable
            // headStyle={{width:'200px',height:'200px'}}
            style={{ width: 200 }}
            BodyStyle={{ padding: "10px" }}
            cover={
                <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    // style={{ width: "200px", height: "200px" }}
                />
            }
        >
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight:'5px'}}>
                    <span>4.5</span>{" "}
                    <StarFilled style={{ color: 'rgb(253,216,54)', fontSize: "12px" }} />
                </span>

                <WrapperStyleTextSell >| Da Ban 1000+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPrice>
                1.000.000VND
                <WrapperDiscount>-5%</WrapperDiscount>
            </WrapperPrice>
        </WrapperCardStyle>
    );
}

export default CardComponent;

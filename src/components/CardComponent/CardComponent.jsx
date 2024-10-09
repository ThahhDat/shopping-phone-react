
import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscount, WrapperPrice, WrapperReportText } from "./style";
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
                    <StarFilled style={{ color: "yellow", fontSize: "12px" }} />
                </span>

                <span> | Da Ban 1000+</span>
            </WrapperReportText>
            <WrapperPrice>
                1.000.000VND
                <WrapperDiscount>-5%</WrapperDiscount>
            </WrapperPrice>
        </WrapperCardStyle>
    );
}

export default CardComponent;

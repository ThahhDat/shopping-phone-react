import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
    WrapperButtonComponent,
    WrapperProducts,
    WrapperTypeProduct,
} from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
const HomePage = () => {
    const arr = ["TV", "Tu Lanh", "LapTop"];
    return (
        <>
            <div style={{ padding: "0 120px", borderTop: "1px solid #e5e5e5" }}>
                <WrapperTypeProduct>
                    {arr.map((item) => (
                        <TypeProduct name={item} key={item} />
                    ))}
                </WrapperTypeProduct>
            </div>

            <div
                id="container"
                style={{
                    backgroundColor: "#F5F5FA",
                    padding: "0 120px",
                    height: "2000px",
                    width: "100%",
                }}
            >
                <SliderComponent arrImage={[slider1, slider2, slider3]} />
                <WrapperProducts>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </WrapperProducts>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                    }}
                >
                    <WrapperButtonComponent
                        textButton="Xem thêm"
                        type="outline"
                        styleButton={{
                            border: "1px solid rgb(10, 104, 255)",
                            color: "rgb(10, 104, 255)",
                            width: "240px",
                            height: "38px",
                            borderRadius: "4px",
                        }}
                        styleTextButton={{ fontWeight: 500 }}
                    />
                </div>
            </div>
        </>
    );
};

export default HomePage;

import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultCompoent from "./components/DefaultCompoent/DefaultCompoent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function App() {
    // useEffect(() => {
    //   fetchApi()
    // }, [] )
    const fetchApi = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_API_URL}/product/get-all`
            );
            console.log("res", res.data);
        } catch (error) {
            console.error("API Error: ", error.response || error.message);
        }
    };
    const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });
    console.log("query", query);

    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.page;
                        const Layout = route.isShowHeader
                            ? DefaultCompoent
                            : Fragment;

                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                        {/* Hiển thị FooterComponent nếu isShowHeader là true */}
                                        {route.isShowHeader && (
                                            <FooterComponent />
                                        )}
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;

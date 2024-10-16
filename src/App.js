import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultCompoent from './components/DefaultCompoent/DefaultCompoent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultCompoent : Fragment;

            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                    {/* Hiển thị FooterComponent nếu isShowHeader là true */}
                    {route.isShowHeader && <FooterComponent />}
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

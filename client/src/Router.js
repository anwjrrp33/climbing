import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/home";
import CragList from "pages/crag/List";
import CragDetail from "pages/crag/Detail";
import MateList from "pages/mate/List";
import MateDetail from "pages/mate/Detail";
import NotFound from "pages/notfound";
import Header from "components/Layout/header";
// import { Layout } from "components/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/crag" element={<CragList />} />
        <Route path="/crag/:cragId" element={<CragDetail />} />
        <Route path="/mate" element={<MateList />} />
        <Route path="/mate/:mateId" element={<MateDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

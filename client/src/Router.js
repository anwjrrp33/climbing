import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/home';
import CragList from 'pages/crag/List';
import CragDetail from 'pages/crag/Detail';
import MateList from 'pages/mate/List';
import MateDetail from 'pages/mate/Detail';
import MateCreate from 'pages/mate/Create';
import NotFound from 'pages/notfound';
import { Layout } from 'components/layout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/crag' element={<CragList />} />
          <Route path='/crag/:cragId' element={<CragDetail />} />
          <Route path='/mate' element={<MateList />} />
          <Route path='/mate/:mateId' element={<MateDetail />} />
          <Route path='/mate/create' element={<MateCreate />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

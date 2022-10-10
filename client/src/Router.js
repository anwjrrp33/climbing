import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/main';
import CragList from 'pages/cragList/List';
import Community from 'pages/community';
import CragDetail from 'pages/cragList/Detail';
import NotFound from 'pages/notfound';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/crag' element={<CragList />} />
        <Route path='/crag/:cragId' element={<CragDetail />} />
        <Route path='/community' element={<Community />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

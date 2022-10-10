import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/main';
import CragList from 'pages/cragList/List';
import Community from 'pages/community';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/crag-list' element={<CragList />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from 'components/page/community';
import CragList from 'components/page/cragList';
import Main from 'components/page/main';

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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'components/page/main';
import CragList from 'components/page/cragList';
import Community from 'components/page/community';

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

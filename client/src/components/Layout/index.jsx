import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-slate-100'>{children}</div>
    </>
  );
};

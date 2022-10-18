import Header from "./header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-200">{children}</div>
    </>
  );
};

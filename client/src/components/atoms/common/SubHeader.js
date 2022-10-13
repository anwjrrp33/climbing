export const SubHeader = ({ title, description }) => {
  return (
    <header className='h-10 bg-slate-500'>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export const SubHeader = ({ title, description }) => {
  return (
    <header className='flex flex-col justify-center h-24 px-4 text-white bg-slate-500'>
      <h1 className='text-lg'>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

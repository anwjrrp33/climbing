import { ReactComponent as DeleteIcon } from 'assets/svg/DeleteIcon.svg';

export const Tag = ({ title }) => {
  return (
    <div
      name='tag'
      className='w-fit h-8 px-2 py-1 text-sm flex justify-center items-center bg-blue-400 rounded-md hover:ring-2 hover:ring-blue-300 cursor-pointer'
    >
      {title}
      <DeleteIcon />
    </div>
  );
};

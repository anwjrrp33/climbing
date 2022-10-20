import { useNavigate } from 'react-router-dom';

export const Card = ({ cragInfo }) => {
  const navigate = useNavigate();

  const { id, title, address, price } = cragInfo;

  return (
    <div
      onClick={() => {
        console.log('카드 클릭!');
        navigate(`/crag/${id}`, { state: { id, cragInfo } });
      }}
      className='w-64 h-80 px-6 py-12 bg-white rounded-2xl overflow-hidden drop-shadow-lg hover: cursor-pointer'
    >
      <div className='text-xl mb-7 font-bold text-slate-700'>{title}</div>
      <div className='text-sm mb-4 font-bold text-slate-600'>{address}</div>
      <div className='text-sm text-slate-600'>참가비용: {price}</div>
    </div>
  );
};

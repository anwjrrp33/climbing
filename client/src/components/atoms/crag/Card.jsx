// 레퍼런스: hola 스터디

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
      className='w-60 h-60 bg-yellow-100 rounded-md overflow-hidden drop-shadow-lg hover: cursor-pointer'
    >
      <div className='mt-2 mx-3'>
        <div>
          <div className='text-xs text-slate-600 uppercase font-bold tracking-wider'>
            {address}
          </div>
          <div className='font-bold text-slate-700 leading-snug'>{title}</div>
          <div className='mt-2 text-sm text-slate-600'>{price}</div>
        </div>
      </div>
    </div>
  );
};

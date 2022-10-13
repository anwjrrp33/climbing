// 레퍼런스: 넷플릭스 상세, 인프런 스터디, Okky 커뮤니티

import { useNavigate } from 'react-router-dom';

export const Card = ({ mateInfo }) => {
  const navigate = useNavigate();

  const {
    id,
    title,
    content,
    region,
    username,
    isFinished,
    comments,
    createdAt,
  } = mateInfo;

  return (
    <div
      onClick={() => {
        console.log('메이트 클릭!');
        navigate(`/mate/${id}`, { state: { id, mateInfo } });
      }}
      className='w-60 h-60 bg-yellow-100 rounded-md overflow-hidden drop-shadow-lg hover: cursor-pointer'
    >
      <div className='mt-2 mx-3'>
        <div>
          <div className='text-xs text-slate-600 uppercase font-bold tracking-wider'>
            {isFinished}
          </div>
          <div className='font-bold text-slate-700 leading-snug'>{title}</div>
          <div className='mt-2 text-sm text-slate-600'>{content}</div>
          <div className='mt-2 text-sm text-slate-600'>{region}</div>
          <div className='mt-2 text-sm text-slate-600'>{createdAt}</div>
        </div>
      </div>
    </div>
  );
};

// 레퍼런스: 넷플릭스 상세, 인프런 스터디, Okky 커뮤니티

import { useNavigate } from 'react-router-dom';
import { timeForToday } from 'utils';

export const Card = ({ mateInfo }) => {
  const navigate = useNavigate();

  const {
    id,
    region,
    title,
    content,
    username,
    createdAt,
    updatedAt,
    isFinished,
    comments,
  } = mateInfo;

  return (
    <div
      onClick={() => {
        console.log('메이트 클릭!');
        navigate(`/mate/${id}`, { state: { id, mateInfo } });
      }}
      className='h-50 py-4 mb-8 border-y-2 border-gray-300 hover: cursor-pointer'
    >
      <div className='mt-2 mx-3'>
        <div className='w-fit text-xs text-center text-white px-2 py-1 mb-2 border-2 border-sky-500 bg-blue-500 rounded-md font-bold tracking-wider'>
          {isFinished}
        </div>
        <div className='font-bold text-slate-700 leading-snug'>{title}</div>
        <div className='mt-2 text-sm text-slate-600'>{content}</div>
        <div className='w-fit px-2 py-1 mt-2 text-sm rounded-md text-slate-600 border-2 border-teal-400'>
          {region}
        </div>

        <div className='flex justify-between'>
          <div className='flex items-center'>
            <div className='mt-2 text-sm text-slate-600'>{username}</div>
            <span>&nbsp;·&nbsp;</span>
            <div className='mt-2 text-sm text-slate-600'>
              {timeForToday(updatedAt)}
            </div>
          </div>

          <div className='text-sm text-slate-500'>댓글 {comments.length}개</div>
        </div>
      </div>
    </div>
  );
};

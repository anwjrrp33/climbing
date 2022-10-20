// 레퍼런스: 당근마켓 동네생활 (웹뷰)

import { Comment } from '../common/Comment';
import { timeForToday } from 'utils/hooks/formatDate';

export const Post = ({ post }) => {
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
  } = post;

  return (
    <div className='px-9 py-16'>
      <div name='status' className='flex justify-between mb-1'>
        <div className='w-fit text-xs text-center text-white px-2 py-1 mb-2 border-2 border-sky-500 bg-blue-500 rounded-md font-bold tracking-wider'>
          {isFinished}
        </div>
        <div>{timeForToday(updatedAt)}</div>
      </div>

      <div name='header' className='flex items-center space-x-3 mb-12'>
        <div className='mt-2 text-sm font-bold text-slate-600'>{username}</div>
        <div className='w-fit px-2 py-1 mt-2 text-sm rounded-md text-slate-600 border-2 border-teal-400'>
          {region}
        </div>
      </div>

      <div name='post' className='mb-16'>
        <div className='font-bold text-slate-700 leading-snug'>{title}</div>
        <div className='mt-2 text-sm text-slate-600'>{content}</div>
      </div>

      <div name='divider' className='h-1 bg-slate-300 mb-8'></div>

      <div name='comments'>
        <div name='count' className='mb-4'>
          총 <span className='font-semibold'>{comments.length}</span>개의 댓글
        </div>
        {comments.map((comment, id) => (
          <Comment key={id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

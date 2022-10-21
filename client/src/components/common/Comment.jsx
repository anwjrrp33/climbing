import axios from 'axios';
import { useEffect, useState } from 'react';
import { timeForToday } from 'utils/hooks/formatDate';
import { mateCommentList } from 'utils/mock/mateCommentList';

export const Comment = ({ comment }) => {
  const { id, content, registerDate, modifyDate } =
    mateCommentList.mateComments.rows[0];
  const [user, setUser] = useState({
    profile: '',
    name: '',
  });

  useEffect(() => {
    axios
      .get('https://api.github.com/users/Yena-Yun')
      .then(({ status, data }) => {
        if (status === 200) {
          const { avatar_url, name } = data;
          setUser({
            profile: avatar_url,
            name,
          });
        }
      });
  }, []);

  const { profile, name } = user;

  return (
    <div className='flex px-4 py-4 mb-3 bg-white rounded-xl'>
      <div className='w-10 mr-3'>
        <img src={profile} className='rounded-full' alt='user' />
      </div>
      <div className='flex flex-col'>
        <div className='font-semibold mb-2'>{name}</div>
        <div className='mb-1'>{content}</div>
        <div className='text-sm text-sky-600'>
          {modifyDate ? timeForToday(modifyDate) : timeForToday(registerDate)}
        </div>
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';
import { Button, Tabs } from 'flowbite-react';

export const Action = () => {
  return (
    <div name='action' className='flex justify-between'>
      <Tabs.Group aria-label='category'>
        <Tabs.Item active={true} title='최신순'>
          최신순 children
        </Tabs.Item>
        <Tabs.Item title='댓글많은순'>댓글순 children</Tabs.Item>
      </Tabs.Group>

      <div name='create' className='w-50'>
        <Button size='lg'>
          <Link to='/mate/create'>글쓰기</Link>
        </Button>
      </div>
    </div>
  );
};

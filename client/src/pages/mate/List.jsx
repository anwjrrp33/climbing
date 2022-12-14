/* eslint-disable react/style-prop-object */
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { SubHeader } from 'components/common/SubHeader';
import { Filter } from 'components/mate/Filter';
import { Search } from 'components/mate/Search';
import { Card } from 'components/mate/Card';
import { mateList } from 'utils/mock/mateList';

const MateListPage = () => {
  return (
    <>
      <SubHeader
        title='함께 트라이캐치할 클루를 모집해보세요'
        description='지역별 검색 / 댓글로 지원'
      />

      <section className='p-9'>
        <Search />

        <div className='flex justify-between'>
          <Filter />
          <div name='create' className='w-24'>
            <Button gradientDuoTone='cyanToBlue' size='lg'>
              <Link to='/mate/create'>글쓰기</Link>
            </Button>
          </div>
        </div>
        <div name='matelist'>
          {mateList.success &&
            mateList.data.map((mate) => <Card key={mate.id} mateInfo={mate} />)}
        </div>
      </section>
    </>
  );
};

export default MateListPage;

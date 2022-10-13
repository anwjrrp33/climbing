/* eslint-disable react/style-prop-object */
import { SubHeader } from 'components/atoms/common/SubHeader';
import { Tab } from 'components/atoms/common/Tab';
import { Search } from 'components/atoms/common/Search';
import { Action } from 'components/atoms/common/Action';
import { Card } from 'components/atoms/mate/Card';
import { mateList } from 'utils/mock/mateList';

export const MateList = () => {
  return (
    <>
      <SubHeader
        title='트라이캐치 함께 할 클루를 모집해보세요'
        description='지역별 검색 / 댓글로 지원'
      />

      <section className='p-8'>
        <Tab />
        <Search />
        <Action />

        {mateList.success &&
          mateList.data.map((mate) => <Card key={mate.id} mateInfo={mate} />)}
      </section>
    </>
  );
};

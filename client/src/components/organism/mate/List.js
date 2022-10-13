/* eslint-disable react/style-prop-object */
import { Tabs } from 'flowbite-react';
import { SubHeader } from 'components/atoms/common/SubHeader';
import { Search } from 'components/atoms/common/Search';
import { Action } from 'components/atoms/common/Action';
import { Card } from 'components/atoms/mate/Card';
import { tabList } from 'utils/constant';

export const MateList = () => {
  let cardList; // 메이트 리스트 글 정보

  return (
    <>
      <SubHeader
        title='트라이캐치 함께 할 클루를 모집해보세요'
        description='지역별 검색 / 댓글로 지원'
      />

      <section className='p-8'>
        <div name='status'>
          <Tabs.Group aria-label='Tabs with underline' style='underline'>
            {tabList?.map((tab, id) => (
              <Tabs.Item key={id} title={tab}></Tabs.Item>
            ))}
          </Tabs.Group>
        </div>

        <div name='list'>
          <Search />
          <Action />
          <div name='card'>
            {cardList?.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

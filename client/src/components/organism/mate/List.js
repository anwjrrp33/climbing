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
        title='트라이캐치 함께 할 클루 모집!'
        description='지역별로 검색하고 댓글로 지원하세요'
      />

      <section>
        <div name='status' className='bg-slate-300'>
          <Tabs.Group aria-label='Tabs with underline' style='underline'>
            {tabList?.map((tab, id) => (
              <Tabs.Item key={id} title={tab}></Tabs.Item>
            ))}
          </Tabs.Group>
        </div>

        <div name='post-list'>
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

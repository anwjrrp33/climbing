import { Tabs } from 'flowbite-react';
import { tabList } from 'utils/constant';

export const Tab = () => {
  return (
    <div name='status'>
      <Tabs.Group aria-label='Tabs with underline' style='underline'>
        {tabList?.map((tab, id) => (
          <Tabs.Item key={id} title={tab}></Tabs.Item>
        ))}
      </Tabs.Group>
    </div>
  );
};

/* eslint-disable react/style-prop-object */
import { Tabs } from 'flowbite-react';
import { TAB_LIST } from 'utils/constant';

export const Filter = () => {
  return (
    <div name='status'>
      <Tabs.Group aria-label='Tabs with underline' style='underline'>
        {TAB_LIST?.map((tab, id) => (
          <Tabs.Item key={id} title={tab}></Tabs.Item>
        ))}
      </Tabs.Group>
    </div>
  );
};

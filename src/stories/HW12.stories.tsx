import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../p2-homeworks/h10/bll/store';
import HW12 from '../p2-homeworks/h12/HW12';


export default {
  title: 'Example/HW12',
  component: HW12,
} as Meta;

const Template: Story = (args: any) => <Provider store={store}>
  <HW12 />
</Provider>;

export const Base = Template.bind({});

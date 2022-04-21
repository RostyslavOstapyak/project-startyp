import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseTemplate from './BaseTemplate';

export default {
  text: 'This is sample text',
};

const Template = (args) => (
  // this one is waiting for typescript interface, and we don't have one, so it trows error
  // @ts-ignore
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});

Base.args = {
  textProp: 'SampleText',
};

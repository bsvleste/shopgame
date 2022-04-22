import { Story, Meta } from '@storybook/react/types-6-0';
import Highlight, { HighligthProps } from '.';
import item from './mock';
export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta;
export const Default: Story<HighligthProps> = (args) => <Highlight {...args} />;
export const WithFloatImage: Story<HighligthProps> = (args) => (
  <Highlight {...args} />
);
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
};

import { Story, Meta } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it´s back',
    subtitle: 'Come see Jonh´s new adventiures',
    buttonLabel: 'Buy now',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLink: '/rdr2'
  }
} as Meta;
export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />;
export const WithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
};

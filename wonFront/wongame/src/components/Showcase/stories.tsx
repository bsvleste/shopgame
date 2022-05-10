import { Story, Meta } from '@storybook/react/types-6-0';

import Showcase, { ShowcaseProps } from '.';
import highlightMock from 'components/Highlight/mock';
import gamesMock from 'components/GameCardSlider/mock';
export default {
  title: 'Showcase',
  component: Showcase,
  decoration: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;
export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />;
export const WithOutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);
export const WithOutHighligth: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);
export const WithOuTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
};
WithOuTitle.args = {
  highlight: highlightMock,
  games: gamesMock
};
WithOutHighligth.args = {
  title: 'Most Popular',
  games: gamesMock
};
WithOutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
};

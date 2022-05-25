import { Story, Meta } from '@storybook/react/types-6-0';

import GameDetails, { GameDetailsProps } from '.';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    platforms: ['linux', 'windows', 'mac'],
    releaseDate: '2020-11-21T23:00:00',
    rating: 'BR16',
    genres: ['action', 'suspense'],
    developer: 'Action Vision'
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['linux', 'windows', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['action', 'suspense']
      }
    }
  }
} as Meta;
export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);

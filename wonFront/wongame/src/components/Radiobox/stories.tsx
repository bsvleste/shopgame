import { Story, Meta } from '@storybook/react/types-6-0';
import Radiobox, { RadioBoxProps } from '.';

export default {
  title: 'Form/Radio',
  component: Radiobox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta<RadioBoxProps>;

export const Default: Story<RadioBoxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radiobox
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radiobox
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radiobox
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
        {...args}
      />
    </div>
  </>
);

import type { Meta, StoryObj } from '@storybook/react';

import { ComponentDecorator } from '~/testing/decorators';
import { graphqlMocks } from '~/testing/graphqlMocks';

import { RightDrawerTopBar } from '../RightDrawerTopBar';

const meta: Meta<typeof RightDrawerTopBar> = {
  title: 'UI/RightDrawer/RightDrawerTopBar',
  component: RightDrawerTopBar,
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
    ComponentDecorator,
  ],
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof RightDrawerTopBar>;

export const Default: Story = {};

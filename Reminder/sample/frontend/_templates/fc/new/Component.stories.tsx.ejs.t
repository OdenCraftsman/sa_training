---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';
import { <%= component_name %> } from '.';
<% if (is_root_templates) { -%>
import { WithPageLayoutDecorator } from '@/lib/storybook/decorators/WithPageLayoutDecorator';
import { createRoute } from '@/lib/storybook/utils/createRoute';
<% } -%>

const meta = {
  component: <%= component_name %>,
<% if (is_root_templates) { -%>
  decorators: [WithPageLayoutDecorator],
  parameters: {
    reactRouter: createRoute({
      path: '/',
    }),
  },
<% } -%>
} satisfies Meta<typeof <%= component_name %>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

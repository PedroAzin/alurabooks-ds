import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AbButton } from '../src/components/AbButton';

const meta: Meta = {
  title: 'AbButton',
  component: AbButton,
};

export default meta;

const Template: Story = () => <AbButton />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Component = Template.bind({});

Component.args = {};

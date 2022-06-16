import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BatteryGauge as Battery, Props } from '../src';

const meta: Meta = {
  title: 'Gauge/Battery',
  component: Battery,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Battery {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Basic = Template.bind({});

Basic.args = {};

export const Animated = Template.bind({});

Animated.args = {
  animated: true,
};

export const Charging = Template.bind({});

Charging.args = {
  charging: true,
};






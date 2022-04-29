import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainHeading } from './components/main-heading/main-heading';

export default {
	title: 'Example/Main heading',
	component: MainHeading,
	argTypes: {
		color: { control: { type: 'color' } },
		fontFamily: { control: { type: 'select' } },
	},
} as ComponentMeta<typeof MainHeading>;

const Template: ComponentStory<typeof MainHeading> = (args) => (
	<MainHeading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	fontFamily: 'Inter',
};

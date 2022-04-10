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

// const content: string = 'Lorem ipsum sit amet';
// const color: string = '#000';

export const Primary = Template.bind({});
Primary.args = {
	fontFamily: 'Inter',
};

// export const Large = Template.bind({});
// Large.args = {
// 	// content,
// 	// color,
// 	size: 'large',
// 	fontFamily: 'Inter',
// };

// export const Small = Template.bind({});
// Small.args = {
// 	// content,
// 	// color,
// 	size: 'small',
// 	fontFamily: 'Inter',
// };

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Preamble } from './components/preamble/preamble';

export default {
	title: 'Example/preamble',
	component: Preamble,
	argTypes: {
		color: { control: { type: 'color' } },
		fontFamily: { control: { type: 'select' } },
	},
} as ComponentMeta<typeof Preamble>;

const Template: ComponentStory<typeof Preamble> = (args) => (
	<Preamble {...args} />
);

const content: string = `Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.`;

export const Default = Template.bind({});
Default.args = {
	content,
	fontFamily: 'Inter',
	color: '#000',
};

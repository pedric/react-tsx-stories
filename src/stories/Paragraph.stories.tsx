import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph } from './components/paragraph/paragraph';
import paragraphs from './components/paragraph/exampleData';

export default {
	title: 'Example/paragraphs',
	component: Paragraph,
	argTypes: {
		color: { control: { type: 'color' } },
		fontFamily: { control: { type: 'select' } },
	},
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
	<Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
	paragraphs,
	fontFamily: 'Inter',
};

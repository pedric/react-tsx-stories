import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './components/accordion/Accordion';

export default {
	title: 'Example/Accordion',
	component: Accordion,
	argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
	<Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
	// paragraphs,
	// fontFamily: 'Inter',
};

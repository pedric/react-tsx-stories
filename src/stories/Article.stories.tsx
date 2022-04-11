import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Article } from './Article';

export default {
	title: 'Example/Article',
	component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => (
	<Article {...args} />
);

export const Default = Template.bind({});
Default.args = {
	fontFamily: 'Inter',
};

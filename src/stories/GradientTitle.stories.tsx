import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GradientTitle } from './components/gradient-title/gradientTitle';

export default {
	title: 'Example/Gradient Title',
	component: GradientTitle,
} as ComponentMeta<typeof GradientTitle>;

const Template: ComponentStory<typeof GradientTitle> = (args) => (
	<GradientTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
	fontFamily: 'Inter',
};

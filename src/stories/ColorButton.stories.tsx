import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorButton } from './components/color-button/colorButton';

export default {
	title: 'Example/Color button',
	component: ColorButton,
} as ComponentMeta<typeof ColorButton>;

const Template: ComponentStory<typeof ColorButton> = (args) => (
	<ColorButton {...args} />
);

export const Default = Template.bind({});
export const Purple = Template.bind({});
Purple.args = {
	background: 'purple',
};
export const Gradient = Template.bind({});
Gradient.args = {
	background:
		'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(178,66,191,1) 48%, rgba(70,252,126,1) 100%)',
};
export const MultiGradient = Template.bind({});
MultiGradient.args = {
	background:
		'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(178,66,191,1) 48%, rgba(70,252,126,1) 100%)',
	foreground:
		'linear-gradient(90deg, rgba(0,203,189,1) 0%, rgba(181,194,1,1) 49%, rgba(184,0,178,1) 100%)',
	color: '#fff',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Figure } from './components/figure/Figure';
import placeHolderLandscape from './assets/sora-sagano-tlCzX-8iwx4-unsplash.jpg';
import placeHolderPortrait from './assets/brad-mann-Us0dXJJg0As-unsplash.jpg';

export default {
	title: 'Example/Figure',
	component: Figure,
	argTypes: {},
} as ComponentMeta<typeof Figure>;

const Template: ComponentStory<typeof Figure> = (args) => <Figure {...args} />;

export const Landscape = Template.bind({});
Landscape.args = {
	image: {
		src: placeHolderLandscape,
		alt: 'Photo of mountain',
		width: 1920,
		height: 1081,
	},
};

export const Portrait = Template.bind({});
Portrait.args = {
	image: {
		src: placeHolderPortrait,
		alt: 'Photo of sunset',
		width: 1920,
		height: 2880,
	},
};

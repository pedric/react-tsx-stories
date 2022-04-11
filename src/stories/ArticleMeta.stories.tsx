import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleMeta } from './components/article-meta/ArticleMeta';

export default {
	title: 'Example/Article meta',
	component: ArticleMeta,
	argTypes: {
		color: { control: { type: 'color' } },
		fontFamily: { control: { type: 'select' } },
	},
} as ComponentMeta<typeof ArticleMeta>;

const Template: ComponentStory<typeof ArticleMeta> = (args) => (
	<ArticleMeta {...args} />
);

export const Primary = Template.bind({});
// Primary.args = {
// 	fontFamily: 'Inter',
// };

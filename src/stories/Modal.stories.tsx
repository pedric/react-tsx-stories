import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './components/modal/Modal';

export default {
	title: 'Example/Modal',
	component: Modal,
	argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
	// paragraphs,
	// fontFamily: 'Inter',
};

import React from 'react';
import '../../styles/global.css';
import './preamble.css';

interface PreambleProps {
	content?: string;
	fontFamily?: 'Inter' | 'Barlow' | 'Open sans' | 'Roboto' | 'Poppins';
	color?: string;
}

export const Preamble = ({
	content = `Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.`,
	fontFamily = 'Inter',
	color = '#000',
}: PreambleProps) => {
	return (
		<div style={{ color, fontFamily }}>
			<h6 className={'preamble'}>{content}</h6>
		</div>
	);
};

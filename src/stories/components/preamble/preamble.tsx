import React from 'react';
import '../../styles/global.css';
import './preamble.css';

interface PreambleProps {
	content: string;
	fontFamily?: 'Inter' | 'Barlow' | 'Open sans' | 'Roboto' | 'Poppins';
	color?: string;
}

export const Preamble = ({
	content,
	fontFamily = 'Inter',
	color = '#000',
}: PreambleProps) => {
	return (
		<div style={{ color, fontFamily }}>
			<h6 className={'preamble'}>{content}</h6>
		</div>
	);
};

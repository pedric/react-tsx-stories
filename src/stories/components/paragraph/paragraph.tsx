import React from 'react';
import '../../styles/global.css';
import './paragraph.css';

interface ParagraphProps {
	paragraphs: string[];
	fontFamily?: 'Inter' | 'Barlow' | 'Open sans' | 'Roboto' | 'Poppins';
	color?: string;
}

export const Paragraph = ({
	paragraphs,
	fontFamily = 'Inter',
	color,
}: ParagraphProps) => {
	return (
		<div style={{ color, fontFamily }}>
			{paragraphs &&
				paragraphs.map((p) => <p dangerouslySetInnerHTML={{ __html: p }}></p>)}
		</div>
	);
};

import React from 'react';
import '../../styles/global.css';
import './paragraph.css';

interface ParagraphProps {
	paragraphs?: string[];
	fontFamily?:
		| 'Inter'
		| 'Barlow'
		| 'Open sans'
		| 'Roboto'
		| 'Poppins'
		| 'EB Garamond'
		| 'Libre Baskerville';
	color?: string;
}

export const Paragraph = ({
	paragraphs,
	fontFamily,
	color,
}: ParagraphProps) => {
	return (
		<div className='paragraphs' style={{ color, fontFamily }}>
			{paragraphs &&
				paragraphs.map((p, idx) => (
					<p key={idx} dangerouslySetInnerHTML={{ __html: p }}></p>
				))}
		</div>
	);
};

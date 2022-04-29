import React from 'react';
import './gradienttitle.css';

interface GradientTitleProps {
	content?: string;
	gradient?: string;
	fontFamily?: string;
	fontSize?: string;
}

export const GradientTitle = ({
	content = 'Hello world.',
	gradient,
	fontFamily = 'Inter',
	fontSize = '9rem',
}: GradientTitleProps) => {
	return (
		<div className={'gradient-title'}>
			<h1 style={{ fontSize, fontFamily }}>
				<span className={'gradient'}>{content}</span>
				<span className={'ghost'}>{content}</span>
			</h1>
		</div>
	);
};

// const StyledTitleWrapper = styled.div<any>`
// 	background: red;
// `;

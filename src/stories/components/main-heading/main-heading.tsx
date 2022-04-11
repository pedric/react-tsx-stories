import React from 'react';
import '../../styles/global.css';
import './MainHeading.css';

interface MainHeadingProps {
	size?: 'small' | 'medium' | 'large';
	color?: string;
	content?: string;
	fontFamily?:
		| 'Inter'
		| 'Barlow'
		| 'Open sans'
		| 'Roboto'
		| 'Poppins'
		| 'EB Garamond'
		| 'Libre Baskerville';
}

export const MainHeading = ({
	size = 'medium',
	color = '#000',
	content = `Lorem ipsum sit amet – It's also called placeholder`,
	fontFamily,
	...props
}: MainHeadingProps) => (
	<div style={{ fontFamily }}>
		<h1
			className={[`main-heading`, `main-heading--${size}`].join(' ')}
			style={{ color }}
			{...props}
		>
			{content}
		</h1>
	</div>
);

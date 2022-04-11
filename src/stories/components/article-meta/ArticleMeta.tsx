import React from 'react';
import '../../styles/global.css';
import './articlemeta.css';

interface ArticleMetaProps {
	category?: string;
	author?: string;
	date?: string;
	color?: string;
	fontFamily?:
		| 'Inter'
		| 'Barlow'
		| 'Open sans'
		| 'Roboto'
		| 'Poppins'
		| 'EB Garamond'
		| 'Libre Baskerville';
}

export const ArticleMeta = ({
	category = 'Sports',
	author = 'Malin Andersson',
	date,
	color = '#000',
	fontFamily,
	...props
}: ArticleMetaProps) => {
	if (!date) {
		let today = new Date();
		date = String(
			`${today.getFullYear()}/${today.getMonth()}/${today.getDate()}`,
		);
	}
	return (
		<div className={'article-meta'} style={{ fontFamily }}>
			<span
				className={'article-meta__category'}
				style={{ backgroundColor: color }}
			>
				{category}
			</span>
			<span className={'article-meta__date-name'}>{`${date} • ${author}`}</span>
			<hr
				style={{
					background: `linear-gradient(90deg, ${color} 0%, rgba(255,255,255,.8) 75%, #ffffff 100%)`,
				}}
			/>
		</div>
	);
};

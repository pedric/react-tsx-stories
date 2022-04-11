import React from 'react';
import { MainHeading } from './components/main-heading/main-heading';
import { Preamble } from './components/preamble/preamble';
import { Paragraph } from './components/paragraph/paragraph';
import paragraphs from './components/paragraph/exampleData';
import { Figure } from './components/figure/Figure';
import { ArticleMeta } from './components/article-meta/ArticleMeta';
import placeHolderLandscape from './assets/sora-sagano-tlCzX-8iwx4-unsplash.jpg';

interface ArticleProps {
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

export const Article = ({
	fontFamily,
	color = '#000',
	...props
}: ArticleProps) => {
	const image = {
		src: placeHolderLandscape,
		alt: 'Photo of mountain',
		width: 1920,
		height: 1081,
	};
	return (
		<article
			className='full-article full-article--center'
			style={{ fontFamily }}
			{...props}
		>
			<ArticleMeta color={color} />
			<MainHeading fontFamily={fontFamily} />
			<Preamble fontFamily={fontFamily} />
			<Figure image={image} />
			<Paragraph fontFamily={fontFamily} paragraphs={paragraphs} />
		</article>
	);
};

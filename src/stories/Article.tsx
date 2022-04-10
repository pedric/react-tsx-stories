import React from 'react';
import { MainHeading } from './components/main-heading/main-heading';
import { Preamble } from './components/preamble/preamble';
import { Paragraph } from './components/paragraph/paragraph';
import paragraphs from './components/paragraph/exampleData';
import { Figure } from './components/figure/Figure';
import placeHolderLandscape from './assets/sora-sagano-tlCzX-8iwx4-unsplash.jpg';

export const Article = () => {
	const image = {
		src: placeHolderLandscape,
		alt: 'Photo of mountain',
		width: 1920,
		height: 1081,
	};
	return (
		<article className='full-article full-article--center'>
			<MainHeading />
			<Preamble />
			<Figure image={image} />
			<Paragraph paragraphs={paragraphs} />
		</article>
	);
};

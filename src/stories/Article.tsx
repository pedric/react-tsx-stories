import React from 'react';
import { MainHeading } from './components/main-heading/main-heading';
import { Preamble } from './components/preamble/preamble';
import { Paragraph } from './components/paragraph/paragraph';
import paragraphs from './components/paragraph/exampleData';

export const Article = () => {
	return (
		<article>
			<MainHeading />
			<Preamble />
			<Paragraph paragraphs={paragraphs} />
		</article>
	);
};

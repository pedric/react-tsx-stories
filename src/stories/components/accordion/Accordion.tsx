import React, { useState } from 'react';
import '../../styles/global.css';

interface AccordionProps {
	open?: boolean;
	title?: string;
	content?: string;
	onClick?: () => void;
}

export const Accordion = ({
	open = false,
	title = 'titel',
	content = `<p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.</p>`,
	onClick,
	...props
}: AccordionProps) => {
	const [isOpen, toggleIsOpen] = useState<Boolean>(open);
	return (
		<div className={'accordion'}>
			{title && content && (
				<>
					<div
						className={'accordion__title'}
						onClick={() => toggleIsOpen(!isOpen)}
					>
						{title}
						<span>{isOpen ? '-' : '+'}</span>
					</div>
					<div
						className={'accordion__content'}
						style={{ display: isOpen ? 'block' : 'none' }}
						dangerouslySetInnerHTML={{ __html: content }}
					></div>
				</>
			)}
		</div>
	);
};

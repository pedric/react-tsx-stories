import React, { useState } from 'react';
import '../../styles/global.css';
import './modal.css';

interface ModalProps {
	initiallyOpen?: boolean;
	title?: string;
	content?: string;
}

export const Modal = ({
	initiallyOpen = false,
	title = 'titel',
	content = `<p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.</p>`,
	...props
}: ModalProps) => {
	const [isOpen, toggleIsOpen] = useState<Boolean>(initiallyOpen);

	const handleClickOutsideModal = (e: any) => {
		if (e.target.classList.value === 'modal') {
			toggleIsOpen(!isOpen);
		}
	};
	return (
		<>
			<button onClick={() => toggleIsOpen(!isOpen)}>Open modal</button>
			<aside
				className={'modal'}
				data-state={isOpen ? 'open' : 'closed'}
				onClick={(e) => handleClickOutsideModal(e)}
			>
				<div className={'modal__box'}>
					<header className={'modal__header'}>
						<h2>{title}</h2>
						<button
							className={'modal__close'}
							onClick={() => toggleIsOpen(!isOpen)}
						>
							x
						</button>
					</header>
					<div className={'modal__body'}>
						<div dangerouslySetInnerHTML={{ __html: content }}></div>
					</div>
					<footer className={'modal__footer'}></footer>
				</div>
			</aside>
		</>
	);
};

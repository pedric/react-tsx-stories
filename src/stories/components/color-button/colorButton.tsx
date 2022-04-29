import './color-button.css';

interface ColorButtonProps {
	color?: string;
	background?: string;
	foreground?: string;
	text?: string;
	target?: string;
}
export const ColorButton = ({
	color = '#000',
	background = '#000',
	foreground = '#fff',
	text = 'Button',
	target = '#',
}: ColorButtonProps) => {
	return (
		<div>
			<span className={'btn btn--color'} style={{ background }}>
				<a style={{ color, background: foreground }} href={target}>
					{text}
				</a>
			</span>
		</div>
	);
};

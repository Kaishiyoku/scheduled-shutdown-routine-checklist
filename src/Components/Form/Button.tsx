import clsx from 'clsx';

type ButtonProps =
	| {
			type: 'button' | 'submit' | 'reset';
			color: 'black';
			children: React.ReactNode;
			onClick: () => void;
            className?: string;
	  }
	| {
			type: 'button' | 'submit' | 'reset';
			plain: true;
			children: React.ReactNode;
			onClick: () => void;
        className?: string;
	  };

export default function Button(props: ButtonProps) {
	const classes = clsx(
        props.className,
		'px-3 py-2 sm:text-sm border focus:outline-offset-2 focus:outline-zinc-600 rounded-md',
		{
			'text-zinc-100 dark:text-black border-black dark:border-zinc-500 bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-zinc-200':
				'color' in props && props.color === 'black',
			'border-transparent hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50':
				'plain' in props && props.plain,
			shadow: 'plain' in props && !props.plain,
		},
	);

	return (
		<button type={props.type} className={classes} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

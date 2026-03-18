import clsx from 'clsx';

export function DescriptionList({
	className,
	...props
}: React.ComponentPropsWithoutRef<'dl'>) {
	return (
		<div className="@container">
			<dl
				{...props}
				className={clsx(
					className,
					'grid grid-cols-1 text-base/6 @md:grid-cols-[min(50%,--spacing(80))_auto] @md:text-sm/6',
				)}
			/>
		</div>
	);
}

export function DescriptionTerm({
	className,
	...props
}: React.ComponentPropsWithoutRef<'dt'>) {
	return (
		<dt
			{...props}
			className={clsx(
				className,
				'col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none @md:border-t @md:border-zinc-950/5 @md:py-3 dark:border-white/5 dark:text-zinc-400 @md:dark:border-white/5',
			)}
		/>
	);
}

export function DescriptionDetails({
	className,
	...props
}: React.ComponentPropsWithoutRef<'dd'>) {
	return (
		<dd
			{...props}
			className={clsx(
				className,
				'pt-1 pb-3 text-zinc-950 @md:border-t @md:border-zinc-950/5 @md:py-3 @md:nth-2:border-none dark:text-white dark:sm:border-white/5',
			)}
		/>
	);
}

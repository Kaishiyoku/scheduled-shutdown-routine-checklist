import clsx from 'clsx'
import type { HTMLInputTypeAttribute } from 'react'

type InputProps = {
	id: string;
	type: HTMLInputTypeAttribute;
	value: string;
	label: string;
	autofocus?: boolean;
	required?: boolean;
    clearable?: boolean;
	onChange: (value: string) => void;
};

export default function Input({
	id,
	type,
	value,
	label,
	onChange,
	autofocus = false,
	required = false,
    clearable = false,
}: InputProps) {
	return (
		<div className="pb-4">
			<div className="pb-1">
				<label
					htmlFor={id}
					className={clsx({
						"after:content-['*'] after:pl-1 after:text-red-600": required,
					})}
				>
					{label}
				</label>
			</div>

			<div className="relative">
				<input
					className="px-2 py-1 border-zinc-400 dark:border-zinc-600 focus:border-indigo-500 ring-indigo-500 dark:bg-zinc-800 rounded-md"
					id={id}
					type={type}
					value={value}
					onChange={(event) => onChange(event.target.value)}
					autoFocus={autofocus}
					required={required}
				/>

							{clearable && value.length > 0 && (
									<button
											type="button"
											aria-label="Zurücksetzen"
											onClick={() => onChange('')}
											className="absolute top-[5px] right-[5px] p-0.5 hover:bg-zinc-600 rounded-full"
									>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
													<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
											</svg>
									</button>
							)}
      </div>
		</div>
	);
}

import clsx from "clsx";

const buttonStyles = {
	base: [
		// Default styles
		"inline-flex gap-3 items-center justify-center rounded-xl cursor-pointer w-fit",
		// Focus styles
		"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-500",
		// Padding
		"px-4 py-2.5",
		// Font styles
		"text-base/6 font-semibold font-semibold sm:text-sm/6",
		// Icon styles
		"*:data-[slot=icon]:size-5 *:data-[slot=icon]:-mx-1.5",
		// Disabled styles
		"disabled:opacity-50 disabled:pointer-events-none",
	],
	solid: [
		"bg-zinc-950 text-white ring-1 ring-zinc-800 ring-inset hover:bg-zinc-800 shadow-xs dark:bg-zinc-50 dark:text-zinc-950 dark:ring-zinc-200 dark:hover:bg-zinc-100 dark:hover:ring-zinc-200",
	],
	outline: [
		"bg-transparent text-zinc-950 ring-1 ring-zinc-800/10 ring-inset hover:bg-zinc-900/5 shadow-xs dark:bg-zinc-50 dark:text-zinc-950 dark:ring-zinc-200 dark:hover:bg-zinc-100 dark:hover:ring-zinc-200",
	],
	plain: [
		"bg-transparent text-zinc-950 hover:bg-zinc-900/5 dark:text-zinc-200 dark:hover:bg-zinc-900",
	],
};

type ButtonProps =
	| { outline?: never; plain?: never }
	| {
			outline: true;
			plain?: never;
	  }
	| {
			plain: true;
			outline?: never;
	  };

export function Button(
	props: ButtonProps & React.ComponentPropsWithoutRef<"button">,
) {
	const { outline, plain, ...rest } = props;
	const classes = clsx(
		props.className,
		props.outline
			? buttonStyles.outline
			: props.plain
				? buttonStyles.plain
				: buttonStyles.solid,
		buttonStyles.base,
	);

	return (
		<button {...rest} className={classes}>
			{props.children}
		</button>
	);
}

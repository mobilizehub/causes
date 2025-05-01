import clsx from "clsx";
import { Link } from "./link";

export function Breadcrumb(props: React.ComponentPropsWithoutRef<"div">) {
	return <div {...props} className={clsx(props.className, "")} />;
}

export function BreadcrumList(props: React.ComponentPropsWithoutRef<"ul">) {
	return <ul {...props} className={clsx(props.className, "flex gap-2")} />;
}

export function BreadcrumbItem(
	props: React.ComponentPropsWithoutRef<"li"> & { current?: true },
) {
	const { current, ...rest } = props;
	return (
		<li
			{...rest}
			className={clsx(
				props.className,
				"flex gap-2",
				"*:data-[slot=link]:text-sm *:data-[slot=link]:font-medium *:data-[slot=link]:hover:text-zinc-700 dark:*:data-[slot=link]:hover:text-zinc-300",
				current
					? "*:data-[slot=link]:text-zinc-900 dark:*:data-[slot=link]:text-zinc-100"
					: "*:data-[slot=link]:text-zinc-500 dark:*:data-[slot=link]:text-zinc-400",
			)}
		/>
	);
}

export function BreadcrumbLink(props: React.ComponentPropsWithoutRef<"a">) {
	return (
		<Link
			{...props}
			data-slot="link"
			className={clsx(
				props.className,
				"max-w-40 truncate md:max-w-80 lg:max-w-96",
			)}
		/>
	);
}

export function BreadcrumbSeparator(
	props: React.ComponentPropsWithoutRef<"span">,
) {
	return (
		<span
			{...props}
			className={clsx(props.className, "text-sm font-medium text-zinc-400")}
		>
			›
		</span>
	);
}

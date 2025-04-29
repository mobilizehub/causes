import clsx from "clsx";

type HeadingProps = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

const headingStyles = {
    h1: "text-3xl/8 font-bold text-zinc-950 sm:text-4xl dark:text-zinc-50",
    h2: "text-2xl/8 font-bold text-zinc-950 sm:text-3xl dark:text-zinc-50",
    h3: "text-xl/8 font-bold text-zinc-950 sm:text-2xl dark:text-zinc-50",
    h4: "text-lg/8 font-bold text-zinc-950 sm:text-xl dark:text-zinc-50",
    h5: "text-base/8 font-bold text-zinc-950 sm:text-lg dark:text-zinc-50",
    h6: "text-sm/8 font-bold text-zinc-950 sm:text-base dark:text-zinc-50",
};

export function Heading({ className, level = 1, ...props }: HeadingProps) {
    const Element: `h${typeof level}` = `h${level}`;

    const classes = headingStyles[Element as keyof typeof headingStyles];

    return (
        <Element
            {...props}
            className={clsx(
                className,
                classes,
            )}
        />
    );
}

import clsx from "clsx";

type SeporatorProps =
    & { orientation: "horizontal" | "vertical" }
    & React.ComponentPropsWithoutRef<"hr">;

const separatorStyles = {
    horizontal: "h-px bg-zinc-100 shrink-0 border-0 dark:bg-zinc-700",
    vertical: "w-px bg-zinc-100 shrink-0 border-0 dark:bg-zinc-700",
};

export function Separator(
    props: SeporatorProps,
) {
    const classes = separatorStyles[props.orientation];

    return <hr {...props} className={clsx(classes, props.className)} />;
}

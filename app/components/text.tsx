import clsx from "clsx";
import { Link } from "./link";

export function Text({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"p">) {
    return (
        <p
            data-slot="text"
            {...props}
            className={clsx(
                className,
                "text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400",
            )}
        />
    );
}

export function TextLink({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"a">) {
    return (
        <Link
            {...props}
            className={clsx(
                className,
                "text-zinc-950 underline decoration-zinc-950/50 data-hover:decoration-zinc-950 dark:text-zinc-200 dark:decoration-zinc-200/50 data-hover:dark:decoration-zinc-200",
            )}
        />
    );
}

export function Strong({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"strong">) {
    return (
        <strong
            {...props}
            className={clsx(
                className,
                "font-medium text-zinc-950 dark:text-zinc-200",
            )}
        />
    );
}

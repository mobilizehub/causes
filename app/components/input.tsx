import clsx from "clsx";
import type React from "react";

const inputStyles = {
    base: [
        // Default styles
        "block w-full rounded-xl bg-white bg-white dark:bg-zinc-950",
        // Focus styles
        "focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:focus:outline-blue-500",
        // Padding
        "px-4 py-2.5",
        // Font styles
        "text-base/6 text-zinc-900 sm:text-sm/6 dark:text-zinc-200",
        // Placeholder styles
        "placeholder:text-zinc-400",
        // Outline styles
        "outline-1 -outline-offset-1 outline-zinc-300 dark:outline-zinc-600",
        // Disabled styles
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Error styles
        "group-data-[invalid=true]:outline-red-500 group-data-[invalid=true]:outline-red-500 dark:group-data-[invalid=true]:outline-red-500",
    ],
};

export function Input(
    props: React.ComponentPropsWithoutRef<"input">,
) {
    const classes = clsx(
        props.className,
        inputStyles.base,
    );

    return (
        <input
            {...props}
            className={classes}
        />
    );
}

import clsx from "clsx";
import type React from "react";

const inputStyles = {
    base: [
        // Default styles
        "block w-full rounded-xl bg-white bg-white ",
        // Focus styles
        "focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ",
        // Padding
        "px-4 py-2.5",
        // Font styles
        "text-base/6 text-gray-900 sm:text-sm/6",
        // Placeholder styles
        "placeholder:text-gray-400",
        // Outline styles
        "outline-1 -outline-offset-1 outline-gray-300",
        // Disabled styles
        "disabled:cursor-not-allowed disabled:opacity-50",
        // Error styles
        "group-data-[invalid=true]:outline-red-500 group-data-[invalid=true]:outline-red-500",
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

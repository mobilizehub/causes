import clsx from "clsx";
import type React from "react";

export function FieldGroup(props: React.ComponentPropsWithoutRef<"div">) {
    return (
        <div
            {...props}
            id="field-group"
            className={clsx(
                "flex flex-col items-center gap-6",
                props.className,
            )}
        />
    );
}

export function Field(
    { invalid, ...props }: React.ComponentPropsWithoutRef<"div"> & {
        invalid?: boolean;
    },
) {
    return (
        <div
            {...props}
            data-invalid={invalid}
            className={clsx(
                "flex flex-col items-start gap-1 w-full",
                "*:data-[slot=label]:mb-3",
                "group",
                props.className,
            )}
        />
    );
}

export function Label(
    props: React.ComponentPropsWithoutRef<"label">,
) {
    return (
        <label
            {...props}
            data-slot="label"
            className={clsx(
                "text-sm/6 font-medium text-zinc-950",
            )}
        />
    );
}

export function ErrorMessage(
    props: React.ComponentPropsWithoutRef<"p">,
) {
    return (
        <p
            {...props}
            className={clsx(
                "text-sm/6 text-red-500",
                props.className,
            )}
        />
    );
}

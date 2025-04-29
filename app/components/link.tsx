import { Link as ReactRouterLink } from "react-router";

export function Link(
    { href = "#", ...props }: React.ComponentPropsWithoutRef<"a">,
) {
    const to = href;

    return (
        <ReactRouterLink
            {...props}
            to={to}
        />
    );
}

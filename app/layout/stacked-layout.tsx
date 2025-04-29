import React from "react";
import { Outlet } from "react-router";
import { Link } from "~/components/link";
import {
    BlueskyIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
} from "~/components/icons";
import { Separator } from "~/components/seperator";

const navigationItems = {
    involved: [
        { name: "Signup", href: "/signup" },
    ],
    legal: [
        { name: "Privacy policy", href: "/privacy" },
    ],
    social: [
        {
            name: "Facebook",
            href: "http://www.facebook.com",
            icon: FacebookIcon,
        },
        {
            name: "Instagram",
            href: "http://www.instagram.com",
            icon: InstagramIcon,
        },
        {
            name: "X",
            href: "http://www.x.com",
            icon: XIcon,
        },
        {
            name: "LinkedIn",
            href: "http://www.linkedin.com",
            icon: LinkedInIcon,
        },
        {
            name: "BlueSky",
            href: "http://bsky.app",
            icon: BlueskyIcon,
        },
    ],
};

export default function StackedLayout() {
    return (
        <div className="min-h-screen h-full flex flex-col bg:white dark:bg-zinc-950">
            <Banner />

            <header className="bg-white border-b border-zinc-900/10 dark:bg-zinc-900/10 dark:border-zinc-800">
                <nav
                    aria-label="Global"
                    className="mx-auto flex max-w-5xl items-center justify-between py-4 px-6 lg:px-8 gap-12"
                >
                    <Link
                        href="/"
                        className="-m-1.5 p-1.5 flex items-center gap-1"
                    >
                        <span className="sr-only">Your Company</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-auto text-black dark:text-white"
                        >
                            <title>Logo</title>
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <rect x="8" y="8" width="8" height="8" rx="1" />
                        </svg>
                    </Link>

                    <div className="flex items-center text-nowrap h-full grow justify-end">
                        <div className="justify-end grow hidden lg:flex">
                            <div className="flex gap-x-5">
                                {navigationItems.social.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-zinc-600 hover:text-zinc-800 dark:text-zinc-200 dark:hover:text-zinc-100"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="sr-only">
                                            {item.name}
                                        </span>
                                        <item.icon
                                            aria-hidden="true"
                                            className="size-5"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Separator
                            orientation="vertical"
                            className="h-6 hidden lg:block mx-4"
                        />

                        <Link
                            href="/signup"
                            className="inline-block rounded-lg px-3 py-1 text-sm/6 font-semibold leading-6 text-white bg-zinc-900 hover:bg-zinc-700 ring-1 ring-zinc-600 hover:ring-zinc-800 shadow-sm transition-all duration-200 ease-in-out dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-200 dark:hover:ring-zinc-300 dark:hover:bg-zinc-200"
                        >
                            Sign up
                        </Link>
                    </div>
                </nav>
            </header>

            <div className="grow">
                <Outlet />
            </div>

            <footer className="border-t border-zinc-900/10 bg-zinc-50 dark:bg-zinc-950 dark:border-zinc-800">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
                    <Link
                        href="/"
                        className="-m-1.5 p-1.5 flex items-center gap-1.5 w-fit"
                    >
                        <span className="sr-only">Your Company</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-auto text-black dark:text-white"
                        >
                            <title>Logo</title>
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <rect x="8" y="8" width="8" height="8" rx="1" />
                        </svg>
                        <span className="text-lg font-semibold text-zinc-950 dark:text-zinc-100">
                            Causes
                        </span>
                    </Link>

                    <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 *:col-span-1">
                        <div>
                            <h3
                                slot="heading"
                                className="text-base/7 font-semibold text-zinc-900 dark:text-zinc-100"
                            >
                                Get involved
                            </h3>
                            <ul className="mt-6 space-y-4">
                                {navigationItems.involved.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-sm/6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3
                                slot="heading"
                                className="text-base/7 font-semibold text-zinc-900 dark:text-zinc-100"
                            >
                                Legal
                            </h3>
                            <ul className="mt-6 space-y-4">
                                {navigationItems.legal.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-sm/6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-100"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 items-start mt-10 md:mt-20 md:justify-between">
                        <div className="flex justify-center gap-x-6 ">
                            {navigationItems.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-zinc-600 hover:text-zinc-800 dark:text-zinc-200 dark:hover:text-zinc-100"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon
                                        aria-hidden="true"
                                        className="size-6"
                                    />
                                </a>
                            ))}
                        </div>
                        <p className="mt-2 text-center text-sm/6 text-zinc-600 md:order-1 md:mt-0 md:text-left dark:text-zinc-200">
                            &copy; {new Date().getFullYear()}{" "}
                            Causes, Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function Banner() {
    const [isVisible, setIsVisible] = React.useState(true);

    return (
        <div
            hidden={!isVisible}
            className="flex items-center gap-x-6 bg-zinc-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 dark:bg-zinc-100/10"
        >
            <p className="text-sm/6 text-white">
                <a
                    href="https://github.com/mobilizehub/causes"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    This is an example using MobilizeHub API. View repo
                    &nbsp;<span aria-hidden="true">&rarr;</span>
                </a>
            </p>
            <div className="flex flex-1 justify-end">
                <button
                    type="button"
                    className="-m-3 p-3 focus-visible:outline-offset-[-4px] cursor-pointer"
                    onClick={() => {
                        setIsVisible(false);
                    }}
                >
                    <span className="sr-only">Dismiss</span>
                    <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5 text-white"
                    >
                        <title>Close</title>
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

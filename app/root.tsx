import {
  data,
  isRouteErrorResponse,
  Links,
  type LoaderFunctionArgs,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router";

import React from "react";
import { getToast } from "remix-toast";
import { toast as notify, Toaster } from "sonner";
import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // Extracts the toast from the request
  const { toast, headers } = await getToast(request);
  // Important to pass in the headers so the toast is cleared properly
  return data({ toast }, { headers });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const navigation = useNavigation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ProgressBar
          isLoading={navigation.state === "loading" ||
            navigation.state === "submitting"}
        />
        <Toaster richColors position="top-right" closeButton />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { toast } = useLoaderData<typeof loader>();
  // Hook to show the toasts
  React.useEffect(() => {
    if (toast?.type === "error") {
      notify.error(toast.message);
    }
    if (toast?.type === "success") {
      notify.success(toast.message);
    }
  }, [toast]);

  return <Outlet />;
}

const ProgressBar = ({
  isLoading,
  color = "#0284c7",
  height = "2px",
  animationDuration = 300,
}: {
  isLoading: boolean;
  color?: string;
  height?: string;
  animationDuration?: number;
}) => {
  const [progress, setProgress] = React.useState(0);
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    if (isLoading) {
      setOpacity(1);
      setProgress(0.25);
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + Math.random() * 0.03;
          return newProgress > 0.9 ? 0.9 : newProgress;
        });
      }, animationDuration);
    } else {
      setProgress(1);
      setTimeout(() => {
        setOpacity(0);
      }, animationDuration / 2);
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isLoading, animationDuration]);

  return (
    <div
      aria-hidden="true"
      style={{
        pointerEvents: "none",
        backgroundColor: color,
        position: "fixed",
        zIndex: 1031,
        top: 0,
        left: 0,
        width: "100%",
        height: height,
        transition: `transform ${animationDuration}ms ease-out, opacity ${
          animationDuration / 2
        }ms ${animationDuration / 2}ms ease-in`,
        transform: `translate3d(0, 0, 0) scaleX(${progress})`,
        transformOrigin: "0",
        opacity: opacity,
      }}
    />
  );
};

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404
      ? "The requested page could not be found."
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

import stylesheets from "@/styles/tailwind.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, LiveReload } from "@remix-run/react";

export function links() {
  return [{ rel: "stylesheet", href: stylesheets }];
}

export default function App() {
  return (
    <html lang="en" data-mode="system">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground">
        <div className="contents">
          <Outlet />
        </div>
        <LiveReload />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

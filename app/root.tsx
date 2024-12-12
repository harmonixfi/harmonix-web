import Footer from "./components/common/Footer";
// import LegalAlert from "./components/common/LegalAlert";
import Navbar from "./components/common/navbar/Navbar";
import "./tailwind.css";
import { NextUIProvider } from "@nextui-org/react";
import { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Outfit:100,200,300,400,500,600,700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#F5F5F5] font-outfit">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="lg:pt-8">
        <NextUIProvider>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <main>{children}</main>
            {/* <LegalAlert /> */}
            <Footer />
            <ScrollRestoration />
            <LiveReload />
            <Scripts />
          </QueryClientProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

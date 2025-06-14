import { Outlet, ScrollRestoration } from "react-router-dom";
import { Links, Meta, Scripts } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Social App</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-black">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-white max-w-sm mx-auto flex flex-col">
      <Header />
      <main className="flex-1 pb-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export function Err404() {
  return (
    <div className="min-h-screen bg-black text-white max-w-sm mx-auto flex items-center justify-center">
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-400">404 not found</p>
      </div>
    </div>
  );
}

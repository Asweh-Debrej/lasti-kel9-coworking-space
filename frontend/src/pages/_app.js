import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { NavbarProvider } from "@/context/navbar-context";

export default function App({ Component, pageProps }) {
  return (
    <NavbarProvider>
      <NextUIProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </NavbarProvider>
  );
}

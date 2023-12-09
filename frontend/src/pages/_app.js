import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { UserProvider } from "@/context/user-context";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <NextUIProvider>
      <UserProvider>
        <main>{getLayout(<Component {...pageProps} />)}</main>
      </UserProvider>
    </NextUIProvider>
  );
}

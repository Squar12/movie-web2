import "@/styles/globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <NuqsAdapter>
        <Component {...pageProps} />
      </NuqsAdapter>
    </NextThemesProvider>
  );
}

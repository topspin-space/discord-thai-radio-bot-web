import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { SessionProvider } from "../context/session-context";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      initClassName: "aos-init",
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

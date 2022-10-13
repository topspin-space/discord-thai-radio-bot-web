import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppContext, AppProps } from "next/app";
import { useEffect } from "react";
import { SessionProvider } from "../context/session-context";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "next/app";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});


interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
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

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

type SessionProviderProps = {
  cookies: string
}

interface MyAppProps extends AppProps, SessionProviderProps {}

function MyApp({ Component, pageProps, cookies }: MyAppProps) {
  useEffect(() => {
    AOS.init({
      initClassName: "aos-init",
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider data={cookies}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context)
  return { ...ctx, cookies: context.ctx.req?.headers.cookie }
}

export default MyApp;

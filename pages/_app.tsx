import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      initClassName: 'aos-init'
    });
  }, [])
  return <Component {...pageProps} />
}

export default MyApp

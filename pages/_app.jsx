// Core Imports
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

// Layout and Theme
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Global CSS Imports
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Dynamically import Bootstrap on the client only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap');
    }
  }, []);

  // Re-initialize scrollCue animations when route changes
  useEffect(() => {
    const initScrollCue = async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400, // delay between items
        duration: 700,  // animation duration
        percentage: 0.8 // when to trigger animation
      });
      scrollCue.update();
    };
    initScrollCue();
  }, [pathname]);

  // Stop loading screen after initial mount
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      {/* Global Meta Tags */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mineralo – Next.js Template for Industrial Mineral & Raw Material Supplier Websites</title>
        <meta name="description" content="A modern Next.js + React template for mining, minerals, and raw material supplier websites." />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mineralo – Next.js Template for Industrial Mineral & Raw Material Supplier Websites" />
        <meta property="og:description" content="A modern Next.js + React template for mining, minerals, and raw material supplier websites." />
        <meta property="og:url" content="https://themixly.com/themes/industrial-minerals-react-nextjs-template/" />
        <meta property="og:image" content="https://themixly.com/wp-content/uploads/2025/07/Mineralo-Img-3-scaled.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Mineralo – Next.js Template for Industrial Mineral & Raw Material Supplier Websites" />
        <meta name="twitter:description" content="A modern Next.js + React template for mining, minerals, and raw material supplier websites." />
        <meta name="twitter:image" content="https://themixly.com/wp-content/uploads/2025/07/Mineralo-Img-3-scaled.jpg" />
      </Head>

      {/* App Layout with ThemeProvider */}
      <Layout>
        <ThemeProvider>
          <ToastContainer position="bottom-right" autoClose={5000} />
          {loading ? (
            <div className="page-loader" />
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>

      </Layout>
    </Fragment>
  );
}

export default MyApp;

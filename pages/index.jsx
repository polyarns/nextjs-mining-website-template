// Core Imports
import { Fragment } from 'react';
import Head from 'next/head';

// Custom Components
import PageProgress from 'components/PageProgress';
import About from 'components/About';
import Hero from 'components/Hero';
import Card from 'components/Card';

// Data Imports
import { products} from '../src/data';

const Home = () => {
  return (
    <Fragment>
      {/* Page Scroll Progress Indicator */}
      <PageProgress />

      {/* SEO Meta Tags */}
      <Head>
        <title>Mineralo – React & Next.js Template for Industrial Minerals</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://www.mineralo.com/" />
      </Head>

      {/* Main Content Wrapper */}
      <main className="content-wrapper overflow-x-hidden">
        {/* Hero / Banner Section */}
        <Hero />

        {/* About Section 1 */}
        <section className="wrapper mt-lg-n2 bg-light position-relative z-1">
          <div className="container py-12 py-md-14">
            <About
              heading="Manufacturer, Exporter & Supplier of China Clay"
              subHeading="Mineralo"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus, doloremque debitis ipsum culpa perspiciatis commodi dicta error tempora ut nesciunt vel quasi amet accusamus obcaecati quas ipsa voluptate sapiente. Id, necessitatibus culpa rem totam veniam natus labore vel eaque mollitia, alias dignissimos nisi ducimus. Quae quo qui accusamus ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo possimus, doloremque debitis ipsum culpa perspiciatis commodi dicta error tempora ut nesciunt vel quasi amet accusamus obcaecati quas ipsa voluptate sapiente. Illo possimus."
              src="/img/manufacturer-exporter-&-supplier-of-china-clay.webp"
            />
          </div>
        </section>

        {/* Products Offered Section */}
        <section className="wrapper bg-light">
          <div className="container py-4 py-md-6">
            <div className="row mb-8 text-center">
              <div className="col-lg-10 col-xl-10 col-xxl-9 mx-auto">
                <h2 className="display-4">Products we offer</h2>
                <p className="lead mb-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis optio alias porro magnam possimus sit doloremque aliquam sapiente rerum sunt cupiditate dolor, nam eveniet itaque voluptatibus repudiandae! Perspiciatis, neque voluptatem.
                </p>
              </div>
            </div>
            {/* Product Cards */}
            <Card arr={products} />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Home;

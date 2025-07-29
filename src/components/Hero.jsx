import NextLink from 'components/NextLink';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section position-relative text-white">
      {/* Background Video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        src="/img/hero.mp4"
        className="video-bg"
        title="Mineralo Overview"
      >
        Your browser does not support the video tag.
      </video>
    
      <div className="video-overlay"></div> */}

      {/* Background Image */}
      <div className="hero-bg position-absolute top-0 start-0 w-100 h-100 z-0">
        <Image
          src="/img/hero-bg.webp"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        {/* Optional dark overlay over image */}
        <div className="video-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      </div>

      {/* Hero Text Content */}
      <div className="container hero-content position-absolute top-50 start-50 translate-middle text-center text-sm-start">
        <h1 className="display-1 fs-56 mb-4 text-white">
          China Clay Mine Owners & Minerals{' '}
          <span className="underline-3 style-3 yellow">Processors</span>
        </h1>
        <p className="lead fs-23 lh-sm mb-5">
          A distinguished China Clay manufacturing mineralo invites you to enter the realm of industrial minerals excellence.
        </p>

        {/* Call to Action Button */}
        <NextLink
          title="Contact Us"
          href="#"
          className="btn btn-lg btn-primary rounded"
          aria-label="Contact Mineralo"
        />
      </div>

      {/* SVG Curve Divider at the bottom */}
      <div className="curve-divider position-absolute bottom-0 w-100 z-2">
        <div className="divider text-white mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;




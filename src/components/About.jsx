import Image from 'next/image';
import PropTypes from 'prop-types';
import NextLink from './NextLink';

const About = ({
  heading = '',
  headingH1 = '',
  subHeading = '',
  para = '',
  para2 = '',
  para3 = '',
  imgPosition = 'left', // ⬅️ Controls image position (left or right)
  src = '/img/default.jpg', // ⬅️ Image shown if no video provided
  btnTitle = '',
  btnUrl = '',
  video = null, // ⬅️ Pass video instead of image (example: { src: '/video.mp4' })
}) => {
  // 📸 If `video` is passed, it shows instead of image
  const renderMedia = () =>
    video ? (
      <video
        className="w-100 rounded-xl h-100"
        autoPlay
        muted
        loop
        playsInline
        src={video.src}
        aria-label="About video"
      />
    ) : (
      <Image
        src={src}
        alt={`${headingH1 ? headingH1 : heading} | Mineralo`}
        width={500}
        height={500}
        className="rounded-xl img-fluid"
        priority
        style={{ maxWidth: "500px" }}
      />
    );

  return (
    <div className="row gx-lg-8 align-items-center">
      {/* ⬅️ Column layout changes based on imgPosition prop */}
      <div className={`col-lg-5 ${imgPosition === 'right' ? 'order-lg-2' : 'order-lg-1'}`}>
        <figure className={` d-flex ${imgPosition === 'right' ? 'justify-content-lg-end' : 'justify-content-lg-start'} justify-content-center`}>{renderMedia()}</figure>
      </div>

      {/* 🧾 Content column switches sides if image is right */}
      <div className={`col-lg-7 ${imgPosition === 'right' ? 'order-lg-1' : 'order-lg-2'} mt-5 mt-lg-0`}>
        {/* 💬 Small label above heading (optional) */}
        {subHeading && (
          <span className="fs-16 fw-bold text-uppercase text-main">
            {subHeading}
          </span>
        )}

        {/* 🏷️ Main heading (larger) */}
        {headingH1 && <h1 className="fs-36 fw-bold mb-3">{headingH1}</h1>}

        {/* 🏷️ Subheading (smaller) */}
        {heading && <h2 className="mb-3 fs-36 fw-bold">{heading}</h2>}

        {/* 📝 Main description (supports up to 3 paragraphs) */}
        {para && <p className="mb-3 text-justify">{para}</p>}
        {para2 && <p className="mb-3 text-justify">{para2}</p>}
        {para3 && <p className="mb-3 text-justify">{para3}</p>}

        {/* 🔘 Show CTA button only if both title and URL are provided */}
        {btnTitle && btnUrl && (
          <div className="mt-5">
            <NextLink
              title={btnTitle}
              href={btnUrl}
              className="btn btn-md bg-primary text-white rounded"
              aria-label={btnTitle}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// 🛡️ Define props for safe use and editor auto-suggestions
About.propTypes = {
  heading: PropTypes.string,
  headingH1: PropTypes.string,
  subHeading: PropTypes.string,
  para: PropTypes.string,
  para2: PropTypes.string,
  para3: PropTypes.string,
  imgPosition: PropTypes.oneOf(['left', 'right']),
  src: PropTypes.string,
  btnTitle: PropTypes.string,
  btnUrl: PropTypes.string,
  video: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }),
};

export default About;

import Link from 'next/link';

const Topbar = () => {
  return (
    // Topbar section visible on md and larger screens with secondary background
    <section className="secondary-bg d-none d-md-block">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">

          {/* Left Info Text: Visible on large screens and above */}
          <div className="d-none d-lg-flex col-lg-4 col-xxl-5 text-white fw-semibold fs-16">
            <p className="m-0">
              Excellence in Kaolin for over 20 years
            </p>
          </div>

          {/* Email Contact */}
          <div className="d-flex align-items-center justify-content-xxl-center col-3 col-lg-2 col-xxl-2">
            <div
              className="icon text-white fs-22 pt-1 pe-2"
              aria-hidden="true"
            >
              <i className="uil uil-envelope" />
            </div>
            <Link
              href="mailto:info@mineralo.com"
              className="link-white hover fw-semibold"
              aria-label="Email contact"
            >
              info@mineralo.com
            </Link>
          </div>

          {/* Phone Contact */}
          <div className="d-flex align-items-center justify-content-center col-4 col-lg-3 col-xxl-2">
            <div
              className="icon text-white fs-20 pt-1 pe-2"
              aria-hidden="true"
            >
              <i className="uil uil-phone-volume" />
            </div>
            <Link
              href="tel:+919999999999"
              className="link-white hover text-white  fw-semibold"
              aria-label="Phone contact"
            >
              +91 99999 99999
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="d-flex align-items-center justify-content-center col-1">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-white hover me-2"
              aria-label="Facebook"
            >
              <div className="icon text-white fs-22">
                <i className="uil uil-facebook" />
              </div>
            </Link>

            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-white hover"
              aria-label="Instagram"
            >
              <div className="icon text-white fs-22">
                <i className="uil uil-instagram" />
              </div>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="link-white hover ms-2 "
              aria-label="WhatsApp"
            >
              <div className="icon text-white fs-22">
                <i className="uil uil-whatsapp" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;

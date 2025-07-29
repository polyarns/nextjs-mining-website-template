import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { products, usefulLinks } from '../data.js';

/**
 * Helper widget component to render a list of links with a title
 * @param {Array} list - Array of link objects with id, url, title
 * @param {string} title - Title of the widget section
 */
const widget = (list, title) => (
  <div className="widget">
    <h3 className="widget-title fs-24 mb-3">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ url, title, id }) => (
        <li key={id}>
          <NextLink href={url ? url :"#"} title={title} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top secondary-bg overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-2">
        <div className="row gx-10 justify-content-between">

          {/* Logo & About Section */}
          <div className="col-lg-3">
            <div className="widget d-flex flex-column align-items-start">
              <div className="logo-placeholder my-2">
                <Image
                  src="/img/logo-light.webp"
                  alt="Mineralo Logo"
                  width={240}
                  height={100}
                  priority // Optimize loading of logo
                />
              </div>
              <p className="lead mb-2 text-justify fs-18 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, unde.
              </p>
              <div className="d-flex flex-column align-items-start">
                <h3 className="fs-24 text-white mb-3">Follow Us On</h3>
                <SocialLinks className="nav social text-md-end" />
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="col-sm-6 col-md-4 col-lg-3 mt-5 mt-lg-0 text-white d-flex justify-content-md-center">
            {widget(usefulLinks, 'Useful Links')}
          </div>

          {/* Products Section */}
          <div className="col-sm-6 col-md-4 col-lg-2 mt-5 mt-lg-0 text-white d-flex justify-content-md-center">
            {widget(products, 'Products')}
          </div>

          {/* Contact Information Section */}
          <div className="col-md-4 col-lg-3 mt-5 mt-lg-0 text-white d-flex justify-content-md-center">
            <div className="widget">
              <h3 className="widget-title fs-24 mb-3">Contact Us</h3>
              
              <div className="d-flex align-items-start mb-3">
                <i className="uil uil-location-pin-alt fs-30 text-white" aria-hidden="true" />
                <address className="text-white ms-2 m-0 mt-1">
                  123 Tech Park, Ta. Richmond, Dist. Greater London, United Kingdom – SW1A 1AA
                </address>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <i className="uil uil-envelope fs-26 text-white" aria-hidden="true" />
                <a href="mailto:info@mineralo.com" className="link-body ms-2 text-white" aria-label="Send an email to Mineralo">
                  info@mineralo.com
                </a>
              </div>
              
              <div className="d-flex align-items-center">
                <i className="uil uil-phone-volume fs-26 text-white" aria-hidden="true" />
                <p className="mt-1 ms-2 fs-18 m-0">
                  <a href="tel:+919999999999" className="text-white" aria-label="Call Mineralo phone number">
                    +91 99999 99999
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mt-md-4 mb-3" />

        {/* Footer Bottom Section */}
        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-white text-center">
            © {currentYear} Mineralo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Fragment, useRef } from 'react';
import useSticky from 'hooks/useSticky';
import Image from 'next/image.js';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';
import { products } from '../data.js';

/**
 * Navbar component with responsive offcanvas menu, sticky behavior, and dropdown products menu
 * 
 * @param {object} props
 * @param {string} props.navClassName - Default navbar className
 * @param {string} props.navOtherClass - ClassName for navbar toggle button container (mobile)
 * @param {boolean} props.fancy - Whether to use fancy container styling
 * @param {boolean} props.stickyBox - Whether to reserve space on sticky navbar
 */
const Navbar = ({
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
  navOtherClass = 'navbar-other d-flex d-lg-none',
  fancy = false,
  stickyBox = true,
}) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const fixedClassName =
    'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // Main content inside the navbar, including logo, menu links, and mobile offcanvas menu
  const headerContent = (
    <Fragment>
      {/* Logo Section */}
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={
            <Image
              alt="Logo | Mineralo"
              src="/img/logo.webp"
              width={150}
              height={60}
              className="my-2"
              priority
            />
          }
        />
      </div>

      {/* Offcanvas navigation for mobile */}
      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        {/* Offcanvas header with logo and close button */}
        <div className="offcanvas-header d-lg-none offcanvas-bg">
          <NextLink
            href="/"
            title={<Image alt="Logo | Mineralo" src="/img/logo-light.webp" width={180} height={60} />}
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        {/* Offcanvas body with menu links */}
        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav align-items-lg-center">
            {/* Static links */}
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="About Us" className="nav-link" />
            </li>

            {/* Products dropdown menu */}
            <li className="nav-item dropdown">
              <DropdownToggleLink
                title="Products"
                className="nav-link dropdown-toggle"
                href="#"
              />
              <ul className="dropdown-menu mt-lg-3" data-bs-dismiss="offcanvas">
                {products.map(({ id, title }) => {
                  return (
                    <ListItemLink
                      key={id}
                      href="#"
                      title={title}
                      linkClassName="dropdown-item"
                    />
                  );
                })}
              </ul>
            </li>

            {/* Other static links */}
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Gallery" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Contact Us" className="nav-link" />
            </li>

            {/* Enquire Now button */}
            <li
              className="nav-item align-items-center d-flex mt-2 mt-lg-0 ms-lg-2"
              data-bs-dismiss="offcanvas"
            >
              <NextLink
                title="Enquire Now"
                href="#"
                className="btn btn-sm primary-bg text-white rounded border-0"
              />
            </li>
          </ul>

          {/* Offcanvas footer with contact info for mobile */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="info@mineralo.com"
                className="link-inverse"
                href="mailto:info@mineralo.com"
              />
              <br />
              <NextLink href="tel:+919999999999" title="+91 99999 99999" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hamburger button */}
      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {/* Spacer div to prevent layout jump when navbar becomes sticky */}
      {stickyBox && (
        <div
          style={{
            paddingTop: sticky ? navbarRef.current?.clientHeight || 0 : 0,
          }}
        />
      )}

      {/* Navbar with conditional sticky class */}
      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;

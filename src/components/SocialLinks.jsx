// Array of social media link objects with icon classes and URLs
const links = [
  {
    id: 1,
    icon: 'uil uil-facebook-f',
    url: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: 'uil uil-instagram',
    url: 'https://www.instagram.com/',
  },
  {
    id: 3,
    icon: 'uil uil-whatsapp',
    url: 'https://www.whatsapp.com/',
  },
];

const SocialLinks = ({ className = 'nav social mt-4' }) => {
  return (
    // Navigation container for social links
    <nav className={className} aria-label="Social media links">
      {links.map(({ id, icon, url }) => (
        // External link opens in a new tab with noreferrer for security
        <a
          href={url}
          key={id}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={icon.split(' ')[1].replace('uil-', '')} // Accessible label based on icon class
          className="me-3" // Adds spacing between icons
        >
          {/* Icon element with sizing, background and rounded styling */}
          <i className={`${icon} fs-30 bg-white rounded`} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;

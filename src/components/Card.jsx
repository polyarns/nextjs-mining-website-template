import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * Card Component
 * Renders a grid of card items with icon, title, description, and a CTA link.
 *
 * @param {Array} arr - Array of objects containing card data
 */
const Card = ({ arr = [] }) => {
  return (
    <div className="row gx-md-10 gy-5 d-flex justify-content-center">
      {arr.map((item) => (
        <div className="col-md-6 col-xl-4" key={item.id}>

          {/* Icon or Image */}
          <Image
            src={item.image}
            alt={`${item.title} | Mineralo`}
            width={300}
            height={300}
            layout='responsive'
            className="rounded"
          />

          {/* Card Title */}
          <Link href={item.url ? item.url :"#"}><h3 className="fs-20 fw-semibold mt-2 text-center">{item.title}</h3></Link>

          {/* Call-to-Action Link */}
        </div>
      ))}
    </div>
  );
};

// Prop validation (Optional, but helps prevent issues)
Card.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;

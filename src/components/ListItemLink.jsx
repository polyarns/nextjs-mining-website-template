import NextLink from './NextLink';

const ListItemLink = props => {
  const {
    linkClassName = 'nav-link',
    liClassName = 'nav-item',
    href,
    title
  } = props;
  return <li className={liClassName}>
      <NextLink className={linkClassName} href={href} title={title} />
    </li>;
};

export default ListItemLink;
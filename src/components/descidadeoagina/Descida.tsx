import { Link } from 'react-scroll';

export function ScrollDownLink() {
  return (
    <Link
      to="desenvolvidores" 
      smooth={true}
      duration={500}
    >
      Desça a página
    </Link>
  );
}

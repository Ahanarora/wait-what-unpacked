
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 py-5">
      <div className="container px-4 mx-auto">
        <Link to="/" className="block">
          <h1 className="font-playfair text-3xl font-bold text-center">
            Wait...What?
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;

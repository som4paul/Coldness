import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="font-bold">MyShop</Link>
      <div className="space-x-4">
        <Link to="/cart">Cart</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

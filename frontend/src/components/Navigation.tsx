import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="p-4 bg-gray-200 flex gap-4">
      <Link to="/" className="text-blue-600 hover:underline">Accueil</Link>
      <Link to="/connexion" className="text-blue-600 hover:underline">Connexion</Link>
      <Link to="/profil" className="text-blue-600 hover:underline">Profil</Link>
    </nav>
  );
}

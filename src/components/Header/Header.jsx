import { Link } from "react-router";

const Header = () => {
    return (
        <header className="flex gap-10 mb-4">
            <Link to="/" className="text-3xl text-blue-600 font-bold">Home</Link>
            <Link to="/login" className="text-3xl text-blue-600 font-bold">Login</Link>
            <Link to="/dashboard" className="text-3xl text-blue-600 font-bold">Dashboard</Link>
            <Link to="/prop-modal" className="text-3xl text-blue-600 font-bold">Cards</Link>
        </header>
    )
}

export default Header;
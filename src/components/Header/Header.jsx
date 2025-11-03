import { Link } from "react-router";

const Header = () => {
    return (
        <header className="flex gap-10 mb-4">
            <Link to="/" className="text-xl text-blue-600 font-bold">Home</Link>
            <Link to="/login" className="text-xl text-blue-600 font-bold">Login</Link>
            <Link to="/dashboard" className="text-xl text-blue-600 font-bold">Dashboard</Link>
            <Link to="/prop-modal" className="text-xl text-blue-600 font-bold">Cards</Link>
            <Link to="/spinner" className="text-xl text-blue-600 font-bold">Spinner</Link>
            <Link to="/users" className="text-xl text-blue-600 font-bold">Users</Link>
            <Link to="/products" className="text-xl text-blue-600 font-bold">Products</Link>
            <Link to="/cart" className="text-xl text-blue-600 font-bold">Cart</Link>
            <Link to="/products/list" className="text-xl text-blue-600 font-bold">Products-List</Link>
            <Link to="/expense" className="text-xl text-blue-600 font-bold">Expense-List</Link>
        </header>
    )
}

export default Header;
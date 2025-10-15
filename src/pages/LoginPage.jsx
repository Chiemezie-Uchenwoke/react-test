import { Link } from "react-router";
import useAuth from "../hooks/auth";
// import { useState } from "react";

const LoginPage = () => {
    // const [authState, setAuthState] = useState
    const {isAuthenticated, authenticateUser} = useAuth();
    return (
        <div className="w-full max-w-[40rem] border flex flex-col gap-8">
            <h2>Login Page</h2>

            <p>
                Current Login State: {isAuthenticated ? "User is authenticated" : "Not Authenticated"}
            </p>

            <button 
                className="bg-amber-400 py-2 px-8 cursor-pointer active:scale-95"
                onClick={authenticateUser}
            >Authenticate User</button>

            {/* <Link to="/dashboard" className="underline">Go To Dashboard</Link> */}

            <Link to="/" className="underline">Return Home</Link>
        </div>
    )
}

export default LoginPage;
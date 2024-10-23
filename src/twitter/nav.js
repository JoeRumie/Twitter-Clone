import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="nav nav-tabs mb-3">
            <Link className="nav-link" to="/twitter">Twitter</Link>
        </nav>
    )
};
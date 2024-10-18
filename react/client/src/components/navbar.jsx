import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <>
        <nav>
            <ul>
            <Link to="/home">
                <li>Home</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link>
                <Link to="/contact">
                <li>Contact</li>
                </Link>
            </ul>
        </nav>
        </>
    );
};
export const Navbar2 =()=>{
    return <h1>Navbar 2</h1>
}
export default Navbar;
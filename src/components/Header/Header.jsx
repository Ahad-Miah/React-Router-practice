import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex gap-3 font-bold justify-center mb-10 mt-5">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/users'>Users</Link>
        </div>
    );
};

export default Header;
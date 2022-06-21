import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>

            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/login">Login</Link>


        </div >
    )
}

export default Navbar
import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:userId", name: "User Profile" },
    ];


    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <IoCloseSharp className="" />
                        : <IoMenu className="" />
                }

            </div>
            <ul className={`md:flex duration-1000 absolute md:static px-6 
                ${open ? 'top-12' : '-top-60'}
                bg-yellow-200`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
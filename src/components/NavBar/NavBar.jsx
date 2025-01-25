import { useState } from "react";
import Link from "../Link/link";
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from "react-icons/io";
function NavBar() {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' }
      ];
      const [open,setOpen]= useState(false)
    return (   
   <nav className="text-black text-2xl p-6 bg-yellow-400 ">
        <div  className="lg:hidden" onClick={() => setOpen(!open)}>
        {
            open===true ? <IoMdClose className="text-2xl"></IoMdClose>
            :<CiMenuFries className="text-2xl "></CiMenuFries>
        }
        
        </div>
        
        <ul className={`md:flex  absolute duration-1000 md:static  ${ open ? 'top-12' : '-top-60' }
         bg-yellow-400 px-6 `}>
            {
                routes.map( route => <Link key={route.id}  route={route} > </Link>
                    )
            }
        </ul>
   </nav>

  )
}

export default NavBar
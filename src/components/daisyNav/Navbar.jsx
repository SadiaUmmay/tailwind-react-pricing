import React, { useState } from 'react';
import Link from './Link';
import { Menu, MenuIcon, X } from 'lucide-react';

const navigationData = [
    {
      id: 1,
      name: "Home",
      url: "/home"
    },
    {
      id: 2,
      name: "About",
      url: "/about"
    },
    {
      id: 3,
      name: "Services",
      url: "/services"
    },
    {
      id: 4,
      name: "Blog",
      url: "/blog"
    },
    {
      id: 5,
      name: "Contact",
      url: "/contact"
    }
  ];
  
const Navbar = () => {
  const [open, setOpen]=useState(true)
  const links =  navigationData.map(route =>  <Link key={route.id} route={route}></Link>
  )
    return (
        <div className='flex justify-between mx-10 mt-6 text-black'>
          <span className='flex gap-3 ' onClick={()=> setOpen(!open)}>
            {
            open ? 
            <MenuIcon className='md:hidden'></MenuIcon> : 
            <X className='md:hidden'></X>
            }
          <ul className={`md:hidden absolute duration-1000
            ${open ? "-top-40": "top-18"}
              bg-amber-200`}>
            {links }
          </ul>
          <h3>My Navbar</h3>
          </span>
            <ul className='md:flex gap-10 hidden '>
                {
                   links
                }
            </ul>
            <button>Sign In</button>
        </div>
    );
};

export default Navbar;
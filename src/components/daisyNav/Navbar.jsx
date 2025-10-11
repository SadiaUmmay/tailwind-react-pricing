import React from 'react';
import Link from './Link';

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
    return (
        <div>
            <ul className='flex'>
                {
                    navigationData.map(route =>  <Link key={route.id} route={route}></Link>
                        // <li>
                        //     <a href={route.url}>{route.name}</a>
                        // </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Navbar;
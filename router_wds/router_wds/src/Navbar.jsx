import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
  return (
    <nav className='nav'>
        <Link to="/" className='site-title'>P (I) XAR</Link>
        <ul>
            <li>
            <CustomLink to="/">Home</CustomLink> 
            </li>
            <li>
            <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
             <CustomLink to="/contact">Contact</CustomLink>
            </li>
        </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
const resolvedPath = useResolvedPath(to)

return (
   <li>
    <Link to={to} {...props}>
        {children}
    </Link>
   </li> 
)


}

export default Navbar
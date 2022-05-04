import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
          <Link to="/"  className={navLinkText}>(Index)</Link>
          </li>
          <li className={navLinkItem}>
          <Link to="/home"  className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
          <Link to="/about"  className={navLinkText}>About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    // <div>
    //   <title>{pageTitle}</title>
    //   <nav>
    //     <ul>
    //       <li><Link to="/">(Index)</Link></li>
    //       <li><Link to="/home">Home</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //     </ul>
    //   </nav>
    //   <main>
    //     <h1>{pageTitle}</h1>
    //     {children}
    //   </main>
    // </div>
  )
}
export default Layout
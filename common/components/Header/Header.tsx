import React from "react";
import Link from "next/link";
import classes from "./Header.module.scss";

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div className={`${classes.header} container`}>
        <Link href="/">
          <a className={classes.logo}>Pets</a>
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/">Adoption</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/products/1">Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Link from "next/link";
import classes from "./Footer.module.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={classes.root}>
      <div className={`${classes.footer} container`}>
        <Link href="/">
          <a className={classes.logo}>Pets</a>
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <p>Quick links</p>
              <Link href="/">Adoption</Link>
              <Link href="/">Services</Link>
              <Link href="/products/1">Products</Link>
            </li>
            <li>
              <p>Follow us</p>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </li>
            <li>
              <p>Contact</p>
              <a href="#">+0 (000) 000-0000</a>
              <a href="#">someone@example.com</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

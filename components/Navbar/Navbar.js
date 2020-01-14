import React from 'react';
import classes from './navbar.module.css'
import Link from "next/link";

const Navbar = ({path}) => {
    return (
        <nav className={classes.nav}>
            <img src="/images/logo.svg" alt=""/>
            <div className={classes.navLinks}>
                <Link href={'/'}>
                    <a className={[
                        classes.navLink,
                        path === '/' ? classes.navLinkActive : ''
                    ].join(' ')}>
                        About Daniel
                    </a>
                </Link>
                <Link href={'/work'}>
                    <a className={[
                        classes.navLink,
                        path === '/work' ? classes.navLinkActive : ''
                    ].join(' ')}>
                        Daniel’s Work
                    </a>
                </Link>
                <Link href={'/contact'}>
                    <a className={[
                        classes.navLink,
                        path === '/contact' ? classes.navLinkActive : ''
                    ].join(' ')}>
                        Contact Daniel
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
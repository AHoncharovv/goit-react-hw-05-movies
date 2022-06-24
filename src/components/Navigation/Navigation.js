import React from 'react';
import {  NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';


export default function Navigation() {
    return (
        <>
            <nav className={styles.navigation}>
                <NavLink to='/'
                    className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)} 
                >
                    Home
                </NavLink>
                <NavLink to='/movies'
                    className={({ isActive }) => (isActive ? `${styles.activeLink}` : `${styles.link}`)}
                >
                    Movies
                </NavLink>
            </nav>
            <hr />
        </>
    )
}
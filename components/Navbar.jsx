import styles from "../styles/Navbar.module.css";
import Image from "next/image"
import { useState } from "react";
const Navbar = () => {
    const [active , setActive] = useState(false)
    
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/logo.png" alt="" width="60" height="60" />
                <h2 className={styles.header}>Boplas</h2>
            </div>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/call logo.png" alt="" width="25" height="25" />
                </div>
                <div className={styles.text}>
                    <div className={styles.text}> ORDER NOW</div>
                    <div className={styles.text}>08030405242</div>
                </div>
            </div>
            <div className={styles.nav}>
                <ul className={styles.listItem}>
                    <li ><a href="http://www.boplas.com.ng">Home</a></li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <button className={`${styles.hamburger} ${ active ? styles.isActive : styles.hamburger}`} onClick = {() => setActive(!active)}>
                    <div className={styles.bar}></div>
                </button>
                <div className={`${styles.mobileNav} ${active ? styles.activeNav : styles.mobileNav}`}>
                    <ul>
                    <li ><a href="http://www.boplas.com.ng">Home</a></li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                       
                    </ul>
                </div>
            </div>
            
            <div className={styles.item}>
                <input className={styles.search} type="text" placeholder="Search Product"></input>
                <div className={styles.cart}>
                    <Image src="/img/cart-icon-2.png" height="55" width="45" alt="Search" />
                </div>
                <div className={styles.number}>
                    {3}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
  
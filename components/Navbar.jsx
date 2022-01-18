import styles from "../styles/Navbar.module.css";
import Image from "next/image"
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.log}>
                <Image src="/logo.png" alt="" width="80" height="80"/>
            </div>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/call logo.png" alt="" width="22" height="22" />
                </div>
                <div className={styles.text}>
                    <div className={styles.text}> ORDER NOW</div>
                    <div className={styles.text}>08022222222</div>
                </div>
            </div>
            <div className={styles.item}>center</div>
            <div className={styles.item}>right</div>
        </div>
    )
}

export default Navbar

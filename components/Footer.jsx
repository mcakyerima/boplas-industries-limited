
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <>
        
        <div className={styles.Container}>
            <div className={styles.item}>
                 <Image src="/img/logo.png" height="60" width="60" className={styles.logo}/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <div className={styles.motto}>
                        <h2 className={styles.title2}>OH! YES, WE MANUFACTURE THE BEST PLASTIC PRODUCTS</h2>
                    </div>
                </div>
                <div className={styles.card}>
                        <h1 className={styles.title}>FIND OUT MORE</h1>
                        <p className={styles.text}>
                            No. 2 Auno Street,
                            <br/> Maiduguri, 
                            <br/> Borno State
                            <br/> 08030305222
                        </p>
                </div>
                <div className={styles.card}>
                        <h1 className={styles.title}> WORKING HOURS</h1>
                        <p className={styles.text}>
                            MONDAY UNTIL FRIDAY
                            <br/> 9:00 - 05:00
                        </p>
                        <p className={styles.text}>
                            SARTUDAY - SUNDAY
                            <br/> 10:00 - 02:00
                        </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.item}>
                        <div className={styles.logo}>
                            <Image src="/img/TWITTER.png" height="50" width="50" />
                        </div><div className={styles.logo}>
                          <Image src="/img/FACEBOOK.png" height="50" width="50" />
                        </div><div className={styles.logo}>
                            <Image src="/img/WHATSAPP.png" height="50" width="50" />
                        </div><div className={styles.logo}>
                            <Image src="/img/INSTAGRAM.png" height="50" width="50" />
                        </div>
                    </div>
                </div>
        </div>
        </div>
        <div className={styles.copyright}>
            <h2 className={styles.textFooter}> Copyright &copy; 2022, Boplas Industries Limited. All rights reserved.</h2>
        </div>
        </>
    )
}

export default Footer

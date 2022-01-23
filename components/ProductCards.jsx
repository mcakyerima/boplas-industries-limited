import Image from "next/image";
import styles from "../styles/ProductCards.module.css";
const ProductCards = () => {
  return (<div className={styles.Container}>
      <div className={styles.img}>
      <Image src="/img/bowl.png" height="110px" width="130px" alt="product"/>
      </div>
             <h1 className={styles.title}>BOWL</h1>
             <span className={styles.price}>N1200</span>
             <p className={styles.desc}>
                 high qulaity wash hand bowl at affodable price
             </p>
         </div>);
};

export default ProductCards;

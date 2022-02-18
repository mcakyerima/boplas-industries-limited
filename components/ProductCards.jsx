import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProductCards.module.css";
const ProductCards = ({product}) => {
  return (<div className={styles.Container}>
      <div className={styles.img}>
        <Link href={`/product/${product._id}`}>
            <Image src={product.img} height="110px" width="130px" alt="product"/>
        </Link>
      </div>
             <h1 className={styles.title}>{product.title}</h1>
             <span className={styles.price}>N{product.prices[0]}</span>
             <p className={styles.desc}>
                 {product.desc}
             </p>
         </div>);
};

export default ProductCards;

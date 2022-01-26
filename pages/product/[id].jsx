import styles from "../styles/Featured.module.css";
import Image from "next/image"

const Product = () => {
    const product = {
        id : 1,
        name : 'bowl',
        quantity : 100,
        desc : "the quick brown fox jumps over the lazy dogs",
        rating : 2,
        price : [1.2 , 2.5 , 3.5],
        img : "/img/bowl.png"
    };

    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={product.img} layout="fill" alt={product.name}/>
            </div>
        </div>
        <div className={styles.right}>
            <h1>this is {product.name}</h1>
        </div>

    </div>
};

export default Product;  

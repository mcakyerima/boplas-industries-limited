import styles from "/styles/Product.module.css";
import Image from "next/image"
import { useState } from "react";

const Product = () => {
    const product = {
        id : 1,
        name : 'BOWL',
        quantity : 100,
        desc : "the quick brown fox jumps over the lazy dogs, this is just  an example text describing the product before the actual product description fetched from the api",
        rating : 2,
        price : [1500 , 6000 ,6500],
        img : "/img/bowl.png"
    };

    const [price , setPrice] = useState(0);

    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={product.img} layout="fill" alt={product.name}/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{product.name}</h1>
            <span className={styles.price}>N{product.price[price]}</span>
            <p className={styles.desc}>{product.desc}</p>
            <h3 className={styles.choose}>Available Colors</h3>
            {/* <div className={styles.colors}>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
            </div> */}
            <div className={styles.colors}>
                        <div className={styles.c_blue}><span></span></div>
                        <div className={styles.c_red}><span></span></div>
                        <div className={styles.c_green}><span></span></div>
            </div>
            
            <p className={styles.header}>Choose Colors</p>
            <div className={styles.colorOptions}>
                <div className={styles.options}>
                    <input
                    type="checkbox"
                    id="blue"
                    name="blue"
                    className={styles.checkbox}
                    />
                    <label htmlFor="blue">Blue</label>
                </div>
                <div className={styles.options}>
                    <input
                    type="checkbox"
                    id="green"
                    name="green"
                    className={styles.checkbox}
                    />
                    <label htmlFor="green">Green</label>
                </div> <div className={styles.options}>
                    <input
                    type="checkbox"
                    id="orange"
                    name="orange"
                    className={styles.checkbox}
                    />
                    <label htmlFor="orange">Orange</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to cart</button>
            </div>
        </div>

    </div>
};

export default Product;  

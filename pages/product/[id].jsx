import styles from "/styles/Product.module.css";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

const Product = ({product}) => {

    const [price , setPrice] = useState(0);

    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={product.img} layout="fill" alt={product.name}/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{product.name}</h1>
            <span className={styles.price}>N{product.prices[price]}</span>
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

// fetch product using product id and rendering

export const getServerSideProps = async ({params}) => {
    const response = await axios.get(`http://localhost:3000/api/product/${params.id}`)
    return {
      props: {
        product: response.data
      }
    }
  
  }

export default Product;
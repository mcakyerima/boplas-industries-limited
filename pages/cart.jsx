import React from 'react';
import styles from "../styles/Cart.module.css"
import Image from "next/image"
const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.trTitle}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image
                            src="/img/bowl.png"
                            objectFit="contin"
                            layout="fill"
                            // height="40"
                            // width="45"
                            alt="product"/>
                        </div>  
                    </td>   
                    <td>
                        <span className={styles.name}>Bowl</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            the quick brown fox jumps over the lasy dogs
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>N1500</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>N3333</span>
                    </td>
                </tr>

                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image
                            src="/img/bowl.png"
                            objectFit="contin"
                            layout="fill"
                            // height="40"
                            // width="45"
                            alt="product"/>
                        </div>  
                    </td>   
                    <td>
                        <span className={styles.name}>Bowl</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            the quick brown fox jumps over the lasy dogs
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>N1500</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>N3333</span>
                    </td>
                </tr>

            </table>
        </div>
        
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal</b>N1500.33
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>N0.00
                </div><div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>TOTAL:</b>N1500.00
                </div>
                <button className={styles.button}>CHECK OUT NOW</button>
            </div>
        </div>
    </div>
      
  ) 
};

export default Cart;

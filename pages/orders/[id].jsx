import React from 'react';
import styles from "/styles/Orders.module.css";
import Image from "next/image";

const Orders = () => {
    const status = 0
    const statusClass = (index) => {
        if (index - status < 1) return styles.done
        if (index - status === 1) return styles.inProgress
        if (index - status > 1) return styles.undone
    }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
                <tr className={styles.trTitle}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <span className={styles.id}>232323233dd</span>
                    </td>
                    <td>
                        <span className={styles.name}>
                            Abatcha Jarawa
                        </span>
                    </td>
                    <td>
                        <span className={styles.address}>Giwa Barraks Maiduguri, Borno State</span>
                    </td>
                    <td>
                        <span className={styles.total}>N3333</span>
                    </td>
                </tr>

            </table>
            </div>

            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width={30} height={30}/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                         <Image src="/img/checked.png" width={20} height={20}/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/bike.png" width={30} height={30}/>
                    <span>Processing</span>
                    <div className={styles.checkedIcon}>
                         <Image src="/img/checked.png" width={20} height={20}/>
                    </div>
                </div><div className={statusClass(2)}>
                    <Image src="/img/bike.png" width={30} height={30}/>
                    <span>On The Way</span>
                    <div className={styles.checkedIcon}>
                         <Image src="/img/checked.png" width={20} height={20}/>
                    </div>
                </div><div className={statusClass(3)}>
                    <Image src="/img/delivered.png" width={30} height={30}/>
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                         <Image src="/img/checked.png" width={20} height={20}/>
                    </div>
                </div>
            </div>
        
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
                <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>

  )
};

export default Orders;


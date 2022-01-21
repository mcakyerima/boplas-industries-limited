import styles from "../styles/Featured.module.css";
import Image from "next/image"
const Featured = () => {

    const images = [
        "/img/wash-hand.png",
        "/img/chair-side.png",
        "/img/table.png",
        "/img/school-desk.png",
        "/img/bowl.png",
    ]
  return (
        <div className={styles.Container}>
            <div className={styles.arrowContainer} style={{left:0}}>
                <Image src="/img/arrow-left.png" height="80" width="50"  />
            </div>
            <div className={styles.wrapper}>
                
                    {images.map((img, index) => (
                        <div className={styles.imgContainer} key={index}>
                             <Image src={img}  height="800" width="800"  />
                        </div>
                    ))
                    }
                
            </div>
            <div className={styles.arrowContainer}  style={{right:0}}>
                <Image src="/img/arrow-right.png" height="80" width="50" style={{left: 0}} />
            </div>
        </div>
  );
};

export default Featured;

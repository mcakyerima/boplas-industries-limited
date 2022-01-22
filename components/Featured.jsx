import styles from "../styles/Featured.module.css";
import Image from "next/image"
import { useState} from 'react'; 

const Featured = () => {

    const [index, setIndex] = useState(0);



    const images = [
        "/img/carousel.png",
        "/img/carousel-1.png",
        "/img/carousel-2.png",
        "/img/carousel-3.png",
    ]

    const handleArrow = (direction) => {
        //check the direction of arrow click
        if(direction === "left"){
            //if index is not zero? decrese if index is 0 then go to last image index
            setIndex( index !== 0 ? index - 1 : 3)
        }

        //check the direction of arrow click
        if(direction === "right"){
            //if index is not zero? decrese if index is 0 then go to last image index
            setIndex( index !== 3 ? index + 1 : 0)
    }
    }
    console.log("this is index" , index)

  return (
        <div className={styles.Container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={() => handleArrow("left")}>
                <Image src="/img/arrow-left.png" height="80" width="50"  />
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                
                    {images.map((img, index) => (
                        <div className={styles.imgContainer} key={index}>
                             <Image src={img}  layout="fill" objectFit="contain" style={{transform: `translateX(${-100*index}vw)`}}/>
                        </div>
                    ))
                    }
                
            </div>
            <div className={styles.arrowContainer}  style={{right:0}}>
                <Image src="/img/arrow-right.png" height="80" width="50" style={{left: 0}}  onClick={() => handleArrow("right")} />
            </div>
        </div>
  );
};

export default Featured

import styles from '@/styles/AppComponents/LogicUI/Sliders/SliderLanding.module.scss'
import { useState } from 'react';


const SliderLanding = () => {
    const images = [
        {
            "id": 1,
            "images": "./Slider/1.png",
            "text": "NAC Sport Championship 2020",
            "status": false
        },
        {
            "id": 2,
            "images": "./Slider/1.png",
            "text": "NAC Sport Championship 2020",
            "status": true
        },
        {
            "id": 3,
            "images": "./Slider/2.png",
            "text": "IEM KATOWICE CS:GO",
            "status": false
        },
        {
            "id": 4,
            "images": "./Slider/2.png",
            "text": "IEM KATOWICE CS:GO",
            "status": true
        },
        {
            "id": 5,
            "images": "./Slider/3.png",
            "text": "THE ELEAGUE - CS:GO Premier",
            "status": false
        },
        {
            "id": 6,
            "images": "./Slider/3.png",
            "text": "THE ELEAGUE - CS:GO Premier",
            "status": false
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevClick = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <div className={styles.Carusel}>
            <div onClick={handlePrevClick} className={styles.CaruselLeftButton}>
                <svg width="68" height="68" viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.338 21.0233L37.3147 34L24.338 47.005L28.333 51L45.333 34L28.333 17L24.338 21.0233Z" fill="#F8F8F8" fillOpacity="0.6"/>
                </svg>
            </div>
            <div className={styles.CaruselContent}>
                {images.map(Img => {
                    return (
                        <div className={styles.CaruselCard} key={Img.id}>
                            <img className={styles.CaruselCardImage} src={Img.images} alt='' />
                            <div className={styles.CaruselCardInfo}>
                                <div className={styles.CaruselCardInfoStatus}>
                                    <a>Онлайн</a>
                                </div>
                                <a className={styles.CaruselCardInfoText}>
                                    {Img.text}
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div onClick={handleNextClick} className={styles.CaruselRightButton}>
                <svg width="68" height="68" viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.338 21.0233L37.3147 34L24.338 47.005L28.333 51L45.333 34L28.333 17L24.338 21.0233Z" fill="#F8F8F8" fillOpacity="0.6"/>
                </svg>                    
            </div>
        </div>
    );
};

export default SliderLanding;
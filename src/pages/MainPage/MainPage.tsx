import Slide from "../../assets/images/first-slide.png";
import {ReactComponent as Trempel} from "../../assets/images/trempel.svg";
import {ReactComponent as Cards} from "../../assets/images/credit-card.svg";
import {ReactComponent as Reload} from "../../assets/images/reload.svg";
import {ReactComponent as Delivery} from "../../assets/images/fast-delivery.svg";
import {ClothCard} from "../../components/UI/ClothCard";
import {useEffect, useState} from "react";
import {clothResponse} from "../../services/ClothApi/type.ts";
import {clothApi} from "../../services/ClothApi/clothApi.ts";
import styles from "./MainPage.module.css";

export const MainPage = () => {

    const [clothContent, setClothContent] = useState<clothResponse[]>([]);

    useEffect(() => {
        clothApi.getClothes('').then(res => setClothContent(res))
    }, []);


    return (
        <div className={styles.wrap}>
            <div className={styles.slider}>
                <img src={Slide} alt=""/>
            </div>
            <span className={styles.infoStore}>
                <div>
                    <Cards/>Безопасная оплата
                    кредитной картой
                </div>
                <div>
                    <Delivery/>Быстрая
                    доставка
                </div>
                <div>
                    <Trempel/>Примерка перед покупкой
                </div>
                <div>
                    <Reload/>Бесплатный
                    возврат
                </div>
            </span>
            <span className={styles.novelties}>
                <h2>Наши новинки</h2>
                <div className={styles.clothBlock}>
                    {clothContent.map(cloth => <ClothCard key={cloth.id} {...cloth}/>)}
                </div>
            </span>
        </div>
    );
};
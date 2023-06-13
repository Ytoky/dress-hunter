import styles from "./CatalogPage.module.css";
import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../../assets/images/arrow-right.svg";
import {ReactComponent as ArrowSort} from "../../assets/images/arrow-up.svg";
import {JSX, useEffect, useState} from "react";
import {ClothResponse} from "../../services/ClothApi/type.ts";
import {clothApi} from "../../services/ClothApi/clothApi.ts";
import {ClothCard} from "../../components/UI/ClothCard";

export const CatalogPage = () => {

    const [clothContent, setClothContent] = useState<ClothResponse[]>([]);

    const [sortPrice, setSortPrice] = useState<'' | 'desc' | 'asc'>('');

    useEffect(() => {
        clothApi.getClothes(sortPrice ? `?_sort=price&_order=${sortPrice}` : '').then(setClothContent);
    }, [sortPrice]);

    function changeSortPrice(): void {
        if (sortPrice === '') {
            setSortPrice('asc')
        } else if (sortPrice === 'asc') {
            setSortPrice('desc')
        } else {
            setSortPrice('')
        }
    }

    function arrowSvgElement(): JSX.Element | null {
        if (sortPrice === 'asc') {
            return <ArrowSort/>
        } else if (sortPrice === 'desc') {
            return <ArrowSort className={styles.arrowDown}/>
        }
        return null
    }

    return (
        <div className={styles.wrap}>
            <nav className={styles.navPanel}><Link to={"/"}>Главная</Link><Arrow/>Каталог</nav>
            <h1>Каталог</h1>
            <div className={styles.mainContent}>
                <span className={styles.clothHeader}>
                    Всего {clothContent.length} товаров
                    <div className={styles.sort}>
                        Сортировать по:
                        <button onClick={changeSortPrice}>Стоимость{arrowSvgElement()}</button>
                    </div>
                </span>
                <span className={styles.clothWrap}>
                    {
                        clothContent.map(cloth => <ClothCard key={cloth.id} {...cloth}/>)
                    }
                </span>
            </div>
        </div>
    );
};

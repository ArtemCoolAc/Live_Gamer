import React, {useEffect, useState} from "react";
import styles from '../Styles/SimpleFetcher.module.css'

export function SimpleFetcher() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const TOKEN = '24bd64522a714a';

    // Примечание: пустой массив зависимостей [] означает, что
    // этот useEffect будет запущен один раз
    // аналогично componentDidMount()
    let metaData = {};
    useEffect(() => {
        fetch(`https://ipinfo.io/json?token=${TOKEN}`)
            .then(res => res.json())
            .then(someData => {metaData = someData; return metaData})
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                // Примечание: Обрабатывать ошибки необходимо именно здесь
                // вместо блока catch(), чтобы не пропустить
                // исключения из реальных ошибок в компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Нет данных об устройстве: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className={styles.container}>IP-адрес {data.ip} Город {data.city}</div>
        );
    }
}
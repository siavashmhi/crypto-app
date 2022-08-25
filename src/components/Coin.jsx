import React from 'react';
import styles from '../styles/coin.module.css'

const Coin = (props) => {

    const {name, image, symbol, current_price, market_cap, market_cap_change_24h} = props.data

    return (
        <div className={styles.container}>
            <img src={image} alt='img' />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>{current_price.toLocaleString()}</span>
            <span className={market_cap_change_24h > 0 ? styles.greenPriceChange : styles.redPriceChange}>{market_cap_change_24h.toFixed(2)}</span>
            <span>{market_cap.toLocaleString()}</span><br />
        </div>
    );
};

export default Coin;
import React, { useEffect, useState} from 'react';
import getCoins from '../services/api';
import Coin from './Coin';
import spinner from '../gif/spinner.gif'
import styles from '../styles/landing.module.css'

const Landing = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getData = async() => {
            const data = await getCoins()
            setCoins(data)
        }
        getData()
    })

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    //check and filter with value of input
    const newCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <React.Fragment>
            <input type='text' placeholder='search' value={search} onChange={searchHandler}  />
            {
                coins.length ? 
                <div className={styles.coinContainer}>
                    {newCoins.map(item => <Coin key={item.id} data={item} /> )}
                </div> : 
                <div>
                    <img className={styles.spinner} src={spinner} alt='gif' />
                </div>
            }
        </React.Fragment>
    );
};

export default Landing;
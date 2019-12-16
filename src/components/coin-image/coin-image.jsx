import React from 'react'

const CoinImage = ({ coin, style }) => {
    return (
        <img alt={coin.CoinSybol} 
            style={style || {height: '50px'}} 
            src={`http://cryptocompare.com/${coin.ImageUrl}`}/>
    )
}

export default CoinImage